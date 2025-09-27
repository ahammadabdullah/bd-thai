import Image from "next/image";

import facility_1 from "@/assets/contracts/facility_1.jpg";
import facility_2 from "@/assets/contracts/facility_2.png";
import facility_3 from "@/assets/contracts/facility_3.png";
import facility_4 from "@/assets/contracts/facility_4.jpg";
import { useTranslations } from "next-intl";
function Facilities() {
  const t = useTranslations("contract.advantages");
  const facility_images = [facility_1, facility_2, facility_3, facility_4];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <h3 className="text-xl font-semibold">{t("facilities")}</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
        {facility_images.map((item, idx) => (
          <div
            key={idx}
            className="relative aspect-square overflow-hidden rounded-lg"
          >
            <Image
              src={item}
              alt="Manufacturing facility"
              fill
              className="object-cover transform transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Facilities;
