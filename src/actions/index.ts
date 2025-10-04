"use server";

import { signIn, signOut } from "@/auth/auth";
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
      message: "Please fix the errors.",
    };
  }

  try {
    await saveQuotation({ ...validatedFields.data, status: "PENDING" });
    await sendEmail({ ...validatedFields.data, status: "PENDING" });
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
    console.log("logging user in", response);
    return response;
  } catch (err) {
    console.log("error while loggin ", err);
    throw err;
  }
}

export async function logOut() {
  signOut({ redirectTo: "/login" });
}
