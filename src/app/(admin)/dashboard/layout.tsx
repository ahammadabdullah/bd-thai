import { DashboardLayout } from "@/components/layouts/dashboard-layout";
import { SessionProvider } from "next-auth/react";
import type React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </SessionProvider>
  );
}
