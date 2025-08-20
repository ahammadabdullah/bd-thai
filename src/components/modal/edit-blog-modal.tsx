import { Blog } from "../tables/blogs-table";
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
import { Button } from "../ui/button";

interface EditBlogProps {
  isEditModalOpen: boolean;
  setIsEditModalOpen: (open: boolean) => void;
  currentBlog: Blog | null;
  setCurrentBlog: (blog: Blog | null) => void;
}

function EditBlogModal({
  isEditModalOpen,
  setIsEditModalOpen,
  currentBlog,
  setCurrentBlog,
}: EditBlogProps) {
  const handleEditBlog = () => {
    if (!currentBlog) return;

    setIsEditModalOpen(false);
  };

  return (
    <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Blog</DialogTitle>
          <DialogDescription>Make changes to the blog post.</DialogDescription>
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
  );
}

export default EditBlogModal;
