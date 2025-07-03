import {
  LayoutDashboard,
  Users,
  BookOpen,
  UserCheck,
  BarChart3,
  LogOut,
  GraduationCap,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "../components/sidebar";
import { Button } from "../components/button";
import { Badge } from "../components/badge";

const menuItems = [
  { title: "Dashboard", icon: LayoutDashboard, id: "overview" },
  { title: "Students", icon: GraduationCap, id: "students", badge: "245" },
  { title: "Content", icon: BookOpen, id: "content" },
  { title: "Users", icon: UserCheck, id: "users" },
  { title: "Analytics", icon: BarChart3, id: "analytics" },
];

export function AdminSidebar({ activeTab, setActiveTab }) {
  return (
    <Sidebar className="flex flex-col h-full w-64 bg-white border-r shadow-sm">
      {/* Header */}
      <SidebarHeader className="border-b px-6 py-5">
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <GraduationCap className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold leading-tight">PrepMate</h2>
            <p className="text-xs text-muted-foreground">Learning Management</p>
          </div>
        </div>
      </SidebarHeader>

      {/* Menu content */}
      <SidebarContent className="flex-1 overflow-y-auto px-2 py-5">
        <SidebarGroup>
          <SidebarGroupLabel className="px-6 py-2 text-xs font-semibold uppercase text-muted-foreground">
            Main Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col space-y-1">
              {menuItems.map(({ id, title, icon: Icon, badge }) => {
                const isActive = activeTab === id;
                return (
                  <SidebarMenuItem key={id}>
                    <SidebarMenuButton
                      onClick={() => setActiveTab(id)}
                      className={`flex items-center gap-4 w-full rounded-md px-6 py-3 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <Icon className="h-5 w-5 flex-shrink-0" />
                      <span className="flex-grow">{title}</span>
                      {badge && (
                        <Badge
                          variant="secondary"
                          className="ml-auto bg-gray-200 text-gray-700"
                        >
                          {badge}
                        </Badge>
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="border-t px-6 py-5">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Users className="h-6 w-6 text-primary" />
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-semibold leading-tight">Admin User</p>
            <p className="text-xs text-muted-foreground">admin@school.edu</p>
          </div>
        </div>
        <Button variant="ghost" size="sm" className="w-full justify-start">
          <LogOut className="h-4 w-4 mr-2" />
          Sign Out
        </Button>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
