"use client";

import { SidebarProvider, SidebarInset, SidebarTrigger } from "../components/ui/sidebar";
import { AppSidebar } from "../components/AppSidebar";
import { TopNav } from "../components/TopNav";

export default function PlannerLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <TopNav />
                <main className="flex-1 p-6">
                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
}