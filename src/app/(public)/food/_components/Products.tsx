import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Products = () => {
  const t = useTranslations("food");
  const products = [
    {
      title: t("products.biscuits.title"),
      image:
        "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      description: t("products.biscuits.subtitle"),
    },
    {
      title: t("products.cakes.title"),
      image:
        "https://images.unsplash.com/photo-1511381939415-e44015466834?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      description: t("products.cakes.subtitle"),
    },
    {
      title: t("products.lollipops.title"),
      image:
        "https://images.unsplash.com/photo-1598188080888-42dfffa02287?q=80&w=2108&auto=format&fit=crop&w=1950&q=80",
      description: t("products.lollipops.subtitle"),
    },
    {
      title: t("products.gummies.title"),
      image:
        "https://images.unsplash.com/photo-1617627191898-1408bf607b4d?q=80&w=2051&auto=format&fit=crop&w=1950&q=80",
      description: t("products.gummies.subtitle"),
    },
    {
      title: t("products.candies.title"),
      image:
        "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      description: t("products.candies.subtitle"),
    },
  ];
  return (
    <section className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center">
            {t("products.title")}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-primary/5 z-10"></div>
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="p-6 border-t border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {product.title}
                  </h3>
                </div>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
