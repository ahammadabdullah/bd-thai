import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import React from "react";

const Newsletter = () => {
  const t = useTranslations("news.newsletter");

  return (
    <section className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">{t("title")}</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">{t("description")}</p>
        <form className="max-w-md mx-auto">
          <div className="flex gap-4">
            <input
              type="email"
              placeholder={t("form.email")}
              className="flex-1 px-4 py-2 rounded-lg text-gray-900"
            />
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              {t("form.subscribe")}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
