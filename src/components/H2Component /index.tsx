import React from "react";

interface H2Props {
  text: string;
}

export const H2Component: React.FC<H2Props> = ({ text }) => <h2>{text}</h2>;
