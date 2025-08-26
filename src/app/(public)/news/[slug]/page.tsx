import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowLeft, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  getAllBlogSlugs,
  getBlogBySlug,
  getRelatedPostBySlug,
} from "@/actions";
import { getReadTime } from "@/lib/utils";
import RelatedPosts from "@/components/blogs/related-posts";

export default async function BlogPostPage({ params }: { params: any }) {
  const { slug } = await params;
  const t = await getTranslations("news");
  const post = await getBlogBySlug(slug);
  const relatedPosts = await getRelatedPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-6">
        <Link href={`/news`}>
          <Button variant="ghost" className="mb-8 mt-12">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("articles.back")}
          </Button>
        </Link>

        <article className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="relative h-[600px] w-full">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(post?.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {getReadTime(post.description)}
              </div>
            </div>
            <p>
              {post.description.split("\n").map((para, idx) => (
                <span key={idx}>
                  {para}
                  <br />
                </span>
              ))}
            </p>
          </div>
        </article>

        {/* Related Posts */}
        <RelatedPosts relatedPosts={relatedPosts} t={t} />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();

  return slugs.map((slug: string) => ({
    slug,
  }));
}

export const revalidate = 120;
