import { Clock, Users, FlaskRoundIcon as Flask, Shield } from "lucide-react";
import { useTranslations } from "next-intl";
import Facilities from "./facilities";
import Video from "@/components/common/video";

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

        <Facilities />
        <Video />
      </div>
    </section>
  );
}
