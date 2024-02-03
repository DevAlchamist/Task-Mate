"use client ";
import Image from "next/image";
import React from "react";
import empty from "@/images/note.jpg";
import { Button } from "@/components/ui/button";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";
import { UseApiMutation } from "@/hooks/use-api-mutation";
import { toast } from "sonner";

const EmptyBoard = () => {
  const { organization } = useOrganization();
  const { mutate, pending } = UseApiMutation(api.board.create);

  const onClick = () => {
    if (!organization) return;
    mutate({
      orgId: organization.id,
      title: "Untitled",
    }).then((id) => {
      toast.success("Task Board Created"); //this have to redirect user to /taskboard/{id}
    }).catch(()=>toast.error("Failed to Create Task Board"))
  };
  return (
    <div className="flex flex-col items-center">
      <Image src={empty} alt="Empty" height={350} width={350} />
      <h1 className="text-2xl font-semibold mt-5">Got no Tasks</h1>
      <p className="text-muted-foreground text-sm mt-2">
        Create A Task and Improvise Your Day!!
      </p>
      <div className="mt-5">
        <Button disabled={pending} onClick={onClick} size="lg">
          Create Board
        </Button>
      </div>
    </div>
  );
};

export default EmptyBoard;
