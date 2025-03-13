import { BlogsTable } from "@/components/tables/blogs-table";

export default function BlogsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Manage Blogs</h1>
      <BlogsTable />
    </div>
  );
}
