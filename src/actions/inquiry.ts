"use server";

import { QuotationType } from "@/components/tables/quotations-table";
import prisma from "@/lib/db";
import { QuotationStatus } from "@prisma/client";

export async function sendEmail(data: QuotationType) {
  // Implementation for sending email
}

export async function saveQuotation(data: QuotationType) {
  try {
    await prisma.quotation.create({
      data,
    });
  } catch (error) {
    console.error("Error saving quotation:", error);
  }
}

export async function getAllQuotations() {
  try {
    const quotations = await prisma.quotation.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return quotations;
  } catch (error) {
    console.error("Error fetching quotations:", error);
    throw error;
  }
}

export async function updateStatus(id: string, status: QuotationStatus) {
  try {
    await prisma.quotation.update({
      where: { id },
      data: { status },
    });
  } catch (error) {
    console.error("Error updating quotation status:", error);
  }
}
