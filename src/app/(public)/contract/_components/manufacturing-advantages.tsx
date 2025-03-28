import { Clock, Users, FlaskRoundIcon as Flask, Shield } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

import facility_1 from "@/assets/facility_1.jpg";
import facility_2 from "@/assets/facility_2.jpg";
import facility_3 from "@/assets/facility_3.jpg";
import facility_4 from "@/assets/facility_4.jpg";

export function ManufacturingAdvantages() {
  const t = useTranslations("contract.advantages");
  const advantages = [
    {
      title: t("moq.title"),
      description: t("moq.description"),
      icon: Clock,
    },
    {
      title: t("support.title"),
      description: t("support.description"),
      icon: Users,
    },
    {
      title: t("rd.title"),
      description: t("rd.description"),
      icon: Flask,
    },
    {
      title: t("compliance.title"),
      description: t("compliance.description"),
      icon: Shield,
    },
  ];
  const facility_images = [facility_1, facility_2, facility_3, facility_4];
  return (
    <section className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">{t("title")}</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">{t("description")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md border border-gray-100 p-6 flex items-start hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                <advantage.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  {advantage.title}
                </h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-xl font-semibold">{t("facilities")}</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            {facility_images.map((item, idx) => (
              <div key={idx} className="relative aspect-square">
                <Image
                  src={item}
                  alt="Manufacturing facility"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
