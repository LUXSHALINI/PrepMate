
import React from 'react';

export const SidebarProvider = ({ children }) => {
  return <div className="sidebar-provider">{children}</div>;
};

export const SidebarInset = ({ children }) => {
  return <aside className="sidebar-inset">{children}</aside>;
};

export const Sidebar = ({ children }) => (
  <aside className="sidebar">{children}</aside>
);

export const SidebarContent = ({ children }) => (
  <div className="sidebar-content">{children}</div>
);

export const SidebarFooter = ({ children }) => (
  <footer className="sidebar-footer">{children}</footer>
);

export const SidebarGroup = ({ children }) => (
  <div className="sidebar-group">{children}</div>
);

export const SidebarGroupContent = ({ children }) => (
  <div className="sidebar-group-content">{children}</div>
);

export const SidebarGroupLabel = ({ children }) => (
  <div className="sidebar-group-label font-semibold">{children}</div>
);

export const SidebarHeader = ({ children }) => (
  <header className="sidebar-header">{children}</header>
);

export const SidebarMenu = ({ children }) => (
  <nav className="sidebar-menu">{children}</nav>
);

export const SidebarMenuButton = ({ children, onClick }) => (
  <button onClick={onClick} className="sidebar-menu-button">
    {children}
  </button>
);

export const SidebarMenuItem = ({ children, href }) => (
  <a href={href} className="sidebar-menu-item block px-4 py-2 hover:bg-gray-100">
    {children}
  </a>
);

export const SidebarRail = ({ children }) => (
  <div className="sidebar-rail">{children}</div>
);




export const SidebarTrigger = ({ onClick, children }) => (
  <button onClick={onClick} className="sidebar-trigger">
    {children}
  </button>
);


