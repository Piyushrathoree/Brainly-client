import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import '../App.css'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import Button2 from "./Button2";
import Button3 from "./Button3";
import Card from "./Card";

export function AppSidebar() {
  const items = [
    {
      title: "Home",
      url: "#",
      icon: Home,
    },
    {
      title: "Inbox",
      url: "#",
      icon: Inbox,
    },
    {
      title: "Calendar",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
  ];

  // Note: The background color should be added to the parent div's className:
  // Update this line in your return statement:
  // <div className="w-screeen overflow-x-hidden min-h-screen flex dark:bg-black/94">

  const heroLogo = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-brain-icon lucide-brain size-8"
    >
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
      <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
      <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
      <path d="M6 18a4 4 0 0 1-1.967-.516" />
      <path d="M19.967 17.484A4 4 0 0 1 18 18" />
    </svg>
  );
  return (
    <div className={`w-screeen overflow-x-hidden min-h-screen flex `}>
      <div>
        <SidebarProvider className="bg-transparent">
          <Sidebar className="dark:text-white w-92  " variant="sidebar">
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel className="text-3xl font-black mb-10 -ml-1 dark:text-white text-blue-500">
                  {" "}
                  <span className="pr-2 text-blue-500">{heroLogo}</span>Brainly
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          <a href={item.url} className="mb-3">
                            <span className="size-[20px] flex justify-center items-center">
                              <item.icon />
                            </span>
                            <span className="text-[16px] font-semibold text-black/85 dark:text-white/80">
                              {item.title}
                            </span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
        </SidebarProvider>
      </div>
      <div className="text-black/90 dark:text-white   w-[82vw] ml-24 flex flex-col gap-5">
        <nav className="flex items-center justify-between px-10  py-3  relative ">
          <div className="font-semibold text-xl text-white">All Content </div>
          <div className="flex gap-4  ">
            <Button3 />
            <Button2 />
          </div>
        </nav>
        <div className=" flex flex-wrap gap-10  absolute top-24 ml-[104px] ">
          <Card
            title="hey there "
            description="1.this card is for testing purpose ...........

            2.this card looks good 
            3. dark theme is also good "
            date={new Date(Date.now()).toLocaleDateString()}
          />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
