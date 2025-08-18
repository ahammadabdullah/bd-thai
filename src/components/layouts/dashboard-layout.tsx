"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Users,
  FileQuestion,
  Menu,
  LogOut,
  User,
  ChevronDown,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  const routes = [
    {
      name: "Blogs",
      path: "/dashboard/blogs",
      icon: FileText,
    },
    {
      name: "Users",
      path: "/dashboard/users",
      icon: Users,
    },
    {
      name: "Quotations",
      path: "/dashboard/quotations",
      icon: FileQuestion,
    },
  ];
  const handleLogOut = async () => {
    try {
      await signOut({ redirectTo: "/login" });
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm h-16 fixed top-0 left-0 right-0 z-10">
        <div className="flex items-center justify-between h-full px-4">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="mr-2"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span>Admin</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <span
                  onClick={handleLogOut}
                  className="flex items-center w-full"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-16 bottom-0 w-64 bg-white shadow-sm transition-transform transform z-20 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="p-4">
          <ul className="space-y-2">
            {routes.map((route) => (
              <li key={route.path}>
                <Link href={route.path}>
                  <Button
                    variant={pathname === route.path ? "default" : "ghost"}
                    className="w-full justify-start"
                  >
                    <route.icon className="mr-2 h-5 w-5" />
                    {route.name}
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main
        className={`pt-16 transition-all duration-300 ${
          sidebarOpen ? "md:pl-64" : "pl-0"
        }`}
      >
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
