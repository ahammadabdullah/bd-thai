import Hero from "@/components/common/hero";
import { useTranslations } from "next-intl";
import LatestsPosts from "./_components/latests";
import Newsletter from "./_components/newsletter";

export default function News() {
  const t = useTranslations("news");

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Hero
        title={t("hero.title")}
        subtitle={t("hero.description")}
        image="https://images.unsplash.com/photo-1513828742140-ccaa28f3eda0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
      />
      {/* Featured News */}
      <LatestsPosts />

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
}

export async function generateStaticParams() {
  return [{ lng: "en" }, { lng: "fr" }, { lng: "ar" }];
}
