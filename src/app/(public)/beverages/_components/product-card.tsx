"use client";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import { Droplet, Zap, FlaskRoundIcon } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  droplet: Droplet,
  zap: Zap,
  flask: FlaskRoundIcon,
};

interface ProductCardProps {
  category: {
    title: string;
    subtitle: string;
    description: string;
    details: { label: string; value?: string }[];
    icon: string;
    images: StaticImageData[];
  };
  index: number;
}

const ProductCard = ({ category, index }: ProductCardProps) => {
  const Icon = iconMap[category.icon.toLowerCase()];
  return (
    <div
      key={index}
      className={`bg-white rounded-xl shadow-sm overflow-hidden ${
        index % 2 === 1 ? "md:flex-row-reverse" : ""
      } md:flex`}
    >
      <div className="md:w-1/3 relative h-64 md:h-auto">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop
          autoplay={{ delay: 2000 }}
          modules={[Autoplay]}
          className="h-full"
        >
          {category.images.map((img, i) => (
            <SwiperSlide key={i}>
              <Image
                src={img}
                alt={`${category.title} ${i + 1}`}
                fill
                className="object-cover"
                // className="object-contain bg-white"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="p-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/90 text-primary text-sm font-medium mb-2">
              <Icon className="h-4 w-4 mr-2" />
              {category.subtitle}
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 md:w-2/3">
        <div className="flex items-start">
          <div>
            <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
            <p className="text-gray-700 mb-6">{category.description}</p>

            <div className="space-y-4">
              {category.details.map((detail, i) => (
                <div
                  key={i}
                  className={
                    detail.value ? "grid grid-cols-3 gap-4 items-start" : "mb-2"
                  }
                >
                  <div className="font-semibold text-gray-900">
                    {detail.label}:
                  </div>
                  {detail.value && (
                    <div className="col-span-2 text-gray-700">
                      {detail.value}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
