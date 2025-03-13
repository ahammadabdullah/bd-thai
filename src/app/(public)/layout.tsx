import type { Metadata } from "next";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Navbar } from "@/components/Navbar/navbar";
import InquiryForm from "@/components/form/inquiry-form";
import { Footer } from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "BD Thai Food",
  description: "BD Thai Food",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const message = await getMessages();
  return (
    <NextIntlClientProvider messages={message}>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        {/* <Footer  /> */}
        <InquiryForm />
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}
