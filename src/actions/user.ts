"use server";

import prisma from "@/lib/db";

export async function changeUserPassword(userId: string, newPassword: string) {
  try {
    await prisma.user.update({
      where: { id: userId },
      data: { password: newPassword },
    });
  } catch (error) {
    console.error("Error changing user password:", error);
  }
}

export async function deleteUser(id: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (user?.role === "ROOT") {
      throw new Error("Root cannot be deleted");
    }

    const deletedUser = await prisma.user.delete({
      where: { id },
    });
    return user;
  } catch (err) {
    throw err;
  }
}
