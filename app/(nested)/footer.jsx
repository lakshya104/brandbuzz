import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="hidden lg:block lg:h-20 w-full border-t-2 border-slate-200 p-5">
      <div className="max-w-screen-lg mx-auto lg:flex-row flex-col flex items-center justify-evenly h-full">
        <Button size="lg" variant="ghost" className="w-full">
          <Image 
            src="/watch.svg" 
            alt="watch" 
            height={32} 
            width={32}
            className="mr-4 rounded-md"
          />
          Watch Content
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image 
            src="/quests.svg" 
            alt="quests" 
            height={40} 
            width={40}
            className="mr-4 rounded-md"
          />
          Answer Questions
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image 
            src="/win.svg" 
            alt="win" 
            height={32} 
            width={32}
            className="mr-4 rounded-md"
          />
          Earn Points
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image 
            src="/finish.svg" 
            alt="finish" 
            height={40} 
            width={40}
            className="mr-4 rounded-md"
          />
          Redeem for exciting  rewards!
        </Button>
      </div>
    </footer>
  );
};