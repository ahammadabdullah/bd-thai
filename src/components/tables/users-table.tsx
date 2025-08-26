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
import AddUserModal from "../modal/add-user-modal";
import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "@/actions";
import { useSession } from "next-auth/react";
import ChangePasswordModal from "../modal/change-password-modal";
import { User } from "@prisma/client";
import { deleteUser } from "@/actions/user";

export function UsersTable() {
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] =
    useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const {
    data: users,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => await getAllUsers(),
  });

  const { data: session } = useSession();
  const loggedInUser = session?.user;

  const handleDeleteUser = async (userId: string) => {
    if (confirm("Are you sure you want to delete this user?")) {
      try {
        await deleteUser(userId);
        refetch();
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">User Accounts</h2>
        {loggedInUser?.role === "ROOT" && (
          <AddUserModal
            isAddUserModalOpen={isAddUserModalOpen}
            setIsAddUserModalOpen={setIsAddUserModalOpen}
            refetch={refetch}
          />
        )}
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Joined</TableHead>
              {loggedInUser?.role === "ROOT" && <TableHead>Actions</TableHead>}
            </TableRow>
          </TableHeader>
          <TableBody>
            {users?.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id.slice(0, 6)}</TableCell>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  {new Date(user.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </TableCell>
                {loggedInUser?.role === "ROOT" && (
                  <TableCell>
                    <Button
                      onClick={() => {
                        setSelectedUser(user);
                        setIsChangePasswordModalOpen(true);
                      }}
                      variant="outline"
                      size="sm"
                    >
                      Edit
                    </Button>
                    {user.role !== "ROOT" && (
                      <Button
                        onClick={() => handleDeleteUser(user.id)}
                        variant="outline"
                        size="sm"
                      >
                        Delete
                      </Button>
                    )}
                  </TableCell>
                )}
              </TableRow>
            ))}
            {isLoading && (
              <TableRow>
                <TableCell colSpan={6} className="text-center">
                  Loading users...
                </TableCell>
              </TableRow>
            )}
            {users?.length === 0 && !isLoading && (
              <TableRow>
                <TableCell colSpan={6} className="text-center">
                  No users found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <ChangePasswordModal
        isChangePasswordModalOpen={isChangePasswordModalOpen}
        setIsChangePasswordModalOpen={setIsChangePasswordModalOpen}
        user={selectedUser}
      />
    </div>
  );
}
