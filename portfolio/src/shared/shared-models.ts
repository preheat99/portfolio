import React from "react";

export interface ButtonI {
  content: string;
  backgroundColor?: string;
  width?: string;
  color?: string;
  disabled?: boolean;
  buttonClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface CardI {
  classes?: {};
  raised?: boolean;
  styles?: {};
  icon: React.ReactNode;
  heading: string;
  content: string;
}
