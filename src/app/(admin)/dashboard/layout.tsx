import { DashboardLayout } from "@/components/layouts/dashboard-layout";
import type React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
