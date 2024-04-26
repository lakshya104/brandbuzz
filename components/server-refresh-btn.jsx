"use client";
import { RefreshCcw, RefreshCcwDotIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useToast } from "./ui/use-toast";

const RefreshBtn = () => {
  const { toast } = useToast()
  const onClick = () => {
    router.refresh();
    toast({
      title: "Table Refreshed ",
      description: "Leaderboard Table refreshed successfully!",
    })
  };
  const router = useRouter();
  return (
    <Button variant="default" className="p-3 font-semibold text-xs" onClick={onClick}>
     Refresh <RefreshCcw className="ml-2 text-sky-700 h-4 w-4"/>
    </Button>
  );
};

export default RefreshBtn;
