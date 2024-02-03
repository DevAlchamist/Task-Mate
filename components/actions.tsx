"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { api } from "@/convex/_generated/api";
import { UseApiMutation } from "@/hooks/use-api-mutation";
import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import { Link2, Trash } from "lucide-react";
import { toast } from "sonner";
import { ConfirmModal } from "./confirm-modal";
import { Button } from "./ui/button";

interface ActionProps {
  children: React.ReactNode;
  side?: DropdownMenuContentProps["side"];
  sideOffset?: DropdownMenuContentProps["sideOffset"];
  id: string;
  title: string;
}
export const Actions = ({
  children,
  id,
  sideOffset,
  title,
  side,
}: ActionProps) => {
  const { mutate, pending } = UseApiMutation(api.board.remove);
  const onCopyLink = () => {
    navigator.clipboard
      .writeText(`${window.location.origin}/board/${id}`)
      .then(() => toast.success("Link Copied"))
      .catch(() => toast.error("Can't Copy Link"));
  };
  const onDelete = () => {
    mutate({ id })
      .then(() => toast.success("Successfully Deleted"))
      .catch(() => {
        toast.error("Failed To Delete");
      });
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        side={side}
        sideOffset={sideOffset}
        onClick={(e) => e.stopPropagation()}
        className="w-60"
      >
        <DropdownMenuItem onClick={onCopyLink} className="cursor-pointer p-3">
          <Link2 className="h-4 w-4 mr-2" />
          Copy Board Link
        </DropdownMenuItem>
        <ConfirmModal
          header="Delete Task?"
          description="It will delete all Content of this Task"
          disabled={pending}
          onConfirm={onDelete}
        >
          <Button
            variant="ghost"
             className="cursor-pointer p-3 text-sm w-full justify-start font-normal"
          >
            <Trash className="h-4 w-4 mr-2" />
            Remove
          </Button>
        </ConfirmModal>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
