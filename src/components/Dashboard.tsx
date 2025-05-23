import { useState, useEffect } from "react";
import {
  IconBrandTwitter,
  IconVideo,
  IconFileText,
  IconLink,
  IconShare,
  IconPlus,
  IconRefresh,
} from "@tabler/icons-react";
// import NoteCard from "./NoteCard";
// import TweetCard from "./TweetCard";
// import VideoCard from "./VideoCard";
// import DocumentCard from "./DocumentCard";
// import LinkCard from "./LinkCard";
import AddContentModal from "./AddContentModal";
import ShareBrainDialog from "./ShareBrainDialog";
import useGetData from "@/hooks/useGetData";
import { MessageLoading } from "./ui/message-loading";
import NoteCard from "./NoteCard";
import TweetCard from "./TweetCard";
import VideoCard from "./VideoCard";
import DocumentCard from "./DocumentCard";
import LinkCard from "./LinkCard";
import { NotebookText } from "lucide-react";
import toast from "react-hot-toast";
import useContent from "@/hooks/useContent";

type SectionType =
  | "notes"
  | "tweets"
  | "videos"
  | "documents"
  | "links"

type ContentType = "note" | "tweet" | "video" | "link" | "document";

interface ContentData {
  type: ContentType;
  title: string;
  url?: string;
  
  content?: string;
  date?: Date;
}

const sidebarLinks = [
  { icon: NotebookText, label: "Notes", key: "notes" },
  { icon: IconBrandTwitter, label: "Tweets", key: "tweets" },
  { icon: IconVideo, label: "Videos", key: "videos" },
  { icon: IconFileText, label: "Documents", key: "documents" },
  { icon: IconLink, label: "Links", key: "links" },
];

const Dashboard = () => {
  const type = localStorage.getItem("type");
  const [selectedSection, setSelectedSection] = useState<SectionType>(
    type as SectionType || 'notes'
  );
  // Track previous section to detect transition to "tweets"
  const [prevSection, setPrevSection] = useState<SectionType | null>(null);

  useEffect(() => {
    if (
      prevSection &&
      prevSection !== "tweets" &&
      selectedSection === "tweets"
    ) {
      toast.error("You tweets can't be refreshed please refresh the page");
      // location.reload();
    }
    setPrevSection(selectedSection);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSection]);
  const [isAddContentOpen, setIsAddContentOpen] = useState(false);
  const [isShareBrainOpen, setIsShareBrainOpen] = useState(false);

  const { addContent, deleteContent } = useContent();

  const handleAddContent = (details: ContentData) => {
    addContent({
      title: details.title,
      content: details.content,
      link: details.url,
     
      type: details.type,
    });
  };
  const { getData, loading, contentData, refreshData } = useGetData();

  useEffect(() => {
    // Initial data fetch
    getData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Add refresh functionality
  const handleRefresh = () => {
    if (selectedSection === "tweets") {
      toast.error("You tweets can't be refreshed please refresh the page");
      return;
    }
    refreshData();
  };

  const handleDeleteContent = async (id: string) => {
    try {
      await deleteContent(id);
      refreshData();
    } catch {
      // Error toast already handled in hook
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <span className="text-gray-500 text-xl  ">
          <MessageLoading />
        </span>
      </div>
    );
  }

  return (
    <div className="flex h-[calc(100vh-9rem)] bg-background overflow-y-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r border-border flex flex-col items-center py-4 -mt-4">
        <div className="flex items-center -ml-18 mb-10 justify-start">
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent shadow-lg">
            Dashboard
          </span>
        </div>
        <nav className="flex flex-col gap-4 w-full px-6">
          {sidebarLinks.map((item) => (
            <button
              key={item.key}
              className={`flex items-center gap-3 text-muted-foreground  py-2 px-3 rounded-lg transition-colors  ${
                selectedSection === item.key
                  ? "bg-purple-900/40 text-purple-300 "
                  : ""
              }`}
              onClick={() => {
                setSelectedSection(item.key as SectionType);
                localStorage.setItem("type", item.key as SectionType);
              }}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-base">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-0 overflow-hidden flex flex-col -mt-6">
        {/* Sticky Top Bar */}
        <div className="sticky top-0 z-10 bg-background px-10 pt-10 pb-6 flex items-center justify-between border-b border-border">
          <h1 className="text-2xl font-bold text-foreground">
            {sidebarLinks.find((s) => s.key === selectedSection)?.label}
          </h1>
          <div className="flex gap-3">
            <button
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-900 hover:bg-gray-700 text-white font-semibold shadow transition-colors"
              onClick={handleRefresh}
            >
              <IconRefresh className="w-5 h-5" />
            </button>
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow transition-colors"
              onClick={() => setIsShareBrainOpen(true)}
            >
              <IconShare className="w-5 h-5" /> Share Brain
            </button>
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500 hover:bg-purple-600 text-white font-semibold shadow transition-colors"
              onClick={() => setIsAddContentOpen(true)}
            >
              <IconPlus className="w-5 h-5" /> Add Content
            </button>
          </div>
        </div>

        {/* Scrollable Card Grid */}
        <div className="group flex-1 overflow-y-auto card-scrollbar px-10 py-8 ">
          <div className=" grid grid-cols-1 md:grid-cols-2  gap-6 ">
            {selectedSection === "notes" &&
              contentData.notes.map((note) => (
                <NoteCard
                  key={note._id}
                  id={note._id}
                  title={note.title}
                  content={note.content}
                  link={note.link}
                  date={new Date(note.createdAt)}
                  onDelete={handleDeleteContent}
                />
              ))}
            {selectedSection === "tweets" &&
              contentData.tweets.map((tweet) => (
                <TweetCard
                  key={tweet._id}
                  id={tweet._id}
                  title={tweet.title}
                  link={tweet.link}
                  date={new Date(tweet.createdAt)}
                  onDelete={handleDeleteContent}
                />
              ))}
            {selectedSection === "documents" &&
              contentData.document.map((doc) => (
                <DocumentCard
                  key={doc._id}
                  id={doc._id}
                  title={doc.title}
                  link={doc.link}
                  date={new Date(doc.createdAt)}
                  content={doc.content}
                  onDelete={handleDeleteContent}
                />
              ))}
            {selectedSection === "links" &&
              contentData.links.map((link) => (
                <LinkCard
                  key={link._id}
                  id={link._id}
                  title={link.title}
                  link={link.link}
                  date={new Date(link.createdAt)}
                  content={link.content}
                  onDelete={handleDeleteContent}
                />
              ))}
            {selectedSection === "videos" &&
              contentData.videos.map((video) => (
                <VideoCard
                  key={video._id}
                  id={video._id}
                  title={video.title}
                  link={video.link}
                  date={new Date(video.createdAt)}
                  content={video.content}
                  onDelete={handleDeleteContent}
                />
              ))}
          </div>
        </div>
      </main>

      <AddContentModal
        isOpen={isAddContentOpen}
        onClose={() => setIsAddContentOpen(false)}
        onSubmit={handleAddContent}
      />

      <ShareBrainDialog
        isOpen={isShareBrainOpen}
        onClose={() => setIsShareBrainOpen(false)}
        shareUrl={`${window.location.origin}/share/${localStorage.getItem(
          "shareCode"
        )}`}
      />
    </div>
  );
};

export default Dashboard;
