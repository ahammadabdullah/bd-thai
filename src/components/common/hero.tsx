import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import SmoothScrollLink from "./scroll";
interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
}
const Hero = ({ title, subtitle, image }: HeroProps) => {
  const t = useTranslations("home");

  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <Image
          src={
            image ||
            "https://images.unsplash.com/photo-1513828742140-ccaa28f3eda0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
          }
          alt="Factory Production Line"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-5xl font-bold mb-6">{title}</h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">{subtitle}</p>
        <div className="flex gap-4 justify-center">
          {/* <Link href={"#inquiry-form"}> */}
          <SmoothScrollLink href="#inquiry-form">
            <Button size="lg" variant="default">
              {t("hero.cta.quote")}
            </Button>
          </SmoothScrollLink>
          {/* </Link> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
