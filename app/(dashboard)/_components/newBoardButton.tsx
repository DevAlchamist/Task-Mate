"use client";

import { api } from "@/convex/_generated/api";
import { UseApiMutation } from "@/hooks/use-api-mutation";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface NewBoardButtonProps {
  orgId: string;
  disabled?: boolean;
}

export const NewBoardButton = ({ orgId, disabled }: NewBoardButtonProps) => {
  const router = useRouter();
  const { mutate, pending } = UseApiMutation(api.board.create);
  const onClick = () => {
    mutate({
      orgId,
      title: "Untitled",
    })
      .then((id) => {
        toast.success("Board Created");
        router.push(`/board/${id}`);
      })
      .catch(() => {
        toast.error("Failed to Create");
      });
  };
  return (
    <button
      disabled={pending || disabled}
      onClick={onClick}
      className={cn(
        "col-span-1 aspect-[100/127] bg-cyan-400 rounded-lg items-center justify-center py-6 flex flex-col hover:bg-cyan-600 ",
        (pending || disabled) &&
          "opacity-75 hover:bg-cyan-400 cursor-not-allowed"
      )}
    >
      <div />
      <Plus className="h-10 w-10 stroke-1 text-white" />
      <p className=" text-xs text-white font-light">New Board</p>
    </button>
  );
};
