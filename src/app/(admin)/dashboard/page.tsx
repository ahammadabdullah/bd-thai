import { redirect } from "next/navigation";

export default function DashboardPage() {
  // Redirect to blogs page by default
  redirect("/dashboard/blogs");
}
