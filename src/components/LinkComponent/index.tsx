import React from "react";
import { useModal } from "@/context/modalContext";

interface LinkProps {
  text: string;
  url: string;
  triggerModal?: boolean;
}

export const LinkComponent: React.FC<LinkProps> = ({
  text,
  triggerModal,
  url,
}) => {
  const { openModal } = useModal();
  return (
    <a href={url} onClick={() => triggerModal && openModal()}>
      {text}
    </a>
  );
};
