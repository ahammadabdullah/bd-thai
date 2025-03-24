import {
  CheckCircle,
  Droplet,
  Zap,
  FlaskRoundIcon as Flask,
  Recycle,
  Shield,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import b_csd from "@/assets/b_csd.jpg";
import b_rnd from "@/assets/b_r&d.jpg";
import b_uht from "@/assets/b_uht.jpg";

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
      icon: Droplet,
      image: b_csd,
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
      icon: Zap,
      // image: "/placeholder.svg?height=300&width=400",
      image: b_uht,
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
      icon: Flask,
      image: b_rnd,
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
            <div
              key={index}
              className={`bg-white rounded-xl shadow-sm overflow-hidden ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              } md:flex`}
            >
              <div className="md:w-1/3 relative h-64 md:h-auto">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/90 text-primary text-sm font-medium mb-2">
                      <category.icon className="h-4 w-4 mr-2" />
                      {category.subtitle}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 md:w-2/3">
                <div className="flex items-start">
                  <div>
                    <h3 className="text-2xl font-bold mb-3">
                      {category.title}
                    </h3>
                    <p className="text-gray-700 mb-6">{category.description}</p>

                    <div className="space-y-4">
                      {category.details.map((detail, i) => (
                        <div
                          key={i}
                          className={
                            detail.value
                              ? "grid grid-cols-3 gap-4 items-start"
                              : "mb-2"
                          }
                        >
                          <div className="font-semibold text-gray-900">
                            {detail.label}:
                          </div>
                          {detail.value && (
                            <div className="col-span-2 text-gray-700">
                              {detail.value}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
