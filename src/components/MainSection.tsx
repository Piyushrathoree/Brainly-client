import React, { useState } from "react";
import {
  
  IconBrandTwitter,
  IconVideo,
  IconFileText,
  IconLink,
  IconHash,
  IconShare,
  IconPlus,
} from "@tabler/icons-react";
import NoteCard from "./NoteCard";
import TweetCard from "./TweetCard";
import VideoCard from "./VideoCard";
import DocumentCard from "./DocumentCard";
import LinkCard from "./LinkCard";
import AddContentModal from "./AddContentModal";
import ShareBrainDialog from "./ShareBrainDialog";

const notes = [
  {
    id: 1,
    title: "Future Projects",
    category: "Project Ideas",
    content: (
      <ul className="list-disc ml-5">
        <li>Build a personal knowledge base</li>
        <li>Create a habit tracker</li>
        <li>Design a minimalist todo app</li>
      </ul>
    ),
    tags: ["#productivity", "#ideas"],
    date: "10/03/2024",
  },
  {
    id: 2,
    title: "How to Build a Second Brain",
    category: "Project Ideas",
    content: (
      <div className="flex items-center justify-center h-24 bg-black/20 rounded-md">
        <span className="text-gray-500 text-sm">(Image placeholder)</span>
      </div>
    ),
    tags: ["#productivity", "#learning"],
    date: "09/03/2024",
  },
  {
    id: 3,
    title: "Productivity Tip",
    category: "Project Ideas",
    content: (
      <span>
        The best way to learn is to build in public. Share your progress, get
        feedback, and help others along the way.
      </span>
    ),
    tags: ["#productivity", "#learning"],
    date: "08/03/2024",
  },
];

const tweets = [
  {
    title: "Inspiring Tweet",
    tweetUrl: "https://twitter.com/naval/status/1002103360646823936",
    tags: ["#inspiration", "#naval"],
    date: "10/03/2024",
  },
  {
    title: "React News",
    tweetUrl: "https://twitter.com/reactjs/status/1392133121231237121",
    tags: ["#react", "#news"],
    date: "09/03/2024",
  },
  {
    title: "AI Breakthrough",
    tweetUrl: "https://twitter.com/sama/status/1643661234567895040",
    tags: ["#ai", "#openai"],
    date: "08/03/2024",
  },
];

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

type ContentType = "note" | "tweet" | "video" | "link";

interface ContentData {
  type: ContentType;
  title: string;
  url?: string;
  tags: string[];
  content?: string;
}

const sidebarLinks = [
  { icon: IconFileText, label: "Notes", key: "notes" },
  { icon: IconBrandTwitter, label: "Tweets", key: "tweets" },
  { icon: IconVideo, label: "Videos", key: "videos" },
  { icon: IconFileText, label: "Documents", key: "documents" },
  { icon: IconLink, label: "Links", key: "links" },
  { icon: IconHash, label: "Tags", key: "tags" },
];

const MainSection: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<SectionType>("notes");
  const [isAddContentOpen, setIsAddContentOpen] = useState(false);
  const [isShareBrainOpen, setIsShareBrainOpen] = useState(false);

  const handleAddContent = (data: ContentData) => {
    console.log("New content:", data);
    // TODO: Add the new content to the appropriate section
  };

  return (
    <div className="flex h-[calc(100vh-5rem)] bg-background">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r border-border flex flex-col items-center py-8">
        <div className="flex items-center -ml-18 mb-10 justify-start">
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Dashboard
          </span>
        </div>
        <nav className="flex flex-col gap-4 w-full px-6">
          {sidebarLinks.map((item) => (
            <button
              key={item.key}
              className={`flex items-center gap-3 text-muted-foreground hover:text-foreground py-2 px-3 rounded-lg transition-colors hover:bg-accent ${
                selectedSection === item.key
                  ? "bg-purple-900/40 text-purple-300 dark:bg-purple-900/40 dark:text-purple-300"
                  : ""
              }`}
              onClick={() => setSelectedSection(item.key as SectionType)}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-base">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-0 overflow-hidden flex flex-col">
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
        <div className="group flex-1 overflow-y-auto card-scrollbar px-10 py-8">
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
            <div className="h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedSection === "notes" &&
                notes.map((note) => (
                  <NoteCard
                    key={note.id}
                    title={note.title}
                    category={note.category}
                    content={note.content}
                    tags={note.tags}
                    date={note.date}
                  />
                ))}
              {selectedSection === "tweets" &&
                tweets.map((tweet, idx) => (
                  <TweetCard
                    key={idx}
                    title={tweet.title}
                    tweetUrl={tweet.tweetUrl}
                    tags={tweet.tags}
                    date={tweet.date}
                  />
                ))}
              {selectedSection === "videos" &&
                videos.map((video, idx) => (
                  <VideoCard
                    key={idx}
                    title={video.title}
                    videoUrl={video.videoUrl}
                    tags={video.tags}
                    date={video.date}
                  />
                ))}
              {selectedSection === "documents" &&
                documents.map((doc, idx) => (
                  <DocumentCard
                    key={idx}
                    title={doc.title}
                    docUrl={doc.docUrl}
                    tags={doc.tags}
                    date={doc.date}
                  />
                ))}
              {selectedSection === "links" &&
                links.map((link, idx) => (
                  <LinkCard
                    key={idx}
                    title={link.title}
                    url={link.url}
                    tags={link.tags}
                    date={link.date}
                  />
                ))}
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

export default MainSection;
