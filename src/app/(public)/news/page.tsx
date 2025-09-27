import Hero from "@/components/common/hero";
import { useTranslations } from "next-intl";
import LatestsPosts from "./_components/latests";
import Newsletter from "./_components/newsletter";

export default function News() {
  const t = useTranslations("news");

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Hero title={t("hero.title")} subtitle={t("hero.description")} />
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
