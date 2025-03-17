import Hero from "@/components/common/hero";
import { useTranslations } from "next-intl";
import React from "react";
import { ContractManufacturingServices } from "./_components/contract-manufacturing-services";
import { ManufacturingAdvantages } from "./_components/manufacturing-advantages";

const ContractPage = () => {
  const t = useTranslations("contract");
  return (
    <div>
      <Hero
        title={t("hero.title")}
        subtitle={t("hero.description")}
        image="https://images.unsplash.com/photo-1513828742140-ccaa28f3eda0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
        button={t("hero.cta")}
      />
      <ContractManufacturingServices />
      <ManufacturingAdvantages />
    </div>
  );
};

export default ContractPage;
