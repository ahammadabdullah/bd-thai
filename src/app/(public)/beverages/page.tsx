import Hero from "@/components/common/hero";
import { useTranslations } from "next-intl";
import React from "react";
import { BeverageCapabilitiesSection } from "./_components/beverage-capatibilites";

const BeveragesPage = () => {
  const t = useTranslations("beverages");
  return (
    <div>
      <Hero
        title={t("hero.title")}
        subtitle={t("hero.description")}
        image="https://images.unsplash.com/photo-1513828742140-ccaa28f3eda0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
      />
      {/* <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Our Beverage Capabilities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "CSD (Carbonated Soft Drinks)",
                description: "Perfect carbonation with customized flavors",
              },
              {
                title: "UHT Drinks",
                description: "Safe, shelf-stable, dairy & non-dairy options",
              },
              {
                title: "Custom Formulations",
                description:
                  "Natural flavors & colors, energy drinks, vitamin-enhanced beverages",
              },
              {
                title: "Sustainable Packaging",
                description:
                  "In-house rPET preform production for eco-friendly bottles",
              },
            ].map((capability, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-white shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {capability.title}
                </h3>
                <p className="text-gray-600">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <BeverageCapabilitiesSection />
    </div>
  );
};

export default BeveragesPage;
