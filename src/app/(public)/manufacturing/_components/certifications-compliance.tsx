import { useTranslations } from "next-intl";
import Image from "next/image";

import commitment_1 from "@/assets/commitment_1.jpg";
import commitment_2 from "@/assets/commitment_2.jpg";
import commitment_3 from "@/assets/commitment_3.jpg";

export function CertificationsCompliance() {
  const t = useTranslations("manufacturing.certifications");
  const certifications = [
    {
      name: t("haccp.title"),
      description: t("haccp.description"),
      logo: "/haccp.webp?height=80&width=80",
    },
    {
      name: t("iso.title"),
      description: t("iso.description"),
      logo: "/iso.png?height=80&width=80",
    },
    {
      name: t("brc.title"),
      description: t("brc.description"),
      logo: "/brc.png?height=80&width=80",
    },
    {
      name: t("halal.title"),
      description: t("halal.description"),
      logo: "/halal.webp?height=80&width=80",
    },
    {
      name: t("fda.title"),
      description: t("fda.description"),
      logo: "/fda.jpg?height=80&width=80",
    },
  ];

  const commitment_images = [commitment_1, commitment_2, commitment_3];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-lg bg-primary/10 text-primary mb-4">
            <span className="text-sm font-semibold">{t("badge")}</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">{t("title")}</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">{t("description")}</p>
        </div>

        <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
          <div className="grid md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-6 flex flex-col items-center text-center hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="w-20 h-20 relative mb-4">
                  <Image
                    src={cert.logo || "/placeholder.svg"}
                    alt={cert.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold text-lg mb-2">{cert.name}</h3>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h3 className="text-xl font-bold mb-4">{t("quality.title")}</h3>
              <p className="text-gray-600 mb-4">{t("quality.description")}</p>
            </div>
            <div className="md:w-1/2 grid grid-cols-3 gap-4">
              {commitment_images.map((img, idx) => (
                <div
                  key={idx}
                  className="aspect-square relative rounded-lg overflow-hidden border border-gray-100"
                >
                  <Image
                    src={img}
                    alt="Facility image"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
