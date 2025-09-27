import Hero from "@/components/common/hero";
import { useTranslations } from "next-intl";
import React from "react";
import { ContractManufacturingServices } from "./_components/contract-manufacturing-services";
import { ManufacturingAdvantages } from "./_components/manufacturing-advantages";
import { ProcessSteps } from "./_components/process-steps";

const ContractPage = () => {
  const t = useTranslations("contract");
  return (
    <div>
      <Hero
        title={t("hero.title")}
        subtitle={t("hero.description")}
        button={t("hero.cta")}
      />
      <ProcessSteps />
      <ContractManufacturingServices />
      <ManufacturingAdvantages />
    </div>
  );
};

export default ContractPage;
