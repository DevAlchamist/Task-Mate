"use client";

import { RenameModal } from "@/components/Modals/rename-modal";
import { useEffect, useState } from "react";

export const ModalProvide = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return <RenameModal />;
};
