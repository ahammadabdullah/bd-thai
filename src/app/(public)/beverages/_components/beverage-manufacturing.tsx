import {
  CheckCircle,
  Droplet,
  Zap,
  FlaskRoundIcon as Flask,
  Recycle,
  Shield,
} from "lucide-react";
import { useTranslations } from "next-intl";

import uht_1 from "@/assets/beverages/uht_1.png";
import uht_2 from "@/assets/beverages/uht_2.jpg";
import csd_1 from "@/assets/beverages/csd_1.png";
import csd_2 from "@/assets/beverages/csd_2.jpg";
import rnd_1 from "@/assets/beverages/rnd_1.jpg";
import rnd_2 from "@/assets/beverages/rnd_2.jpg";
import ProductCard from "./product-card";

export function BeverageManufacturing() {
  const t = useTranslations("beverages.why");

  const benefits = [
    {
      title: t("benefits.0.title"),
      description: t("benefits.0.description"),
      icon: CheckCircle,
    },
    {
      title: t("benefits.1.title"),
      description: t("benefits.1.description"),
      icon: Zap,
    },
    {
      title: t("benefits.2.title"),
      description: t("benefits.2.description"),
      icon: Shield,
    },
    {
      title: t("benefits.3.title"),
      description: t("benefits.3.description"),
      icon: Recycle,
    },
    {
      title: t("benefits.4.title"),
      description: t("benefits.4.description"),
      icon: Flask,
    },
  ];

  const beverageCategories = [
    {
      title: t("categories.0.title"),
      subtitle: t("categories.0.subtitle"),
      description: t("categories.0.description"),
      details: [
        {
          label: t("categories.0.details.0.label"),
          value: t("categories.0.details.0.value"),
        },
        {
          label: t("categories.0.details.1.label"),
          value: t("categories.0.details.1.value"),
        },
        {
          label: t("categories.0.details.2.label"),
          value: t("categories.0.details.2.value"),
        },
        {
          label: t("categories.0.details.3.label"),
          value: t("categories.0.details.3.value"),
        },
      ],
      icon: "Droplet",
      images: [csd_1, csd_2],
    },
    {
      title: t("categories.1.title"),
      subtitle: t("categories.1.subtitle"),
      description: t("categories.1.description"),
      details: [
        {
          label: t("categories.1.details.0.label"),
          value: t("categories.1.details.0.value"),
        },
        {
          label: t("categories.1.details.1.label"),
          value: t("categories.1.details.1.value"),
        },
        {
          label: t("categories.1.details.2.label"),
          value: t("categories.1.details.2.value"),
        },
      ],
      icon: "Zap",
      images: [uht_1, uht_2],
    },
    {
      title: t("categories.2.title"),
      subtitle: t("categories.2.subtitle"),
      description: t("categories.2.description"),
      details: [
        {
          label: t("categories.2.details.0.label"),
          value: t("categories.2.details.0.value"),
        },
        {
          label: t("categories.2.details.1.label"),
          value: t("categories.2.details.1.value"),
        },
        {
          label: t("categories.2.details.2.label"),
          value: t("categories.2.details.2.value"),
        },
      ],
      icon: "Flask",
      images: [rnd_1, rnd_2],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Why Choose Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose BD Thai Food for Beverage Manufacturing?
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Beverage Categories */}
        <div className="space-y-16">
          {beverageCategories.map((category, index) => (
            <ProductCard key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
