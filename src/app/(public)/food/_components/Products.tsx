import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import f_c from "@/assets/f_c.png";
import f_hc from "@/assets/f_hc.jpg";
import f_l from "@/assets/f_l.jpg";
import f_sc from "@/assets/f_sc.jpg";
import f_bnc from "@/assets/f_b&c.jpg";

const Products = () => {
  const t = useTranslations("food");
  const products = [
    {
      title: t("products.biscuits.title"),
      image: f_bnc,
      description: t("products.biscuits.subtitle"),
    },
    {
      title: t("products.cakes.title"),
      image: f_c,
      description: t("products.cakes.subtitle"),
    },
    {
      title: t("products.lollipops.title"),
      image: f_l,
      description: t("products.lollipops.subtitle"),
    },
    {
      title: t("products.gummies.title"),
      image: f_sc,
      description: t("products.gummies.subtitle"),
    },
    {
      title: t("products.candies.title"),
      image: f_hc,
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
                  className="object-contain mix-blend-darken transition-transform duration-300 group-hover:scale-105"
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
