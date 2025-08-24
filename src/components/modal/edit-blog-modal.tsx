import { Blog } from "../tables/blogs-table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useUploadThing } from "@/hooks/uploadthing-hooks";
import { updateBlog } from "@/actions";

interface EditBlogProps {
  isEditModalOpen: boolean;
  setIsEditModalOpen: (open: boolean) => void;
  currentBlog: Blog | null;
  setCurrentBlog: (blog: Blog | null) => void;
  refetch: () => void;
}

function EditBlogModal({
  isEditModalOpen,
  setIsEditModalOpen,
  currentBlog,
  setCurrentBlog,
  refetch,
}: EditBlogProps) {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<File | null>(null);

  const { startUpload } = useUploadThing("imageUploader", {
    onUploadError(err) {
      console.log(err, "from edit blog modal");
    },
    onClientUploadComplete(res) {
      if (!currentBlog) return;
      const updatedBlog = { ...currentBlog, imageUrl: res[0].ufsUrl };
      updateBlog(currentBlog.id, updatedBlog);
      refetch();
    },
  });

  const handleEditBlog = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!currentBlog) return;

    try {
      setLoading(true);
      if (image) {
        await startUpload([image]);
      } else {
        await updateBlog(currentBlog.id, {
          title: currentBlog.title,
          author: currentBlog.author,
          description: currentBlog.description,
          imageUrl: currentBlog.image,
        });
        refetch();
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsEditModalOpen(false);
      setCurrentBlog(null);
      setLoading(false);
    }
  };

  return (
    <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
      <DialogContent>
        <form onSubmit={handleEditBlog}>
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
                  required
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
                  required
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
                  required
                  onChange={(e) =>
                    setCurrentBlog({
                      ...currentBlog,
                      description: e.target.value,
                    })
                  }
                  rows={4}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="image">Image</Label>
                <div className="grid w-full items-center gap-3">
                  <Input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0] || null;
                      setImage(file);
                    }}
                  />
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button
              variant="outline"
              type="button"
              onClick={() => setIsEditModalOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? <Loader2 className="animate-spin" /> : "Save Changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default EditBlogModal;
