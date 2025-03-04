import { Droplet, Zap, FlaskRoundIcon as Flask, Recycle } from "lucide-react";
import { useTranslations } from "next-intl";

export function BeverageCapabilitiesSection() {
  const t = useTranslations("beverages.capabilities");
  const capabilities = [
    {
      title: t("csd.title"),
      description: t("csd.subtitle"),
      icon: Droplet,
    },
    {
      title: t("uht.title"),
      description: t("uht.subtitle"),
      icon: Zap,
    },
    {
      title: t("custom.title"),
      description: t("custom.subtitle"),
      icon: Flask,
    },
    {
      title: t("sustainable.title"),
      description: t("sustainable.subtitle"),
      icon: Recycle,
    },
  ];

  return (
    <section className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center">{t("title")}</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full"
            >
              <div className="p-5 border-b border-gray-100 flex items-center">
                <capability.icon className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900">
                  {capability.title}
                </h3>
              </div>

              <div className="p-5 flex-grow">
                <p className="text-gray-600">{capability.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
