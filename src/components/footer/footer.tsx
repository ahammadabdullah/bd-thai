"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div>
            <h2 className="text-2xl font-bold text-white">{t("company")}</h2>
            <p className="mt-4 text-sm">{t("companyDescription")}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">
              {t("quickLinks")}
            </h3>
            <ul className="mt-4 space-y-2">
              {[
                ["home", "/"],
                ["about", "/about"],
                ["products", "/products"],
                ["contact", "/contact"],
              ].map(([key, href]) => (
                <li key={key}>
                  <Link href={href} className="hover:text-white">
                    {t(`links.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">{t("contact")}</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                {t("address")}
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                {t("phone")}
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                {t("email")}
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">
              {t("newsletter")}
            </h3>
            <p className="mt-4 text-sm">{t("newsletterDescription")}</p>
            <form className="mt-4">
              <div className="flex max-w-md gap-x-4">
                <Input
                  type="email"
                  placeholder={t("subscribe")}
                  className="bg-white/10 border-white/10"
                />
                <Button type="submit">{t("subscribe")}</Button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm">
            {t("copyright", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
}
