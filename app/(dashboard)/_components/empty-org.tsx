import Image from "next/image";
import empty from "@/images/Empty1.jpg";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CreateOrganization } from "@clerk/nextjs";

const EmptyOrg = () => {
  return (
    <div className="h-full justify-center flex flex-col items-center">
      <Image src={empty} alt="Empty" height={350} width={350} />
      <h1 className="text-2xl font-semibold mt-5">Welcome To Task Mate</h1>
      <p className="text-muted-foreground text-sm mt-2">
        Create an Task Org. to get start with collaborative workflow
      </p>
      <div className="mt-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg" variant="ghost">
              Create Org.
            </Button>
          </DialogTrigger>
          <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
            <CreateOrganization />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default EmptyOrg;
