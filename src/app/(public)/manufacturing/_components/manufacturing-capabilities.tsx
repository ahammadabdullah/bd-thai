import {
  ShieldCheck,
  Leaf,
  FileCheck,
  FlaskRoundIcon as Flask,
} from "lucide-react";
import { useTranslations } from "next-intl";

export function ManufacturingCapabilities() {
  const t = useTranslations("manufacturing.capabilities");
  const capabilities = [
    {
      title: t("advance"),
      icon: ShieldCheck,
      color: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      title: t("sustainable"),
      icon: Leaf,
      color: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      title: t("strict"),
      icon: FileCheck,
      color: "bg-amber-50",
      iconColor: "text-amber-600",
    },
    {
      title: t("custom"),
      icon: Flask,
      color: "bg-purple-50",
      iconColor: "text-purple-600",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/3">
            <div className="sticky top-24">
              <div className="inline-flex items-center px-4 py-2 rounded-lg bg-primary/10 text-primary mb-4">
                <span className="text-sm font-semibold">{t("badge")}</span>
              </div>
              <h2 className="text-3xl font-bold mb-6">{t("title")}</h2>
              <p className="text-gray-600 mb-6">{t("description")}</p>
              <div className="hidden md:block mt-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">15+</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Years of</p>
                    <p className="font-semibold">{t("badge")} </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-2/3">
            <div className="grid gap-6">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="flex bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className={`w-20 flex-shrink-0 ${capability.color} flex items-center justify-center`}
                  >
                    <capability.icon
                      className={`h-8 w-8 ${capability.iconColor}`}
                    />
                  </div>
                  <div className="p-6 flex items-center">
                    <h3 className="text-lg font-semibold">
                      {capability.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
