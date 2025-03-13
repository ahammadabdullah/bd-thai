import { Droplet, Clock, Beaker } from "lucide-react";
import { useTranslations } from "next-intl";

export function CustomSolutionsSection() {
  const t = useTranslations("food.custom");
  const solutions = [
    {
      title: t("natural.title"),
      description: t("natural.description"),
      icon: Droplet,
    },
    {
      title: t("perfect.title"),
      description: t("perfect.description"),
      icon: Clock,
    },
    {
      title: t("custom.title"),
      description: t("custom.description"),
      icon: Beaker,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center">{t("title")}</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="relative p-8 rounded-lg border border-gray-100 bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-3xl -z-10"></div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-6">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600">{solution.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
