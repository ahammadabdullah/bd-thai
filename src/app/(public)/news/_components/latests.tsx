"use client";

import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";

const LatestPosts = () => {
  const t = useTranslations("news");

  const posts = [
    {
      slug: "new-sustainable-packaging-initiative",
      title: "New Sustainable Packaging Initiative",
      date: "March 15, 2024",
      author: "BD Thai Food Team",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      slug: "expanding-global-reach",
      title: "Expanding Global Reach",
      date: "March 10, 2024",
      author: "Marketing Team",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      slug: "innovation-in-beverage-technology",
      title: "Innovation in Beverage Technology",
      date: "March 5, 2024",
      author: "R&D Department",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ];

  return (
    <section className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          {t("articles.title")}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-9 relative h-48">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.description}
                </p>
                <Link href={`/news/${post.slug}`}>
                  <Button variant="outline" className="group">
                    {t("articles.read")}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
