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
import { useQuery } from "@tanstack/react-query";
import { getAllQuotations } from "@/actions/inquiry";
import { Quotation, QuotationStatus } from "@prisma/client";
import QuoteModal from "../modal/quote-modal";
import { generatePDF } from "@/lib/utils";

export interface QuotationType {
  id?: string;
  createdAt?: Date;
  name: string;
  email: string;
  company_name: string;
  interest: string;
  order_volume: string;
  message: string;
  status: QuotationStatus;
}

export function QuotationsTable() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [currentQuotation, setCurrentQuotation] = useState<Quotation | null>(
    null
  );
  const { data: quotations, refetch } = useQuery({
    queryKey: ["quotations"],
    queryFn: async () => await getAllQuotations(),
  });

  const handleViewQuote = (quote: Quotation) => {
    setCurrentQuotation(quote);
    setIsQuoteModalOpen(true);
  };

  const getStatusColor = (status: QuotationStatus) => {
    switch (status) {
      case "APPROVED":
        return "bg-green-100 text-green-800 hover:bg-green-200";
      case "REJECTED":
        return "bg-red-100 text-red-800 hover:bg-red-200";
      case "PENDING":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200";
      default:
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200";
    }
  };

  const handleExportQuote = (quote: Quotation) => {
    generatePDF(quote);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Quotation Requests</h2>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {quotations?.map((quote) => (
              <TableRow key={quote.id}>
                <TableCell>{quote.id.slice(0, 6)}</TableCell>
                <TableCell className="font-medium">{quote.name}</TableCell>
                <TableCell>{quote.email}</TableCell>
                <TableCell>{quote.company_name}</TableCell>
                <TableCell>{quote.order_volume}</TableCell>
                <TableCell>
                  <Badge className={getStatusColor(quote.status)}>
                    {quote.status.toLowerCase()}
                  </Badge>
                </TableCell>

                <TableCell>
                  {new Date(quote?.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </TableCell>
                <TableCell>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleViewQuote(quote)}
                  >
                    View
                  </Button>
                  <Button
                    onClick={() => handleExportQuote(quote)}
                    variant="outline"
                    className="ml-2"
                    size="sm"
                  >
                    Export
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <QuoteModal
        isQuoteModalOpen={isQuoteModalOpen}
        setIsQuoteModalOpen={setIsQuoteModalOpen}
        refetch={refetch}
        quotation={currentQuotation}
      />
    </div>
  );
}
