"use client";

import { useFormStatus } from "react-dom";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { submitInquiry } from "@/actions";
import { Button } from "../ui/button";
import { useActionState } from "react";

export const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  companyName: z.string().min(2, "Company name must be at least 2 characters."),
  productInterest: z.string().min(1, "Please select a product interest."),
  estimatedVolume: z.string().min(1, "Please enter estimated order volume."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

interface FormErrors {
  name?: string[];
  email?: string[];
  companyName?: string[];
  productInterest?: string[];
  estimatedVolume?: string[];
  message?: string[];
}
const initialState = { message: "", errors: {} as FormErrors };
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? "Submitting..." : "Submit Inquiry"}
    </Button>
  );
}

export default function InquiryForm() {
  const [state, formAction] = useActionState(submitInquiry, initialState);

  return (
    <div className=" p-6 ">
      <div className="max-w-5xl  mx-auto">
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">Inquiry</h2>
            <p className="text-muted-foreground">
              Fill out the form below and we&apos;ll get back to you shortly.
            </p>
          </div>
          <form action={formAction} className="space-y-6">
            <div>
              <label className="block font-medium">Name *</label>
              <Input name="name" placeholder="Your full name" required />
              {state.errors?.name && (
                <p className="text-red-500 text-sm">{state.errors.name}</p>
              )}
            </div>
            <div>
              <label className="block font-medium">Email *</label>
              <Input
                name="email"
                type="email"
                placeholder="your@email.com"
                required
              />
              {state.errors?.email && (
                <p className="text-red-500 text-sm">{state.errors.email}</p>
              )}
            </div>
            <div>
              <label className="block font-medium">Company Name *</label>
              <Input
                name="companyName"
                placeholder="Your company name"
                required
              />
              {state.errors?.companyName && (
                <p className="text-red-500 text-sm">
                  {state.errors.companyName}
                </p>
              )}
            </div>
            <div>
              <label className="block font-medium">Product Interest *</label>
              <Select name="productInterest" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select a product" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beverages">Beverages</SelectItem>
                  <SelectItem value="food">Food Products</SelectItem>
                  <SelectItem value="contract">
                    Contract Manufacturing
                  </SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {state.errors?.productInterest && (
                <p className="text-red-500 text-sm">
                  {state.errors.productInterest}
                </p>
              )}
            </div>
            <div>
              <label className="block font-medium">
                Estimated Order Volume *
              </label>
              <Input
                name="estimatedVolume"
                placeholder="e.g., 1000 units"
                required
              />
              {state.errors?.estimatedVolume && (
                <p className="text-red-500 text-sm">
                  {state.errors.estimatedVolume}
                </p>
              )}
            </div>
            <div>
              <label className="block font-medium">Message *</label>
              <Textarea
                name="message"
                placeholder="Please provide details about your inquiry..."
                required
              />
              {state.errors?.message && (
                <p className="text-red-500 text-sm">{state.errors.message}</p>
              )}
            </div>
            <SubmitButton />
            {state.message && (
              <p
                className={`mt-4 text-sm ${
                  state.errors ? "text-red-500" : "text-green-500"
                }`}
              >
                {state.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
