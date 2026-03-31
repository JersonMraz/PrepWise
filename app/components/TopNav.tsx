import { Search, Bell, User, LogOut } from "lucide-react";
import { SidebarTrigger } from "./ui/sidebar";
import api from "../lib/api";
import { useEffect, useState } from "react";
import router from "next/router";

export function TopNav() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  const getUser = async () => {
    const token = localStorage.getItem('token')

    const response = await api.get('/api/users/user', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    setEmail(response.data.user.email)
    setFirstname(response.data.user.firstname)
    setLastname(response.data.user.lastname)
  }

  useEffect(() => {
    getUser()
  }, [])

  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false)

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const modal = document.getElementById('profile-modal')
      if (modal && !modal.contains(e.target as Node)) {
        setIsProfileModalOpen(false)
      }
    }
    if (isProfileModalOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isProfileModalOpen])

  const handleLogout = () => {
    localStorage.removeItem('token')
    router.push('/signin')
  }

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-3 border-b border-border bg-card/80 backdrop-blur-md px-4">
      <SidebarTrigger className="text-muted-foreground hover:text-foreground" />

      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search recipes, ingredients..."
          className="w-full rounded-lg border border-input bg-secondary/50 py-1.5 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30"
        />
      </div>

      <div className="ml-auto flex items-center gap-3">
        <button className="relative rounded-lg p-2 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors">
          <Bell className="h-4 w-4" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-accent" />
        </button>
        <div
          className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground cursor-pointer"
          onClick={() => setIsProfileModalOpen(!isProfileModalOpen)}
        >
          {firstname.charAt(0)}{lastname.charAt(0)}
        </div>

        {/* Profile Modal */}
        {isProfileModalOpen && (
          <div
            id="profile-modal"
            className="absolute right-4 top-16 w-64 rounded-lg border border-border bg-card shadow-lg z-50"
          >
            <div className="p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                  {firstname.charAt(0)}{lastname.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {firstname} {lastname}
                  </p>
                  <p className="text-xs text-muted-foreground">{email}</p>
                </div>
              </div>

              <button
                onClick={() => router.push('/planner/profile')}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-secondary rounded-md transition-colors mb-2 cursor-pointer"
              >
                <User className="h-4 w-4" />
                <span>Profile</span>
              </button>

              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-500 hover:bg-red-50 rounded-md transition-colors cursor-pointer"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
