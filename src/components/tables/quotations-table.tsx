"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Sample quotation data
const initialQuotations = [
  {
    id: 1,
    client: "Acme Corp",
    email: "contact@acme.com",
    product: "Website Development",
    amount: "$5,000",
    status: "Pending",
    date: "2023-05-15",
  },
  {
    id: 2,
    client: "Globex Inc",
    email: "info@globex.com",
    product: "Mobile App",
    amount: "$12,000",
    status: "Approved",
    date: "2023-06-22",
  },
  {
    id: 3,
    client: "Stark Industries",
    email: "sales@stark.com",
    product: "E-commerce Platform",
    amount: "$8,500",
    status: "Rejected",
    date: "2023-07-10",
  },
];

export function QuotationsTable() {
  const [quotations] = useState(initialQuotations);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-800";
      case "Rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-yellow-100 text-yellow-800";
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Quotation Requests</h2>
        <Button>Export</Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {quotations.map((quote) => (
              <TableRow key={quote.id}>
                <TableCell>{quote.id}</TableCell>
                <TableCell className="font-medium">{quote.client}</TableCell>
                <TableCell>{quote.email}</TableCell>
                <TableCell>{quote.product}</TableCell>
                <TableCell>{quote.amount}</TableCell>
                <TableCell>
                  <Badge className={getStatusColor(quote.status)}>
                    {quote.status}
                  </Badge>
                </TableCell>
                <TableCell>{quote.date}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
