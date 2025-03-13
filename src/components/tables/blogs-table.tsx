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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Pencil, Trash2 } from "lucide-react";

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

interface Blog {
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

  const handleCreateBlog = () => {
    const blog = {
      id: blogs.length > 0 ? Math.max(...blogs.map((blog) => blog.id)) + 1 : 1,
      title: newBlog.title,
      author: newBlog.author,
      description: newBlog.description,
      created_at: new Date().toISOString().split("T")[0],
    };

    setBlogs([...blogs, blog]);
    setNewBlog({ title: "", author: "", description: "" });
    setIsCreateModalOpen(false);
  };

  const handleEditBlog = () => {
    if (!currentBlog) return;

    setBlogs(
      blogs.map((blog) => (blog.id === currentBlog.id ? currentBlog : blog))
    );

    setIsEditModalOpen(false);
  };

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
        <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create Blog
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Blog</DialogTitle>
              <DialogDescription>
                Add a new blog post to your website.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={newBlog.title}
                  onChange={(e) =>
                    setNewBlog({ ...newBlog, title: e.target.value })
                  }
                  placeholder="Enter blog title"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="author">Author</Label>
                <Input
                  id="author"
                  value={newBlog.author}
                  onChange={(e) =>
                    setNewBlog({ ...newBlog, author: e.target.value })
                  }
                  placeholder="Enter author name"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={newBlog.description}
                  onChange={(e) =>
                    setNewBlog({ ...newBlog, description: e.target.value })
                  }
                  placeholder="Enter blog description"
                  rows={4}
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setIsCreateModalOpen(false)}
              >
                Cancel
              </Button>
              <Button onClick={handleCreateBlog}>Create</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
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
      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Blog</DialogTitle>
            <DialogDescription>
              Make changes to the blog post.
            </DialogDescription>
          </DialogHeader>
          {currentBlog && (
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="edit-title">Title</Label>
                <Input
                  id="edit-title"
                  value={currentBlog.title}
                  onChange={(e) =>
                    setCurrentBlog({ ...currentBlog, title: e.target.value })
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-author">Author</Label>
                <Input
                  id="edit-author"
                  value={currentBlog.author}
                  onChange={(e) =>
                    setCurrentBlog({ ...currentBlog, author: e.target.value })
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-description">Description</Label>
                <Textarea
                  id="edit-description"
                  value={currentBlog.description}
                  onChange={(e) =>
                    setCurrentBlog({
                      ...currentBlog,
                      description: e.target.value,
                    })
                  }
                  rows={4}
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleEditBlog}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
