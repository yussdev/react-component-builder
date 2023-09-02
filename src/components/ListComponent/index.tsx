import React from "react";

interface ListProps {
  li: Array<React.ReactNode>;
}

export const ListComponent: React.FC<ListProps> = ({ li = [] }) => (
  <ul>
    {li.map((item, idx) => (
      <li key={idx}>{item}</li>
    ))}
  </ul>
);
