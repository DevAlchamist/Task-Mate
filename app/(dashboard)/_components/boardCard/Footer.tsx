import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import React from "react";

interface FooterProps {
  title: string;
  authorLabel: string;
  authorName: string;
  createdAtLabel: string;
  onClick: () => void;
  isFavorite: boolean;
  disabled: boolean;
}

export const Footer = ({
  title,
  authorLabel,
  createdAtLabel,
  disabled,
  isFavorite,
  onClick,
}: FooterProps) => {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    event.preventDefault();
    onClick();
  };
  return (
    <div className="relative bg-white p-3">
      <p className="text-[13px] truncate max-w-[calc(100%-20px)]">{title}</p>
      <p className="text-[11px] truncate text-muted-foreground transition-opacity group-hover:opacity-100 opacity-0">
        {authorLabel},{createdAtLabel}
      </p>
      <button
        onClick={handleClick}
        disabled={disabled}
        className={cn(
          "opacity-0 group-hover:opacity-100 transition absolute top-3 right-3 text-muted-foreground hover:text-cyan-600",
          disabled && "cursor-not-allowed opacity-75"
        )}
      >
        <Heart
          className={cn("h-4 w-4", isFavorite && "fill-red-600 text-red-600")}
        />
      </button>
    </div>
  );
};
