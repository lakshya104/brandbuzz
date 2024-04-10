import Link from "next/link";
import Image from "next/image";
// import { ClerkLoading, ClerkLoaded, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

import { cn } from "@/lib/utils";

import { SidebarItem } from "./sidebar-item";

export const Sidebar = ({ className }) => {
  return (
    <div
      className={cn(
        "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link href="/" className="hidden lg:block">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/logo.svg" height={80} width={60} alt="logo" />
          <h1 className="text-2xl font-extrabold text-sky-600 tracking-wide">
            Buzz
          </h1>
        </div>
      </Link>
      <div className="lg:hidden pt-8 pl-4 pb-7 flex items-center gap-x-3">
        <Image src="/logo.svg" height={80} width={60} alt="logo" />
        <h1 className="text-2xl font-extrabold text-sky-600 tracking-wide">
          Buzz
        </h1>
      </div>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem label="Feed" href="/feed" iconSrc="/feed.svg" />
        <SidebarItem label="Quiz" href="/quiz" iconSrc="/quiz.svg" />
        <SidebarItem
          label="Leaderboard"
          href="/leaderboard"
          iconSrc="/leaderboard.svg"
        />
        <SidebarItem label="Redeem" href="/redeem" iconSrc="/redeem.svg" />
        <SidebarItem label="Support" href="/support" iconSrc="/support.svg" />
        <SidebarItem label="T&C" href="/termsConditions" iconSrc="/terms.svg" />
      </div>
      <div className="p-4">
        {/* <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded> */}
      </div>
    </div>
  );
};
