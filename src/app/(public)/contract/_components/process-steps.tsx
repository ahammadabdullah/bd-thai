import {
  MessageSquare,
  FlaskConical,
  Palette,
  Factory,
  Truck,
} from "lucide-react";
import { useTranslations } from "next-intl";

export function ProcessSteps() {
  const t = useTranslations("contract.process");
  const steps = [
    {
      title: t("steps.0.title"),
      description: t("steps.0.description"),
      icon: MessageSquare,
      color: "bg-blue-50 border-blue-200 text-blue-600",
    },
    {
      title: t("steps.1.title"),
      description: t("steps.1.description"),
      icon: FlaskConical,
      color: "bg-purple-50 border-purple-200 text-purple-600",
    },
    {
      title: t("steps.2.title"),
      description: t("steps.2.description"),
      icon: Palette,
      color: "bg-amber-50 border-amber-200 text-amber-600",
    },
    {
      title: t("steps.3.title"),
      description: t("steps.3.description"),
      icon: Factory,
      color: "bg-emerald-50 border-emerald-200 text-emerald-600",
    },
    {
      title: t("steps.4.title"),
      description: t("steps.4.description"),
      icon: Truck,
      color: "bg-red-50 border-red-200 text-red-600",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{t("title")}</h2>
          <div className="w-24 h-1 bg-primary mx-auto my-3"></div>

          <p className="text-gray-600 max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        {/* Desktop Process Steps */}
        <div className="hidden md:block">
          <div className="relative bg-white p-10 rounded-xl shadow-sm">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-5 gap-4 relative z-10">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className={`w-20 h-20 rounded-full ${
                      step.color.split(" ")[0]
                    } border-2 ${
                      step.color.split(" ")[1]
                    } flex items-center justify-center mb-4 bg-white`}
                  >
                    <step.icon
                      className={`h-10 w-10 ${step.color.split(" ")[2]}`}
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-center mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Process Steps */}
        <div className="md:hidden">
          <div className="relative pl-8 bg-white p-6 rounded-xl shadow-sm">
            {/* Vertical Line */}
            <div className="absolute top-0 bottom-0 left-4 w-1 bg-gray-200 z-0"></div>

            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="relative z-10">
                  <div className="absolute left-[-28px] top-0">
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div
                      className={`w-14 h-14 rounded-full ${
                        step.color.split(" ")[0]
                      } border ${
                        step.color.split(" ")[1]
                      } flex items-center justify-center mr-4 flex-shrink-0`}
                    >
                      <step.icon
                        className={`h-7 w-7 ${step.color.split(" ")[2]}`}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
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
