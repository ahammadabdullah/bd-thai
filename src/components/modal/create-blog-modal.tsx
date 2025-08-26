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
import { Loader2, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { useUploadThing } from "@/hooks/uploadthing-hooks";
import { createBlog } from "@/actions/blogs";

interface CreateBlogModalProps {
  isCreateModalOpen: boolean;
  setIsCreateModalOpen: (open: boolean) => void;
  refetch: () => void;
}

export interface BlogData {
  title: string;
  author: string;
  description: string;
  imageUrl: string;
}

function CreateBlogModal({
  isCreateModalOpen,
  setIsCreateModalOpen,
  refetch,
}: CreateBlogModalProps) {
  const [newBlog, setNewBlog] = useState<BlogData>({
    title: "",
    author: "",
    description: "",
    imageUrl: "",
  });
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<File | null>(null);

  const { startUpload } = useUploadThing("imageUploader", {
    onUploadError(err) {
      console.log(err, "from create blog modal");
    },
    onClientUploadComplete(res) {
      const newBlogWithImage = { ...newBlog, imageUrl: res[0].ufsUrl };
      createBlog(newBlogWithImage);
    },
  });

  const handleCreateBlog = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      await startUpload([image!]);
    } catch (err) {
      console.log(err);
    } finally {
      refetch();
      setIsCreateModalOpen(false);
      setNewBlog({
        title: "",
        author: "",
        description: "",
        imageUrl: "",
      });
      setLoading(false);
    }
  };
  return (
    <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Blog
        </Button>
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={handleCreateBlog}>
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
                required
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
                required
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
                required
                onChange={(e) =>
                  setNewBlog({ ...newBlog, description: e.target.value })
                }
                placeholder="Enter blog description"
                rows={4}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="image">Image</Label>
              <div className="grid w-full  items-center gap-3">
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  required
                  onChange={(e) => {
                    const file = e.target.files?.[0] || null;
                    setImage(file);
                  }}
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              type="button"
              onClick={() => setIsCreateModalOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? <Loader2 className="animate-spin" /> : "Create"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default CreateBlogModal;
