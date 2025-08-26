import { Blog } from "@prisma/client";
import { ArrowRight, Calendar, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

function PostCard({ post, t }: { post: Blog; t: any }) {
  return (
    <div className="group bg-white rounded-lg shadow-lg overflow-hidden">
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
        </div>
        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{post.description}</p>
        <Link href={`/news/${post.slug}`}>
          <Button variant="outline" className="group">
            {t("articles.read")}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
