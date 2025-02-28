"use server";

import { formSchema } from "@/components/form/inquiry-form";

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
      message:
        "There were errors with your submission. Please correct them and try again.",
    };
  }

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return {
    message: "Thank you for your inquiry. We'll get back to you soon!",
    errors: {},
  };
}
