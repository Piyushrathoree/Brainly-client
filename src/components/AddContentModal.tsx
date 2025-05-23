import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  IconFileText,
  IconBrandTwitter,
  IconVideo,
  IconLink,
} from "@tabler/icons-react";
import { BookText } from "lucide-react";

type ContentType = "note" | "tweet" | "video" | "link" | "document";

export interface ContentData {
  type: ContentType;
  title: string;
  url?: string;
  tags: string[];
  content?: string;
}

interface AddContentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: ContentData) => void;
}

const AddContentModal: React.FC<AddContentModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [contentType, setContentType] = React.useState<
    "note" | "tweet" | "video" | "link" | "document"
  >("note");
  const [title, setTitle] = React.useState("");
  const [url, setUrl] = React.useState("");
  const [tags, setTags] = React.useState("");
  const [content, setContent] = React.useState("");


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      type: contentType,
      title,
      url,
      tags: tags.split(",").map((tag) => tag.trim()),
      content,
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-w-[440px] rounded-xl">
        <DialogHeader>
          <DialogTitle>Add New Content</DialogTitle>
          <DialogDescription>
            Choose the type of content you want to add
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 gap-2">
            <Button
              variant={contentType === "note" ? "outline" : "default"}
              className="flex flex-col items-center gap-2 h-auto py-3 border-gray-700 bg-purple-900/20 text-purple-300 hover:bg-purple-500/20 hover:text-purple-300"
              onClick={() => setContentType("note")}
            >
              <IconFileText className="w-5 h-5" />
              <span className="text-xs">Note</span>
            </Button>
            <Button
              variant={contentType === "tweet" ? "outline" : "default"}
              className="flex flex-col items-center gap-2 h-auto py-3 border-gray-700 bg-purple-900/20 text-purple-300 hover:bg-purple-500/20 hover:text-purple-300"
              onClick={() => setContentType("tweet")}
            >
              <IconBrandTwitter className="w-5 h-5" />
              <span className="text-xs">Tweet</span>
            </Button>
            <Button
              variant={contentType === "video" ? "outline" : "default"}
              className="flex flex-col items-center gap-2 h-auto py-3 border-gray-700 bg-purple-900/20 text-purple-300 hover:bg-purple-500/20 hover:text-purple-300"
              onClick={() => setContentType("video")}
            >
              <IconVideo className="w-5 h-5" />
              <span className="text-xs">Video</span>
            </Button>
            <Button
              variant={contentType === "link" ? "outline" : "default"}
              className="flex flex-col items-center gap-2 h-auto py-3 border-gray-700 bg-purple-900/20 text-purple-300 hover:bg-purple-500/20 hover:text-purple-300"
              onClick={() => setContentType("link")}
            >
              <IconLink className="w-5 h-5" />
              <span className="text-xs">Link</span>
            </Button>
            <Button
              variant={contentType === "document" ? "outline" : "default"}
              className="flex flex-col items-center gap-2 h-auto py-3 border-gray-700 bg-purple-900/20 text-purple-300 hover:bg-purple-500/20 hover:text-purple-300 "
              onClick={() => setContentType("document")}
            >
              <BookText className="w-5 h-5" />
              <span className="text-xs">Document</span>
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Title</label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter title"
                className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500"
                required
              />
            </div>

            {contentType !== "note" && (
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  {contentType === "tweet"
                    ? "Tweet URL"
                    : contentType === "video"
                    ? "Video URL"
                    : "Link URL"}
                </label>
                <Input
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder={`Enter ${contentType} URL`}
                  className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500"
                  
                />
              </div>
            )}

            {contentType === "note" && (
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  Content
                </label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Enter your note content"
                  className="w-full min-h-[100px] rounded-md border border-gray-700 bg-black/50 text-white p-2 placeholder:text-gray-500 outline-none"
                  
                />
              </div>
            )}
            {contentType === "document" && (
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  Content
                </label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Enter your document content"
                  className="w-full min-h-[100px] rounded-md border border-gray-700 bg-black/50 text-white p-2 placeholder:text-gray-500 outline-none"
                  
                />
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">
                Tags (comma separated)
              </label>
              <Input
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="e.g., #productivity, #ideas"
                className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500"
              />
            </div>

            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                onClick={onClose}
                className="border-gray-700 bg-purple-900/20 hover:text-purple-300  text-purple-300 "
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white "
              >
                Add Content
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddContentModal;
