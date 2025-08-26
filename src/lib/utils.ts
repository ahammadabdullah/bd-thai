import { QuotationType } from "@/components/tables/quotations-table";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { Quotation } from "@prisma/client";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugFromTitle(title: string) {
  return title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}

export const generatePDF = (quote: Quotation) => {
  const doc = new jsPDF();
  doc.setFontSize(22);
  doc.setTextColor(44, 62, 80);
  doc.text("BD Thai Food", doc.internal.pageSize.getWidth() / 2, 15, {
    align: "center",
  });

  doc.setFontSize(16);
  doc.setTextColor(0, 0, 0);
  doc.text("Quotation Request", 14, 30);
  autoTable(doc, {
    startY: 50,
    head: [["Field", "Details"]],
    body: [
      ["ID", quote.id],
      ["Name", quote.name],
      ["Email", quote.email],
      ["Company", quote.company_name],
      ["Interest", quote.interest],
      ["Order Volume", quote.order_volume],
      ["Message", quote.message],
      ["Status", quote.status],
      [
        "Created At",
        new Date(quote.createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
      ],
    ],
    theme: "grid",
    styles: {
      fontSize: 12,
      cellPadding: 4,
    },
    headStyles: {
      fillColor: [22, 160, 133],
      textColor: 255,
    },
  });
  doc.save(`quotation_${quote.id}.pdf`);
};
