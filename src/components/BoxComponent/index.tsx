import React, { CSSProperties } from "react";

interface BoxComponentProps extends CSSProperties {
  children: React.ReactNode;
}

export const BoxComponent: React.FC<BoxComponentProps> = ({
  children,
  ...cssProperties
}) => (
  <div className="box-component" style={cssProperties}>
    {children}
  </div>
);
