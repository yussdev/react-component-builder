import React from "react";
import { useModal } from "@/context/modalContext";

interface ButtonProps {
  text: string;
  triggerModal: boolean;
}
export const ButtonComponent: React.FC<ButtonProps> = ({
  text,
  triggerModal,
}) => {
  const { openModal } = useModal();
  return <button onClick={() => triggerModal && openModal()}>{text}</button>;
};
