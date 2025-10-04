"use server";

import QuotationTemplate from "@/components/email/quotation-template";
import { QuotationType } from "@/components/tables/quotations-table";
import { notificationEmails } from "@/lib";
import prisma from "@/lib/db";
import { QuotationStatus } from "@prisma/client";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(quotation: QuotationType) {
  try {
    const { data, error } = await resend.emails.send({
      from: "BD Thai Food <noreply@bdthaifood.com>",
      to: quotation.email,
      bcc: notificationEmails,
      subject: "We Received Your Quotation Request",
      react: QuotationTemplate({ quotation }),
    });
    if (error) {
      throw new Error(error.message);
    }
    return { success: true, data };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
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
