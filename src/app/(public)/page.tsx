import Hero from "@/components/common/hero";
import { Button } from "@/components/ui/button";

import { useTranslations } from "next-intl";
import Feature from "./_components/feature";
import { CertificationsCompliance } from "./manufacturing/_components/certifications-compliance";
import SmoothScrollLink from "@/components/common/scroll";
import Facilities from "./contract/_components/facilities";
import Video from "@/components/common/video";

export default function Home({}) {
  const t = useTranslations("home");

  return (
    <>
      {/* Hero Section */}
      <Hero
        title={t("hero.title")}
        subtitle={t("hero.description")}
        image="https://images.unsplash.com/photo-1513828742140-ccaa28f3eda0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
      />
      {/* Features Section */}
      <Feature />
      {/* Products Preview */}

      <CertificationsCompliance />
      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your requirements and let us help you
            bring your product ideas to life.
          </p>
          <Button size="lg" variant="outline" className="text-primary ">
            <SmoothScrollLink href="#inquiry-form">
              Contact Us Now
            </SmoothScrollLink>
          </Button>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-6 py-10">
        <Facilities />
        <Video />
      </div>
    </>
  );
}

export async function generateStaticParams() {
  return [{ lng: "en" }, { lng: "fr" }, { lng: "ar" }];
}
