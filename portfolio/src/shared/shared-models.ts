import React from "react";

export interface ButtonI {
  content: string;
  backgroundColor?: string;
  width?: string;
  color?: string;
  disabled?: boolean;
  buttonClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
