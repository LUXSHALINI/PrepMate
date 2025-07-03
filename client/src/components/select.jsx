import React, { useState } from "react";

export const Select = ({ children }) => (
  <div className="relative inline-block w-full">{children}</div>
);

export const SelectTrigger = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="w-full text-left px-4 py-2 border rounded bg-white shadow-sm focus:outline-none"
  >
    {children}
  </button>
);

export const SelectValue = ({ value }) => (
  <span>{value || "Select an option"}</span>
);

export const SelectContent = ({ children, isOpen }) => {
  if (!isOpen) return null;
  return (
    <div className="absolute mt-1 w-full bg-white border rounded shadow-lg z-10">
      {children}
    </div>
  );
};

export const SelectItem = ({ children, onClick }) => (
  <div
    onClick={onClick}
    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
  >
    {children}
  </div>
);
