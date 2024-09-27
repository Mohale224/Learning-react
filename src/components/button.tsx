import React from "react";

interface Props {
  children: string;
  color?: "primary" | "ssecondary" | "danger";
  onClick: () => void;
}

const button = ({ children, onClick, color = "danger" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default button;
