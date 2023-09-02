import React from "react";

interface ParagraphProps {
  text: string;
}

export const ParagraphComponent: React.FC<ParagraphProps> = ({ text }) => (
  <p>{text}</p>
);
