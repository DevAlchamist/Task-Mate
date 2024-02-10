export type Color = {
  r: number;
  g: number;
  b: number;
};

export type Camera = {
  x: number;
  y: number;
};

export enum LayerType {
  Square,
  Circle,
  Path,
  Text,
  Note,
}

export type Points = {
  x: number;
  y: number;
};

export type XYWH = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export enum Side {
  Top = 1,
  Bottom = 2,
  Left = 4,
  Right = 8,
}

export type SquareLayer = {
  type: LayerType.Square;
  x: number;
  y: number;
  height: number;
  width: number;
  fill: Color;
  Value?: string;
};
export type CircleLayer = {
  type: LayerType.Circle;
  x: number;
  y: number;
  height: number;
  width: number;
  fill: Color;
  Value?: string;
};
export type NoteLayer = {
  type: LayerType.Note;
  x: number;
  y: number;
  height: number;
  width: number;
  fill: Color;
  Value?: string;
};
export type TextLayer = {
  type: LayerType.Text;
  x: number;
  y: number;
  height: number;
  width: number;
  fill: Color;
  Value?: string;
};
export type PathLayer = {
  type: LayerType.Path;
  x: number;
  y: number;
  height: number;
  width: number;
  fill: Color;
  points: number[][];
  Value?: string;
};

export type CanvasState =
  | {
      mode: CanvasMode.None;
    }
  | {
      mode: CanvasMode.SelectionNet;
      origin: Points;
      current?: Points;
    }
  | {
      mode: CanvasMode.Inserting;
      layerType:
        | LayerType.Circle
        | LayerType.Note
        | LayerType.Square
        | LayerType.Text;
    }
  | {
      mode: CanvasMode.Pencil;
    }
  | {
      mode: CanvasMode.Resizing;
      initialBounds: XYWH;
      corner: Side;
    }
  | {
      mode: CanvasMode.Pressing;
      origin: Points;
    }
  | {
      mode: CanvasMode.Translating;
      current: Points;
    };

export enum CanvasMode {
  None,
  Pressing,
  SelectionNet,
  Translating,
  Inserting,
  Resizing,
  Pencil,
}

export type Layer =
  | SquareLayer
  | CircleLayer
  | PathLayer
  | TextLayer
  | NoteLayer;
