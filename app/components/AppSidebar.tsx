"use client";

import {
  Home,
  Search,
  CalendarDays,
  ShoppingCart,
  Heart,
  Settings,
  ChefHat,
} from "lucide-react";
import { NavLink } from "../components/NavLink";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "../components/ui/sidebar";

const items = [
  { title: "Home", url: "/planner/dashboard", icon: Home },
  { title: "Recipe Finder", url: "/planner/recipes", icon: Search },
  { title: "Meal Planner", url: "/planner/mealplanner", icon: CalendarDays },
  { title: "Grocery List", url: "/planner/grocery-list", icon: ShoppingCart },
  { title: "Favorites", url: "/planner/favorites", icon: Heart },
  { title: "Settings", url: "/planner/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary shrink-0">
            <ChefHat className="h-6 w-6 text-primary-foreground" />
          </div>
          {!collapsed && (
            <span className="font-heading text-xl font-semibold text-sidebar-foreground truncate">
              MealFlow
            </span>
          )}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <NavLink
                      href={item.url}
                      className="hover:bg-sidebar-accent/50 h-11 text-base px-3"
                      activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                    >
                      <item.icon className="mr-3 h-5 w-5 shrink-0" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
