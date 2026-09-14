import matter from "gray-matter";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

type BlogLocale = "en" | "zh";

type BlogPost = {
  slug: string;
  title: string;
  publishedAt: string;
  author: string;
  image?: string;
  excerpt: string;
  content: string;
};

const localeDirectories: Record<string, BlogLocale> = {
  en: "en",
  "zh-CN": "zh",
};

const toExcerpt = (content: string) =>
  content
    .replace(/[#*_>`~\[\]()]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 180);

export async function GET(request: Request) {
  const requestedLocale = new URL(request.url).searchParams.get("locale") ?? "en";
  const contentLocale = localeDirectories[requestedLocale];

  if (!contentLocale) {
    return NextResponse.json({ error: "Unsupported locale" }, { status: 400 });
  }

  const contentDirectory = path.join(
    process.cwd(),
    "outstatic",
    "content",
    contentLocale,
  );
  const filenames = (await readdir(contentDirectory)).filter((filename) =>
    /\.(md|mdx)$/.test(filename),
  );

  const posts = await Promise.all(
    filenames.map(async (filename): Promise<BlogPost | null> => {
      const source = await readFile(path.join(contentDirectory, filename), "utf8");
      const parsed = matter(source);

      if (parsed.data.status !== "published") return null;

      const publishedAt = new Date(parsed.data.publishedAt);
      if (Number.isNaN(publishedAt.getTime())) return null;

      return {
        slug: parsed.data.slug ?? filename.replace(/\.(md|mdx)$/, ""),
        title: String(parsed.data.title ?? "").trim(),
        publishedAt: publishedAt.toISOString(),
        author: String(parsed.data.author?.name ?? ""),
        image: parsed.data.image ? String(parsed.data.image) : undefined,
        excerpt: toExcerpt(parsed.content),
        content: parsed.content,
      };
    }),
  );

  return NextResponse.json(
    posts
      .filter((post): post is BlogPost => post !== null)
      .sort(
        (first, second) =>
          new Date(second.publishedAt).getTime() -
          new Date(first.publishedAt).getTime(),
      ),
  );
}
