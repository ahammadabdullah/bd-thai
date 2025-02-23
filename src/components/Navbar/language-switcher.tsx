"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";

import { type Locale } from "@/lib/locales";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export const LanguageSwitcher: React.FC = () => {
  const [locale, setLocale] = useState<Locale>("en");
  const router = useRouter();
  useEffect(() => {
    const cookieLocale = document.cookie
      .split(";")
      .find((c) => c.trim().startsWith("MYNEXTAPP_LOCALE="))
      ?.split("=")[1];
    if (cookieLocale) {
      setLocale(cookieLocale as Locale);
    } else {
      const browserLocale = navigator.language.split("-")[0] as Locale;
      setLocale(browserLocale);
      document.cookie = `MYNEXTAPP_LOCALE=${browserLocale}; `;
      router.refresh();
    }
  }, [router]);
  function handleLocaleChange(newLocale: Locale): void {
    document.cookie = `MYNEXTAPP_LOCALE=${newLocale}; `;
    setLocale(newLocale);
    router.refresh();
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button type="button" variant="ghost" size="icon">
          {locale}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Language</DropdownMenuLabel>
        <Separator />

        <DropdownMenuItem
          className={`${locale === "en" ? "bg-gray-100" : ""}`}
          onClick={() => {
            handleLocaleChange("en");
          }}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          className={`${locale === "es" ? "bg-gray-100" : ""}`}
          onClick={() => {
            handleLocaleChange("es");
          }}
        >
          Spanish
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
