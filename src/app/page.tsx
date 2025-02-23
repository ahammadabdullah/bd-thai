import { LanguageSwitcher } from "@/components/Navbar/language-switcher";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <>
      <h1>{t("title")}</h1>
      <LanguageSwitcher />
    </>
  );
}
