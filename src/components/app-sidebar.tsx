"use client";

import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  Car,
  Pin,
  History,
  Users,
  LogOut,
} from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const items = [
  { title: "Dashboard", url: "/dashboard", icon: Home },
  { title: "Drivers", url: "/drivers", icon: Car },
  { title: "Trips", url: "/trips", icon: Pin },
  { title: "Transactions", url: "/transactions", icon: History },
  { title: "Settings", url: "/settings", icon: Settings },
  { title: "Users", url: "/users", icon: Users },
  { title: "Logout", url: "/logout", icon: LogOut },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="min-h-screen border-r">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive = pathname.startsWith(item.url);

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.url}
                        className={`flex items-center gap-2 px-3 py-2 rounded-md w-full ${
                          isActive
                            ? "bg-muted text-primary"
                            : "hover:bg-muted transition-colors"
                        }`}
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
