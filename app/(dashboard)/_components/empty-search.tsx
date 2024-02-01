import Image from "next/image";
import React from "react";
import empty from "@/images/search.jpg";

const EmptySearch = () => {
  return (
    <div className="h-full justify-center flex flex-col items-center">
      <Image src={empty} alt="Empty" height={350} width={350} />
      <h1 className="text-2xl font-semibold mt-5">No Results Found !!</h1>
      <p className="text-muted-foreground text-sm mt-2">
        Try Searching For Something Else
      </p>
    </div>
  );
};

export default EmptySearch;
