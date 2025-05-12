import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IconCopy, IconCheck } from '@tabler/icons-react';

interface ShareBrainDialogProps {
  isOpen: boolean;
  onClose: () => void;
  shareUrl: string;
}

const ShareBrainDialog: React.FC<ShareBrainDialogProps> = ({ isOpen, onClose, shareUrl }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Share Your Brain</DialogTitle>
          <DialogDescription>
            Share your knowledge base with others
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Share Link</label>
            <div className="flex gap-2 items-center justify-between">
              <Input
                value={shareUrl}
                readOnly
                className="bg-black/20 outline-none  text-white w-[20rem] p-1.5 rounded-md"
              />
              <Button
                onClick={handleCopy}
                variant="outline"
                className="shrink-0 border-gray-700  bg-purple-900/20 text-purple-300 hover:text-purple-300"
              >
                {copied ? (
                  <IconCheck className="w-5 h-5 text-green-500" />
                ) : (
                  <IconCopy className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>
          <div className="flex justify-end">
            <Button 
              variant="outline" 
              onClick={onClose}
              className="border-gray-700 bg-purple-900/20 hover:text-purple-300 text-purple-300"
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareBrainDialog; 