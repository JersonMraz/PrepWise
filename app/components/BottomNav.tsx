import { Home, Search, CalendarDays, ShoppingCart, Heart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const items = [
  { icon: Home, url: "/", label: "Home" },
  { icon: Search, url: "/recipes", label: "Recipes" },
  { icon: CalendarDays, url: "/meal-planner", label: "Planner" },
  { icon: ShoppingCart, url: "/grocery-list", label: "Grocery" },
  { icon: Heart, url: "/favorites", label: "Favorites" },
];

export function BottomNav() {
  const { pathname } = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-around border-t border-border bg-card/90 backdrop-blur-md py-2 md:hidden">
      {items.map((item) => {
        const active = item.url === "/" ? pathname === "/" : pathname.startsWith(item.url);
        return (
          <Link
            key={item.url}
            to={item.url}
            className={`flex flex-col items-center gap-0.5 px-3 py-1 text-[10px] transition-colors ${
              active ? "text-primary font-medium" : "text-muted-foreground"
            }`}
          >
            <item.icon className="h-5 w-5" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
