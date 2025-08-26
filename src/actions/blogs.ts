"use server";

import { BlogData } from "@/components/modal/create-blog-modal";
import prisma from "@/lib/db";
import { slugFromTitle } from "@/lib/utils";

export async function createBlog(data: BlogData) {
  try {
    const response = await prisma.blog.create({
      data: {
        title: data.title,
        author: data.author,
        description: data.description,
        image: data.imageUrl,
        slug: slugFromTitle(data.title),
      },
    });
    return response;
  } catch (err) {
    throw err;
  }
}

export async function deleteBlog(id: string) {
  try {
    const blog = await prisma.blog.delete({
      where: { id },
    });
    return blog;
  } catch (err) {
    throw err;
  }
}

export async function updateBlog(id: string, data: BlogData) {
  try {
    const blog = await prisma.blog.update({
      where: { id },
      data: {
        title: data.title,
        author: data.author,
        description: data.description,
        image: data.imageUrl,
        slug: slugFromTitle(data.title),
      },
    });
    return blog;
  } catch (err) {
    throw err;
  }
}

export async function getAllBlogs() {
  try {
    const blogs = await prisma.blog.findMany();
    return blogs;
  } catch (err) {
    throw err;
  }
}
export async function getBlogBySlug(slug: string) {
  try {
    const blog = await prisma.blog.findUnique({
      where: { slug },
    });
    return blog;
  } catch (err) {
    throw err;
  }
}

export async function getRelatedPostBySlug(slug: string) {
  try {
    const blog = await prisma.blog.findUnique({
      where: { slug },
    });
    if (!blog) return [];
    const relatedPosts = await prisma.blog.findMany({
      where: {
        id: { not: blog.id },
      },
      take: 2,
    });
    return relatedPosts;
  } catch (err) {
    throw err;
  }
}

export async function getAllBlogSlugs() {
  const posts = await prisma.blog.findMany({
    select: { slug: true },
  });
  return posts.map((p) => p.slug);
}
