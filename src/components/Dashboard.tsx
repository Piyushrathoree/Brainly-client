import { useState, useEffect } from "react";
import {
  IconBrandTwitter,
  IconVideo,
  IconFileText,
  IconLink,
  IconHash,
  IconShare,
  IconPlus,
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

const videos = [
  {
    title: "React Conf 2021",
    videoUrl: "https://www.youtube.com/watch?v=dGcsHMXbSOA",
    tags: ["#react", "#conference"],
    date: "10/03/2024",
  },
  {
    title: "Build a Second Brain",
    videoUrl: "https://www.youtube.com/watch?v=2X3A9b1cOe8",
    tags: ["#productivity", "#brain"],
    date: "09/03/2024",
  },
  {
    title: "Productivity Tips",
    videoUrl: "https://www.youtube.com/watch?v=V1Pl8CzNzCw",
    tags: ["#productivity", "#tips"],
    date: "08/03/2024",
  },
];

const documents = [
  {
    title: "Personal Knowledge Base.pdf",
    docUrl: "https://example.com/pkb.pdf",
    tags: ["#pdf", "#knowledge"],
    date: "10/03/2024",
  },
  {
    title: "Habit Tracker.xlsx",
    docUrl: "https://example.com/habit-tracker.xlsx",
    tags: ["#excel", "#habits"],
    date: "09/03/2024",
  },
  {
    title: "Minimalist Todo App.docx",
    docUrl: "https://example.com/todo-app.docx",
    tags: ["#word", "#todo"],
    date: "08/03/2024",
  },
];

const links = [
  {
    title: "OpenAI",
    url: "https://openai.com",
    tags: ["#ai", "#openai"],
    date: "10/03/2024",
  },
  {
    title: "React Docs",
    url: "https://react.dev",
    tags: ["#react", "#docs"],
    date: "09/03/2024",
  },
  {
    title: "Notion",
    url: "https://notion.so",
    tags: ["#productivity", "#notion"],
    date: "08/03/2024",
  },
];

const tags = [
  "#productivity",
  "#ideas",
  "#learning",
  "#ai",
  "#openai",
  "#react",
  "#conference",
  "#brain",
  "#tips",
  "#pdf",
  "#knowledge",
  "#excel",
  "#habits",
  "#word",
  "#todo",
  "#docs",
  "#notion",
  "#naval",
  "#news",
];

type SectionType =
  | "notes"
  | "tweets"
  | "videos"
  | "documents"
  | "links"
  | "tags";

type ContentType = "note" | "tweet" | "video" | "link" | "document";

interface ContentData {
  type: ContentType;
  title: string;
  url?: string;
  tags: string[];
  content?: string;
  date: Date;
}

const sidebarLinks = [
  { icon: NotebookText, label: "Notes", key: "notes" },
  { icon: IconBrandTwitter, label: "Tweets", key: "tweets" },
  { icon: IconVideo, label: "Videos", key: "videos" },
  { icon: IconFileText, label: "Documents", key: "documents" },
  { icon: IconLink, label: "Links", key: "links" },
  { icon: IconHash, label: "Tags", key: "tags" },
];

const Dashboard = () => {
  const type = localStorage.getItem("type");
  const [selectedSection, setSelectedSection] = useState<SectionType>(
    type as SectionType
  );
  const [isAddContentOpen, setIsAddContentOpen] = useState(false);
  const [isShareBrainOpen, setIsShareBrainOpen] = useState(false);

  const handleAddContent = (data: ContentData) => {};
  const { getData, loading, contentData } = useGetData();
  useEffect(() => {
    getData();
  }, []);

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
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
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

        {/* Scrollable Card Grid or Tag Chips */}
        <div className="group flex-1 overflow-y-auto card-scrollbar px-10 py-8 ">
          {selectedSection === "tags" ? (
            <div className="flex flex-wrap gap-3">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-purple-900/40 text-purple-300 dark:bg-purple-900/40 dark:text-purple-300 px-4 py-2 rounded-full text-base font-medium shadow border border-purple-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : (
            <div className=" grid grid-cols-1 md:grid-cols-2  gap-6 ">
              {selectedSection === "notes" &&
                contentData.notes.map((note, idx) => (
                  <NoteCard
                    key={idx}
                    title={note.title}
                    content={note.content}
                    link={note.link}
                    tags={note.tags}
                    date={new Date(note.createdAt)}
                  />
                ))}
              {selectedSection === "tweets" &&
                contentData.tweets.map((tweet, idx) => (
                  <TweetCard
                    key={idx}
                    title={tweet.title}
                    link={tweet.link}
                    tags={tweet.tags}
                    date={new Date(tweet.createdAt)}
                  />
                ))}
              {selectedSection === "documents" &&
                contentData.document.map((doc, idx) => (
                  <DocumentCard
                    key={idx}
                    title={doc.title}
                    link={doc.link}
                    tags={doc.tags}
                    date={new Date(doc.createdAt)}
                    content={doc.content}
                  />
                ))}
              {selectedSection === "links" &&
                contentData.links.map((link, idx) => (
                  <LinkCard
                    key={idx}
                    title={link.title}
                    link={link.link}
                    tags={link.tags}
                    date={new Date(link.createdAt)}
                    content={link.content}
                  />
                ))}
              {selectedSection === "videos" &&
                contentData.videos.map((video, idx) => (
                  <VideoCard  
                    key={idx}
                    title={video.title}
                    link={video.link}
                    tags={video.tags}
                    date={new Date(video.createdAt)}
                    content={video.content}
                  />
                ))}
              {/* {selectedSection === "tweets" &&
                    tweets.map((tweet, idx) => (
                      <TweetCard
                        key={idx}
                        title={tweet.title}
                        tweetUrl={tweet.tweetUrl}
                        tags={tweet.tags}
                        date={new Date(tweet.createdAt)}
                      />
                    ))}
                  {selectedSection === "videos" &&
                    videos.map((video, idx) => (
                      <VideoCard
                        key={idx}
                        title={video.title}
                        videoUrl={video.videoUrl}
                        tags={video.tags}
                        date={new Date(video.createdAt)}
                      />
                    ))}
                  {selectedSection === "documents" &&
                    documents.map((doc, idx) => (
                      <DocumentCard
                        key={idx}
                        title={doc.title}
                        docUrl={doc.docUrl}
                        tags={doc.tags}
                        date={new Date(doc.createdAt)}
                      />
                    ))}
                  {selectedSection === "links" &&
                    links.map((link, idx) => (
                      <LinkCard
                        key={idx}
                        title={link.title}
                        url={link.url}
                        tags={link.tags}
                        date={new Date(link.createdAt)}
                      />
                    ))} */}
            </div>
          )}
        </div>
      </main>

      {/* Modals */}
      <AddContentModal
        isOpen={isAddContentOpen}
        onClose={() => setIsAddContentOpen(false)}
        onSubmit={handleAddContent}
      />
      <ShareBrainDialog
        isOpen={isShareBrainOpen}
        onClose={() => setIsShareBrainOpen(false)}
        shareUrl={`${window.location.origin}/share/${Math.random()
          .toString(36)
          .substring(7)}`}
      />
    </div>
  );
};

export default Dashboard;
