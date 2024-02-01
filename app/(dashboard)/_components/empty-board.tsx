import Image from "next/image";
import React from "react";
import empty from "@/images/note.jpg";
import { Button } from "@/components/ui/button";

const EmptyBoard = () => {
  return (
    <div className="flex flex-col items-center">
      <Image src={empty} alt="Empty" height={350} width={350} />
      <h1 className="text-2xl font-semibold mt-5">Got no Tasks</h1>
      <p className="text-muted-foreground text-sm mt-2">
        Create A Task and Improvise Your Day!!
      </p>
      <div className="mt-5"><Button size="lg">Create Board</Button></div>
    </div>
  );
};

export default EmptyBoard;
