import { useTranslations } from "next-intl";
import {
  CheckCircle,
  PackageCheck,
  FlaskConical,
  Leaf,
  Globe,
} from "lucide-react";
import Image from "next/image";

import feature_1 from "@/assets/home/feature_1.jpg";
import feature_2 from "@/assets/home/feature_2.png";
import feature_3 from "@/assets/home/feature_3.png";
import feature_4 from "@/assets/home/feature_4.png";

function Feature() {
  const t = useTranslations("home");

  const features = [
    {
      icon: Globe,
      title: t("features.compliance.title"),
      description: t("features.compliance.description"),
    },
    {
      icon: PackageCheck,
      title: t("features.support.title"),
      description: t("features.support.description"),
    },
    {
      icon: FlaskConical,
      title: t("features.rnd.title"),
      description: t("features.rnd.description"),
    },
    {
      icon: Leaf,
      title: t("features.sustainability.title"),
      description: t("features.sustainability.description"),
    },
    {
      icon: CheckCircle,
      title: t("features.trust.title"),
      description: t("features.trust.description"),
    },
  ];

  const featured_images = [feature_1, feature_2, feature_3, feature_4];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">{t("features.title")}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t("features.description")}
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <feature.icon className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {featured_images.map((img, idx) => (
              <Image
                key={idx}
                src={img}
                alt={`featured Image ${idx + 1}`}
                width={400}
                height={300}
                className="rounded-lg object-cover w-full h-full"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
