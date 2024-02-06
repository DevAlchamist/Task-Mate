"use client";

import {
  useCanRedo,
  useCanUndo,
  useHistory,
  useMutation,
} from "@/liveblocks.config";
import { Info } from "./info";
import { Participants } from "./participants";
import { Toolbar } from "./toolbar";
import React, { useCallback, useState } from "react";
import { Camera, CanvasMode, CanvasState } from "@/types/canvas";
import { CursorPresence } from "./cursor-pressence";
import { pointerEventToCanvasPoint } from "@/lib/utils";

const MAX_LAYERS = 500;

interface CanvasProps {
  boardId: string;
}

export const Canvas = ({ boardId }: CanvasProps) => {
  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None,
  });

  const [camera, setCamera] = useState<Camera>({ x: 0, y: 0 });

  const History = useHistory();
  const CanRedo = useCanRedo();
  const CanUndo = useCanUndo();

  const onWheel = useCallback((e: React.WheelEvent) => {
    setCamera((camera) => ({
      x: camera.x - e.deltaX,
      y: camera.y - e.deltaY,
    }));
  }, []);

  const onPointerMove = useMutation(
    ({ setMyPresence }, e: React.PointerEvent) => {
      e.preventDefault();

      const current = pointerEventToCanvasPoint(e, camera);

      setMyPresence({ cursor: current });
    },
    []
  );

  const onPointerLeave = useMutation(({ setMyPresence }) => {
    setMyPresence({ cursor: null });
  }, []);
  return (
    <main className="h-screen w-full relative bg-neutral-100 touch-none">
      <Info boardId={boardId} />
      <Participants />
      <Toolbar
        canvasState={canvasState}
        setCanvasState={setCanvasState}
        canRedo={CanRedo}
        canUndo={CanUndo}
        redo={History.redo}
        undo={History.undo}
      />
      <svg
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        onWheel={onWheel}
        className="h-[100vh] w-[100vw]"
      >
        <g
          style={{
            transform: `translate(${camera.x}px,${camera.y}px)`,
          }}
        >
          <CursorPresence />
        </g>
      </svg>
    </main>
  );
};
