"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { useLocalePrefix } from "@/src/utils/useLocalePrefix";

type BlogPost = {
  slug: string;
  title: string;
  publishedAt: string;
  author: string;
  image?: string;
  excerpt: string;
  content?: string;
};

export default function BlogList() {
  const { i18n, t } = useTranslation();
  const prefix = useLocalePrefix();
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    fetch(`/api/blogs?locale=${encodeURIComponent(i18n.language)}`, {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) throw new Error("Unable to load blogs");
        return response.json() as Promise<BlogPost[]>;
      })
      .then(setPosts)
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setPosts([]);
      });

    return () => controller.abort();
  }, [i18n.language]);

  return (
    <section className="blog-section" aria-labelledby="blog-title">
      <div className="blog-section-heading">
        <p className="practice-eyebrow">{t("home.blogEyebrow")}</p>
        <h2 id="blog-title">{t("home.blogTitle")}</h2>
      </div>
      <div className="blog-grid">
        {posts.map((post) => (
          <article className="blog-card" key={post.slug}>
            <Link
              href={`${prefix}/blog/${post.slug}`}
              className="blog-card-link"
              aria-label={`${t("home.readBlog")}: ${post.title}`}
            >
            {post.image && (
              <div
                className="blog-card-image"
                style={{ backgroundImage: `url(${post.image})` }}
                role="img"
                aria-label={post.title}
              />
            )}
            <div className="blog-card-content">
              <p className="blog-card-date">
                {new Intl.DateTimeFormat(i18n.language, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }).format(new Date(post.publishedAt))}
              </p>
              <h3>{post.title}</h3>
              <p className="blog-card-excerpt">{post.excerpt}</p>
              {post.author && <p className="blog-card-author">{post.author}</p>}
            </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
