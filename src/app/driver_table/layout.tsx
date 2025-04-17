import { PaginationDemo } from "@/components/app-pagination";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Bell, Menu, UserCircle } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <main className="w-full">
        <div className="flex flex-col flex-1 h-full">
          {/* Top Navigation */}
          <header className="flex items-center justify-between px-6 py-4 border-b bg-white">
            <div className="flex items-center gap-4">
              <SidebarTrigger />

              <h1 className="text-lg font-semibold">Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
              <Bell className="h-5 w-5 text-muted-foreground" />
              <UserCircle className="h-6 w-6 text-muted-foreground" />
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 p-6 bg-muted/50">{children}</main>
        </div>
      </main>
    </SidebarProvider>
  );
}
