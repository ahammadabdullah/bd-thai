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
import { User } from "@prisma/client";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { changeUserPassword } from "@/actions/user";
import { Loader2 } from "lucide-react";

interface ChangePasswordModalProps {
  isChangePasswordModalOpen: boolean;
  setIsChangePasswordModalOpen: (open: boolean) => void;
  user: User | null;
}

function ChangePasswordModal({
  isChangePasswordModalOpen,
  setIsChangePasswordModalOpen,
  user,
}: ChangePasswordModalProps) {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleChangePassword = async () => {
    setLoading(true);
    if (password.newPassword !== password.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }
    if (!user) return;
    try {
      await changeUserPassword(user.id, password.newPassword);
      setIsChangePasswordModalOpen(false);
    } catch (error) {
      console.error("Error changing password:", error);
    } finally {
      setLoading(false);
      setError(null);
      setPassword({
        newPassword: "",
        confirmPassword: "",
      });
      setIsChangePasswordModalOpen(false);
    }
  };

  return (
    <Dialog
      open={isChangePasswordModalOpen}
      onOpenChange={setIsChangePasswordModalOpen}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Change Password</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          View and manage the details of the selected quotation request.
        </DialogDescription>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="password">New Password</Label>
            <Input
              id="password"
              type="password"
              value={password.newPassword}
              required
              onChange={(e) =>
                setPassword({ ...password, newPassword: e.target.value })
              }
              placeholder="Enter new password"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirm-password">Confirm New Password</Label>
            <Input
              id="confirm-password"
              type="password"
              value={password.confirmPassword}
              required
              onChange={(e) =>
                setPassword({ ...password, confirmPassword: e.target.value })
              }
              placeholder="Confirm new password"
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
        </div>
        <DialogFooter>
          <Button
            onClick={handleChangePassword}
            disabled={
              !password.newPassword || !password.confirmPassword || loading
            }
            className="bg-green-500 hover:bg-green-200 hover:text-green-500"
          >
            {loading ? <Loader2 className="animate-spin" /> : "Change Password"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ChangePasswordModal;
