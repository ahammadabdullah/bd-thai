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

import { Pencil, Trash2 } from "lucide-react";
import CreateBlogModal from "../modal/create-blog-modal";
import EditBlogModal from "../modal/edit-blog-modal";

// Sample blog data
const initialBlogs = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    created_at: "2023-05-15",
    author: "John Doe",
    description: "A beginner's guide to Next.js framework and its features.",
  },
  {
    id: 2,
    title: "Understanding React Hooks",
    created_at: "2023-06-22",
    author: "Jane Smith",
    description:
      "Deep dive into React Hooks and how they can simplify your code.",
  },
  {
    id: 3,
    title: "CSS Grid Layout",
    created_at: "2023-07-10",
    author: "Alex Johnson",
    description: "Learn how to create complex layouts with CSS Grid.",
  },
];

export interface Blog {
  id: number;
  title: string;
  created_at: string;
  author: string;
  description: string;
}

export function BlogsTable() {
  const [blogs, setBlogs] = useState<Blog[]>(initialBlogs);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentBlog, setCurrentBlog] = useState<Blog | null>(null);
  const [newBlog, setNewBlog] = useState({
    title: "",
    author: "",
    description: "",
  });

  const handleDeleteBlog = (id: number) => {
    if (confirm("Are you sure you want to delete this blog?")) {
      setBlogs(blogs.filter((blog) => blog.id !== id));
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
            {blogs.map((blog) => (
              <TableRow key={blog.id}>
                <TableCell>{blog.id}</TableCell>
                <TableCell className="font-medium">{blog.title}</TableCell>
                <TableCell>{blog.created_at}</TableCell>
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
          </TableBody>
        </Table>
      </div>

      {/* Edit Blog Modal */}
      <EditBlogModal
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
        currentBlog={currentBlog}
        setCurrentBlog={setCurrentBlog}
      />
    </div>
  );
}
