import React from "react";

export const Table = ({ children }) => (
  <table className="min-w-full border border-gray-300 rounded-md">{children}</table>
);

export const TableHead = ({ children }) => (
  <thead className="bg-gray-100">{children}</thead>
);

export const TableHeader = ({ children }) => (
  <th className="px-4 py-2 text-left text-sm font-bold text-gray-700">{children}</th>
);

export const TableBody = ({ children }) => (
  <tbody>{children}</tbody>
);

export const TableRow = ({ children }) => (
  <tr className="border-b">{children}</tr>
);

export const TableCell = ({ children }) => (
  <td className="px-4 py-2 text-sm text-gray-600">{children}</td>
);
