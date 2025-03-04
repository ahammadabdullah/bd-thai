import Hero from "@/components/common/hero";
import { useTranslations } from "next-intl";
import React from "react";
// import { ShieldCheck, Award, PackageCheck, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import SmoothScrollLink from "@/components/common/scroll";
import Products from "./_components/Products";
import { CustomSolutionsSection } from "./_components/custom-solution";

const FoodPage = () => {
  const t = useTranslations("food");

  return (
    <div>
      <Hero
        title={t("hero.title")}
        subtitle={t("hero.description")}
        image="https://images.unsplash.com/photo-1513828742140-ccaa28f3eda0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
      />
      {/* Product Range */}
      <Products />
      {/* Custom Solutions */}
      {/* <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Custom Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Natural Colors & Flavors",
                description:
                  "We use high-quality natural ingredients for authentic taste and appearance",
              },
              {
                title: "Perfect Texture & Shelf-Life",
                description:
                  "Optimized formulations for the perfect texture and extended shelf life",
              },
              {
                title: "Custom Formulation & Flavor Matching",
                description:
                  "We can match your existing flavors or develop entirely new ones",
              },
            ].map((solution, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-white shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <CustomSolutionsSection />
      {/* Features */}
      {/* <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Quality Standards
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Food Safety",
                description: "HACCP certified production",
              },
              {
                icon: Award,
                title: "Quality Control",
                description: "ISO 22000 certified",
              },
              {
                icon: PackageCheck,
                title: "Premium Ingredients",
                description: "Sourced from trusted suppliers",
              },
              {
                icon: Utensils,
                title: "Custom Solutions",
                description: "Tailored to your needs",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-white shadow-lg"
              >
                <feature.icon className="h-12 w-12 mx-auto mb-4 text-secondary" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Partner with Us</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let&apos;s create exceptional food products that your customers will
            love.
          </p>
          <div className="flex gap-4 justify-center">
            <SmoothScrollLink href="#inquiry-form">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                Get a Quote
              </Button>
            </SmoothScrollLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoodPage;
