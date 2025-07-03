import React from 'react';

export const Breadcrumb = ({ children }) => (
  <nav className="text-sm font-medium text-gray-500">{children}</nav>
);

export const BreadcrumbList = ({ children }) => (
  <ol className="flex items-center space-x-2">{children}</ol>
);

export const BreadcrumbItem = ({ children }) => (
  <li>{children}</li>
);

export const BreadcrumbLink = ({ href, children }) => (
  <a href={href} className="hover:text-gray-700">{children}</a>
);

export const BreadcrumbSeparator = () => (
  <span className="mx-2">/</span>
);

export const BreadcrumbPage = ({ children }) => (
  <span className="text-gray-700">{children}</span>
);
