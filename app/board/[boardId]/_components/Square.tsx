import { colorToCss } from "@/lib/utils";
import { SquareLayer } from "@/types/canvas";

interface SquareProps {
  id: string;
  layer: SquareLayer;
  onPointerDown: (e: React.PointerEvent, id: string) => void;
  selectionColor?: string;
}

export const Square = ({
  id,
  layer,
  onPointerDown,
  selectionColor,
}: SquareProps) => {
  const { x, y, width, height, fill } = layer;
  return (
    <rect
      onPointerDown={(e) => onPointerDown(e, id)}
      className="drop-shadow-md"
      style={{ transform: `translate(${x}px,${y}px)` }}
      x={0}
      y={0}
      width={width}
      height={height}
      strokeWidth={1}
      fill={fill ? colorToCss(fill) : "#cccc"}
      stroke={selectionColor || "transparent"}
    />
  );
};
