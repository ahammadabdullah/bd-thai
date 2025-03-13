import { UsersTable } from "@/components/tables/users-table";

export default function UsersPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Manage Users</h1>
      <UsersTable />
    </div>
  );
}
