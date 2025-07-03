

import { useState } from "react"
import { AdminSidebar } from "../components/adminsidebar"
import { DashboardOverview } from "../components/dashboardoverview"
import { StudentManagement } from "../components/studentmanagement"
import { ContentManagement } from "../components/contentmanagement"
import { Analytics } from "../components/analytics"
import { UserManagement } from "../components/usermanagement"
import { SidebarProvider, SidebarInset } from "../components/sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
}from "../components/Breadcrumb"
import { Separator } from "../components/separator"
import { SidebarTrigger } from "../components/sidebar"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <DashboardOverview />
      case "students":
        return <StudentManagement />
      case "content":
        return <ContentManagement />
      case "users":
        return <UserManagement />
      case "analytics":
        return <Analytics />
      default:
        return <DashboardOverview />
    }
  }

  const getBreadcrumbTitle = () => {
    const titles = {
      overview: "Dashboard Overview",
      students: "Student Management",
      content: "Content Management",
      users: "User Management",
      analytics: "Analytics & Reports",
    }
    return titles[activeTab] || "Dashboard"
  }

  return (
    <SidebarProvider>
      <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/admin">Admin</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>{getBreadcrumbTitle()}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">{renderContent()}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}
