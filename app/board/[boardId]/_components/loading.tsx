
import { Loader } from "lucide-react";
import { InfoSkeleton } from "./info";
import { ParticipantsSkeleton } from "./participants";
import { ToolbarSkeleton } from "./toolbar";

export const Loading = () => {
  return (
    <main className="h-screen w-full relative bg-neutral-100 touch-none flex items-center justify-center">
      <Loader className=" w-6 items-center my-auto h-screen flex justify-center text-muted-foreground animate-spin" />
      <InfoSkeleton />
      <ParticipantsSkeleton></ParticipantsSkeleton>
      <ToolbarSkeleton />
    </main>
  );
};
