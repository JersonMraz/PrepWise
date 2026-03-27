import { SidebarProvider } from "./ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { TopNav } from "./TopNav";
import { BottomNav } from "./BottomNav";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <div className="hidden md:block">
          <AppSidebar />
        </div>
        <div className="flex-1 flex flex-col min-w-0">
          <TopNav />
          <main className="flex-1 p-4 md:p-6 pb-20 md:pb-6">{children}</main>
        </div>
      </div>
      <BottomNav />
    </SidebarProvider>
  );
}
