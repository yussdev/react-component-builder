import React, { ButtonHTMLAttributes } from "react";
import { useModal } from "@/context/modalContext";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  triggerModal?: boolean;
}
export const ButtonComponent: React.FC<ButtonProps> = ({
  text,
  triggerModal,
  ...props
}) => {
  const { openModal } = useModal();
  return (
    <button {...props} onClick={triggerModal ? openModal : props.onClick}>
      {text}
    </button>
  );
};
