import { Blog } from "@prisma/client";
import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function RelatedPosts({ relatedPosts, t }: { relatedPosts: Blog[]; t: any }) {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">{t("articles.related")}</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {relatedPosts.map((relatedPost) => (
          <Link
            key={relatedPost.slug}
            href={`/news/${relatedPost.slug}`}
            className="group"
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
              <div className="relative h-48 w-full">
                <Image
                  src={relatedPost.image || "/placeholder.svg"}
                  alt={relatedPost.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(relatedPost?.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {relatedPost.title}
                </h3>
                <p className="text-gray-600 line-clamp-2">
                  {relatedPost.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RelatedPosts;
