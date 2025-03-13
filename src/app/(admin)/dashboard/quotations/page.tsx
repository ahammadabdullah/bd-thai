import { QuotationsTable } from "@/components/tables/quotations-table";

export default function QuotationsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Manage Quotations</h1>
      <QuotationsTable />
    </div>
  );
}
