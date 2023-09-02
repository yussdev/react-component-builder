import React from "react";
import { H1Component } from "@/components/H1Component";
import { H2Component } from "@/components/H2Component ";
import { ButtonComponent } from "@/components/ButtonComponent";
import { LinkComponent } from "@/components/LinkComponent";
import { ModalComponent } from "@/components/ModalComponent";
import { ParagraphComponent } from "@/components/ParagraphComponent";
import { BoxComponent } from "@/components/BoxComponent";
import { ListComponent } from "@/components/ListComponent";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const componentsMap: Record<string, React.FC<any>> = {
  H1Component,
  H2Component,
  ParagraphComponent,
  LinkComponent,
  ButtonComponent,
  ModalComponent,
  BoxComponent,
  ListComponent,
};

// JSON data structure
interface ComponentData {
  type: string;
  props?: Record<string, unknown>;
}

export interface JsonData {
  Content: ComponentData;
  Children?: Record<string, JsonData>;
}

export const renderComponents = (
  data: JsonData,
  key?: string
): React.ReactNode => {
  const { Content, Children } = data;
  const { props = {} } = Content;
  const ComponentType = componentsMap[Content.type];

  if (!Content) return null;

  return React.createElement(
    ComponentType,
    { key, ...props },
    Children
      ? Object.values(Children).map((child, idx) =>
          renderComponents(child, String(idx))
        )
      : null
  );
};
