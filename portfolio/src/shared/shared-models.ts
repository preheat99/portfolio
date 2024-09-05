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
  scrollId: string | number;
}

export interface KpiI {
  icon: React.ReactNode;
  label: string;
  scrollId: string | number;
}

export interface HeaderLinkI {
  label: string;
  id: string;
}
