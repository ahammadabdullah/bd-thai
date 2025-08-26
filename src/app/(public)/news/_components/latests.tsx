"use client";

import { useTranslations } from "next-intl";
import { useQuery } from "@tanstack/react-query";
import { getAllBlogs } from "@/actions/blogs";
import PostCard from "@/components/blogs/post-card";

const LatestPosts = () => {
  const t = useTranslations("news");

  const { data: posts } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => await getAllBlogs(),
  });

  return (
    <section className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          {t("articles.title")}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts?.map((post, index) => (
            <PostCard key={index} post={post} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
