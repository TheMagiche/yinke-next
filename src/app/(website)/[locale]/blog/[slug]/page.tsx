import BlogDetail from "@/src/components/BlogDetail";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;

  return <BlogDetail slug={slug} />;
}
