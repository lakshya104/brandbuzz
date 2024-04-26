"use client";
import { RefreshCcw, RefreshCcwDotIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const RefreshBtn = () => {
  const onClick = () => {
    router.refresh();
    toast("Table Refreshed", {
      description: "Leaderboard Table refreshed successfully!",
    });
  };
  const router = useRouter();
  return (
    <Button variant="superOutline" onClick={onClick}>
      <RefreshCcw />
    </Button>
  );
};

export default RefreshBtn;
