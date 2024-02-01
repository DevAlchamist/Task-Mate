import Image from "next/image";
import React from "react";
import empty from "@/images/lone.jpg";

const EmptyFav = () => {
  return (
    <div className=" h-full justify-center flex flex-col items-center">
      <Image src={empty} alt="Empty" height={600} width={600} />
      <h1 className="text-2xl font-semibold mt-5">No Favorites</h1>
      <p className="text-muted-foreground text-sm mt-2">
        You must be a lone Wolf
      </p>
    </div>
  );
};

export default EmptyFav;
