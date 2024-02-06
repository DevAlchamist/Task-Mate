import { Camera } from "@/types/canvas";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const COLORS = [
  "#DC2626",
  "#d97706",
  "#758BFD",
  "#059669",
  "#7C3AED",
  "#DB2777",
  "#ff006e",
  "#415a77",
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function connectionIdToColors(connectionId: number): string {
  return COLORS[connectionId % COLORS.length];
}

export function pointerEventToCanvasPoint(
  e:React.PointerEvent,
  camera:Camera
){
  return{
    x:Math.round(e.clientX)-camera.x,
    y:Math.round(e.clientY)-camera.y
  }
}