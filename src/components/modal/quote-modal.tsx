import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useState } from "react";
import { Quotation, QuotationStatus } from "@prisma/client";
import { updateStatus } from "@/actions/inquiry";
import { Loader2 } from "lucide-react";

interface QuoteModalProps {
  isQuoteModalOpen: boolean;
  setIsQuoteModalOpen: (open: boolean) => void;
  refetch: () => void;
  quotation: Quotation | null;
}

function QuoteModal({
  isQuoteModalOpen,
  setIsQuoteModalOpen,
  refetch,
  quotation,
}: QuoteModalProps) {
  const [loading, setLoading] = useState(false);

  const handleUpdateStatus = async (status: QuotationStatus) => {
    setLoading(true);
    try {
      if (quotation?.id) {
        await updateStatus(quotation.id, status);
        refetch();
      }
      setIsQuoteModalOpen(false);
    } catch (error) {
      console.error("Error updating quotation status:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isQuoteModalOpen} onOpenChange={setIsQuoteModalOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Quotation Details</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          View and manage the details of the selected quotation request.
        </DialogDescription>
        <div className="pt-5 space-y-3 text-sm">
          <div className="grid grid-cols-[100px_1fr] items-start">
            <strong>Name:</strong>
            <span>{quotation?.name}</span>
          </div>
          <div className="grid grid-cols-[100px_1fr] items-start">
            <strong>Email:</strong>
            <span>{quotation?.email}</span>
          </div>
          <div className="grid grid-cols-[100px_1fr] items-start">
            <strong>Company:</strong>
            <span>{quotation?.company_name}</span>
          </div>
          <div className="grid grid-cols-[100px_1fr] items-start">
            <strong>Interest:</strong>
            <span>{quotation?.interest}</span>
          </div>
          <div className="grid grid-cols-[100px_1fr] items-start">
            <strong>Order Volume:</strong>
            <span>{quotation?.order_volume}</span>
          </div>
          <div className="grid grid-cols-[100px_1fr] items-start">
            <strong>Message:</strong>
            <span>{quotation?.message}</span>
          </div>
          <div className="grid grid-cols-[100px_1fr] items-start">
            <strong>Status:</strong>
            <span>{quotation?.status}</span>
          </div>
          <div className="grid grid-cols-[100px_1fr] items-start">
            <strong>Created At:</strong>
            <span>
              {quotation?.createdAt &&
                new Date(quotation.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
            </span>
          </div>
        </div>
        <DialogFooter>
          {quotation?.status === "PENDING" && (
            <>
              <Button
                disabled={loading}
                className="bg-red-500 hover:bg-red-200 hover:text-red-500"
                onClick={() => handleUpdateStatus("REJECTED")}
              >
                {loading ? <Loader2 className="animate-spin" /> : "Reject"}
              </Button>
              <Button
                disabled={loading}
                className="bg-green-500 hover:bg-green-200 hover:text-green-500"
                onClick={() => handleUpdateStatus("APPROVED")}
              >
                {loading ? <Loader2 className="animate-spin" /> : "Approve"}
              </Button>
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default QuoteModal;
