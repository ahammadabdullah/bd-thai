import { Factory, Package, Tag } from "lucide-react";
import { useTranslations } from "next-intl";

export function ContractManufacturingServices() {
  const t = useTranslations("contract.services");
  const services = [
    {
      title: t("oem.title"),
      description: t("oem.description"),
      icon: Factory,
    },
    {
      title: t("private.title"),
      description: t("private.description"),
      icon: Tag,
    },
    {
      title: t("white.title"),
      description: t("white.description"),
      icon: Package,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">{t("title")}</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
              <div className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
