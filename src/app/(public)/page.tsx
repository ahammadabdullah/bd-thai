import Hero from "@/components/common/hero";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  PackageCheck,
  FlaskConical,
  Leaf,
  Globe,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home({}) {
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

  return (
    <>
      {/* Hero Section */}
      <Hero
        title={t("hero.title")}
        subtitle={t("hero.description")}
        image="https://images.unsplash.com/photo-1513828742140-ccaa28f3eda0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
      />
      {/* Features Section */}

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
              <Image
                src="https://images.unsplash.com/photo-1563213126-a4273aed2016?q=80&w=800&auto=format&fit=crop"
                alt="Pharmaceutical manufacturing"
                width={400}
                height={300}
                className="rounded-lg object-cover w-full h-full"
              />
              <Image
                src="https://images.unsplash.com/photo-1628595351029-c2bf17511435?q=80&w=800&auto=format&fit=crop"
                alt="Quality control in pharma"
                width={400}
                height={300}
                className="rounded-lg object-cover w-full h-full"
              />
              <Image
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800&auto=format&fit=crop"
                alt="Research and development"
                width={400}
                height={300}
                className="rounded-lg object-cover w-full h-full"
              />
              <Image
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800&auto=format&fit=crop"
                alt="Pharmaceutical products"
                width={400}
                height={300}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Products Preview */}
      {/* <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Our Product Range
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1543253687-c931c8e01820?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                title: "Beverages",
                description: "Carbonated drinks, juices, and more",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                title: "Confectionery",
                description: "Premium quality sweets and candies",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                title: "Packaged Foods",
                description: "Ready-to-eat meals and snacks",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width={800}
                  height={600}
                  className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-semibold mb-2">
                      {product.title}
                    </h3>
                    <p className="text-gray-200">{product.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your requirements and let us help you
            bring your product ideas to life.
          </p>
          <Button size="lg" variant="outline" className="text-primary ">
            Contact Us Now
          </Button>
        </div>
      </section>
    </>
  );
}

export async function generateStaticParams() {
  return [{ lng: "en" }, { lng: "fr" }, { lng: "ar" }];
}
