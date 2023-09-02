import React from "react";

interface H1Props {
  text: string;
}

export const H1Component: React.FC<H1Props> = ({ text }) => <h1>{text}</h1>;
