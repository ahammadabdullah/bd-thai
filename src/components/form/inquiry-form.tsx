"use client";

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
import { useTranslations } from "next-intl";
import { Loader2 } from "lucide-react";

interface FormErrors {
  name?: string[];
  email?: string[];
  company_name?: string[];
  interest?: string[];
  order_volume?: string[];
  message?: string[];
}
const initialState = { message: "", errors: {} as FormErrors };

function SubmitButton({ pending }: { pending: boolean }) {
  const t = useTranslations("form");

  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? <Loader2 className="animate-spin w-4" /> : t("submit")}
    </Button>
  );
}
export default function InquiryForm() {
  const [state, formAction, pending] = useActionState(
    submitInquiry,
    initialState
  );
  const t = useTranslations("form");

  return (
    <section className="p-6" id="inquiry-form">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">{t("title")}</h2>
            <p className="text-muted-foreground">{t("description")}</p>
          </div>
          <form action={formAction} className="space-y-6">
            <div>
              <label className="block font-medium">
                {t("fields.name.label")} *
              </label>
              <Input
                name="name"
                placeholder={t("fields.name.placeholder")}
                required
              />
              {state.errors?.name && (
                <p className="text-red-500 text-sm">
                  {t("fields.name.required")}
                </p>
              )}
            </div>
            <div>
              <label className="block font-medium">
                {t("fields.email.label")} *
              </label>
              <Input
                name="email"
                type="email"
                placeholder={t("fields.email.placeholder")}
                required
              />
              {state.errors?.email && (
                <p className="text-red-500 text-sm">
                  {t("fields.email.required")}
                </p>
              )}
            </div>
            <div>
              <label className="block font-medium">
                {t("fields.company.label")} *
              </label>
              <Input
                name="company_name"
                placeholder={t("fields.company.placeholder")}
                required
              />
              {state.errors?.company_name && (
                <p className="text-red-500 text-sm">
                  {t("fields.company.required")}
                </p>
              )}
            </div>
            <div>
              <label className="block font-medium">
                {t("fields.product.label")} *
              </label>
              <Select name="interest" required>
                <SelectTrigger>
                  <SelectValue placeholder={t("fields.product.placeholder")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beverages">
                    {t("fields.product.options.beverage")}
                  </SelectItem>
                  <SelectItem value="food">
                    {t("fields.product.options.food")}
                  </SelectItem>
                  <SelectItem value="contract">
                    {t("fields.product.options.manufacturing")}
                  </SelectItem>
                  <SelectItem value="other">
                    {t("fields.product.options.other")}
                  </SelectItem>
                </SelectContent>
              </Select>
              {state.errors?.interest && (
                <p className="text-red-500 text-sm">
                  {t("fields.product.required")}
                </p>
              )}
            </div>
            <div>
              <label className="block font-medium">
                {t("fields.order.label")} *
              </label>
              <Input
                name="order_volume"
                placeholder={t("fields.order.placeholder")}
                required
              />
              {state.errors?.order_volume && (
                <p className="text-red-500 text-sm">
                  {t("fields.order.required")}
                </p>
              )}
            </div>
            <div>
              <label className="block font-medium">
                {t("fields.message.label")} *
              </label>
              <Textarea
                name="message"
                placeholder={t("fields.message.placeholder")}
                required
              />
              {state.errors?.message && (
                <p className="text-red-500 text-sm">
                  {t("fields.message.required")}
                </p>
              )}
            </div>
            <SubmitButton pending={pending} />
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
    </section>
  );
}
