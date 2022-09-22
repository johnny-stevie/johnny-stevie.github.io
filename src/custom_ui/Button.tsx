import React from "react";
// interface IButtonProps {
//   className: string;
//   text: string;
// }
import "./Button.css";
export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className="button" {...props}></button>;
}

export function HoverableButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  return <button className="button hoverable-btn" {...props}></button>;
}
