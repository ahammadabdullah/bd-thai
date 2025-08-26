"use server";

import { signIn, signOut } from "@/auth/auth";
import { BlogData } from "@/components/modal/create-blog-modal";
import prisma from "@/lib/db";
import { slugFromTitle } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { saveQuotation, sendEmail } from "./inquiry";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  company_name: z
    .string()
    .min(2, "Company name must be at least 2 characters."),
  interest: z.string().min(1, "Please select a product interest."),
  order_volume: z.string().min(1, "Please enter estimated order volume."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});
export async function submitInquiry(_: any, formData: FormData) {
  const validatedFields = formSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    company_name: formData.get("company_name"),
    interest: formData.get("interest"),
    order_volume: formData.get("order_volume"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please fix the errors below.",
    };
  }

  try {
    // await sendEmail({ ...validatedFields.data, status: "PENDING" });
    await saveQuotation({ ...validatedFields.data, status: "PENDING" });
    return {
      message: "Thank you for your inquiry. We'll get back to you soon!",
      errors: {},
    };
  } catch (error) {
    console.error("Error saving quotation:", error);
    return {
      message: "There was an error processing your inquiry.",
      errors: {},
    };
  }
}

export async function credLogin(email: string, password: string) {
  try {
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    return response;
  } catch (err) {
    throw err;
  }
}

export async function logOut() {
  signOut({ redirectTo: "/login" });
}

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

export async function getBlogById(id: string) {
  try {
    const blog = await prisma.blog.findUnique({
      where: { id },
    });
    return blog;
  } catch (err) {
    throw err;
  }
}

export async function createUser(data: {
  name: string;
  email: string;
  password: string;
}) {
  try {
    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
        role: "ADMIN",
      },
    });
    return user;
  } catch (err) {
    throw err;
  }
}

export async function deleteUser(id: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (user?.role === "ROOT") {
      throw new Error("Root cannot be deleted");
    }

    const deletedUser = await prisma.user.delete({
      where: { id },
    });
    return user;
  } catch (err) {
    throw err;
  }
}

export async function getAllUsers() {
  try {
    const users = await prisma.user.findMany();
    return users;
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
