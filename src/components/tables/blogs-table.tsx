"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import CreateBlogModal from "../modal/create-blog-modal";
import EditBlogModal from "../modal/edit-blog-modal";
import { useQuery } from "@tanstack/react-query";
import { deleteBlog, getAllBlogs } from "@/actions/blogs";
import { Pencil, Trash2 } from "lucide-react";

export interface Blog {
  id: string;
  title: string;
  date: Date;
  author: string;
  description: string;
  image: string;
}

export function BlogsTable() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentBlog, setCurrentBlog] = useState<Blog | null>(null);

  const {
    data: blogs,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => await getAllBlogs(),
  });

  const handleDeleteBlog = async (id: string) => {
    if (confirm("Are you sure you want to delete this blog?")) {
      await deleteBlog(id);
      refetch();
    }
  };

  const openEditModal = (blog: Blog) => {
    setCurrentBlog(blog);
    setIsEditModalOpen(true);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Blog Posts</h2>
        <CreateBlogModal
          isCreateModalOpen={isCreateModalOpen}
          setIsCreateModalOpen={setIsCreateModalOpen}
          refetch={refetch}
        />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {blogs?.map((blog) => (
              <TableRow key={blog.id}>
                <TableCell>{blog.id.slice(0, 6)}...</TableCell>
                <TableCell className="font-medium">{blog.title}</TableCell>
                <TableCell>
                  {new Date(blog?.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </TableCell>
                <TableCell>{blog.author}</TableCell>
                <TableCell className="max-w-xs truncate">
                  {blog.description}
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => openEditModal(blog)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleDeleteBlog(blog.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {isLoading && (
              <TableRow>
                <TableCell colSpan={6} className="text-center">
                  Loading blogs...
                </TableCell>
              </TableRow>
            )}
            {blogs?.length === 0 && !isLoading && (
              <TableRow>
                <TableCell colSpan={6} className="text-center">
                  No blogs found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Edit Blog Modal */}
      <EditBlogModal
        refetch={refetch}
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
        currentBlog={currentBlog}
        setCurrentBlog={setCurrentBlog}
      />
    </div>
  );
}
