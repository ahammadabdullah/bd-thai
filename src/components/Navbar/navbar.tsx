"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Factory,
  Coffee,
  CakeSlice,
  Handshake,
  Newspaper,
  Menu,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./language-switcher";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { useEffect } from "react";

export function Navbar() {
  const pathname = usePathname();
  // const [isScrolled, setIsScrolled] = React.useState(false);
  const t = useTranslations("nav");
  //  useEffect(() => {
  //     const handleScroll = () => {
  //       setIsScrolled(window.scrollY > 0);
  //     };
  //     window.addEventListener("scroll", handleScroll);
  //     return () => window.removeEventListener("scroll", handleScroll);
  //   }, []);

  const navigation = [
    { name: t("home"), href: `/` },
    { name: t("beverages"), href: `/beverages`, icon: Coffee },
    { name: t("food"), href: `/food`, icon: CakeSlice },
    { name: t("contract"), href: `/contract`, icon: Handshake },
    { name: t("manufacturing"), href: `/manufacturing`, icon: Factory },
    { name: t("news"), href: `/news`, icon: Newspaper },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        "bg-white/95 backdrop-blur-sm shadow-sm dark:bg-gray-900/95"
      )}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        {/* Mobile menu button - only visible on small screens */}
        <div className="flex lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="-ml-2 mr-2">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] sm:w-[350px]">
              <div className="flex flex-col h-full">
                <Link href={`/`} className="py-6 text-2xl font-bold">
                  BD Thai Food
                </Link>

                <div className="flex flex-col space-y-4 mt-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 py-2 text-base font-medium",
                        pathname === item.href
                          ? "text-primary"
                          : "text-muted-foreground hover:text-primary"
                      )}
                    >
                      {item.icon && <item.icon className="h-5 w-5" />}
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="mt-auto pt-6 pb-8 border-t flex flex-col space-y-4">
                  <LanguageSwitcher />
                  <Button className="w-full">{t("quote")}</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Your existing navbar code */}
        <div className="flex lg:flex-1">
          <Link href={`/`} className="-m-1.5 p-1.5 text-2xl font-bold">
            BD Thai Food
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-semibold leading-6",
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <LanguageSwitcher />

          <Button>{t("quote")}</Button>
        </div>
      </nav>
    </header>
  );
}
