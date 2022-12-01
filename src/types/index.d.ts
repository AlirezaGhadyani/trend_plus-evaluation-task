import { ReactNode } from "react";

export type Children = ReactNode;

export type HubItem = {
  name: string;
  lat: number;
  long: number;
  is_regular: boolean;
  is_eco: boolean;
  is_large: boolean;
  is_cold: boolean;
  id: number;
};
