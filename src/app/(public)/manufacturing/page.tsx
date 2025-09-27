import Hero from "@/components/common/hero";
import { useTranslations } from "next-intl";
import React from "react";
import { ManufacturingCapabilities } from "./_components/manufacturing-capabilities";
import { CertificationsCompliance } from "./_components/certifications-compliance";

const ManufacturingPage = () => {
  const t = useTranslations("manufacturing");
  return (
    <div>
      <Hero title={t("hero.title")} subtitle={t("hero.description")} />
      <ManufacturingCapabilities />
      <CertificationsCompliance />
    </div>
  );
};

export default ManufacturingPage;
