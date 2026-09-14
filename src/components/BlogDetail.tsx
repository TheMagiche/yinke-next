"use client";

import ContactInfo from "@/src/components/ContactInfo";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocalePrefix } from "@/src/utils/useLocalePrefix";

type BlogPost = {
  slug: string;
  title: string;
  publishedAt: string;
  author: string;
  image?: string;
  content: string;
};

type BlogDetailProps = {
  slug: string;
};

export default function BlogDetail({ slug }: BlogDetailProps) {
  const { i18n, t } = useTranslation();
  const prefix = useLocalePrefix();
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch(`/api/blogs?locale=${encodeURIComponent(i18n.language)}`, {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) throw new Error("Unable to load blog");
        return response.json() as Promise<BlogPost[]>;
      })
      .then((posts) => setPost(posts.find((item) => item.slug === slug) ?? null))
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setPost(null);
      });

    return () => controller.abort();
  }, [i18n.language, slug]);

  if (!post) {
    return (
      <main className="blog-detail-page">
        <p className="blog-detail-empty">{t("home.blogNotFound")}</p>
      </main>
    );
  }

  const paragraphs = post.content
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.replace(/\*\*/g, "").trim())
    .filter(Boolean);

  return (
    <main className="blog-detail-page">
      <article className="blog-detail-article">
        <Link href={`${prefix}/#blog-title`} className="blog-detail-back">
          <ArrowLeftIcon aria-hidden="true" />
          <span>{t("home.backToBlogs")}</span>
        </Link>
        <p className="practice-eyebrow">{t("home.blogEyebrow")}</p>
        <h1>{post.title}</h1>
        <div className="blog-detail-meta">
          <time dateTime={post.publishedAt}>
            {new Intl.DateTimeFormat(i18n.language, {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(new Date(post.publishedAt))}
          </time>
          {post.author && <span>{post.author}</span>}
        </div>
        {post.image && (
          <div
            className="blog-detail-image"
            style={{ backgroundImage: `url(${post.image})` }}
            role="img"
            aria-label={post.title}
          />
        )}
        <div className="blog-detail-content">
          {paragraphs.map((paragraph, index) => (
            <p key={`${post.slug}-${index}`}>{paragraph}</p>
          ))}
        </div>
      </article>

      <section className="contact-section blog-detail-contact">
        <div className="contact-section-intro">
          <p className="practice-eyebrow">{t("nav.contact")}</p>
          <h2 className="fold-label">{t("home.reachUs")}</h2>
          <p>{t("home.altSubText")}</p>
        </div>
        <ContactInfo />
      </section>
    </main>
  );
}
