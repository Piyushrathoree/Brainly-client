import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  // SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import Button2 from "./Button2";
import Button3 from "./Button3";
import Card from "./Card";

 function MainSection() {
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

 
  return (
    <div className="w-screen overflow-hidden h-[calc(100vh-64px)] flex mt-20">
      <div>
        <SidebarProvider className="bg-transparent ">
          <Sidebar className="dark:text-white w-92 fixed top-24  " variant="sidebar" >
            <SidebarContent>
              <SidebarGroup >
                
                <SidebarGroupContent >
                  <SidebarMenu >
                    {items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild className="pl-5">
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
      <div className="text-black/90 dark:text-white w-[82vw] ml-24 flex flex-col">
        <nav className="flex items-center justify-between ml-5 px-10 z-40 py-3 w-[80vw]">
          <div className="font-semibold text-xl text-white">All Content </div>
          <div className="flex gap-4">
            <Button3 />
            <Button2 />
          </div>
        </nav>
        <div className="flex flex-wrap gap-10 mt-5 pt-5  ml-[104px] pl-5 h-[calc(100vh-120px)] overflow-y-auto pr-10 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-gray-400">
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

export default MainSection