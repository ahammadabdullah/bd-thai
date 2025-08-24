"use server";

import { signIn, signOut } from "@/auth/auth";
import { BlogData } from "@/components/modal/create-blog-modal";
import prisma from "@/lib/db";
import { slugFromTitle } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  companyName: z.string().min(2, "Company name must be at least 2 characters."),
  productInterest: z.string().min(1, "Please select a product interest."),
  estimatedVolume: z.string().min(1, "Please enter estimated order volume."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});
export async function submitInquiry(_: any, formData: FormData) {
  const validatedFields = formSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    companyName: formData.get("companyName"),
    productInterest: formData.get("productInterest"),
    estimatedVolume: formData.get("estimatedVolume"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please fix the errors below.",
    };
  }

  // console log the validated fields
  console.log(validatedFields.data);

  return {
    message: "Thank you for your inquiry. We'll get back to you soon!",
    errors: {},
  };
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
