import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Skeleton } from "./ui/skeleton";
import { auth } from "@/auth";
import { getUserPoints } from "@/actions/redeem";
import SignOutButton from "./auth/signout-button";
import { ProgressBarLink } from "./progress-bar";
import { ArrowBigRightDashIcon } from "lucide-react";

export async function ProfileHeader() {
  const session = await auth();
  const points = await getUserPoints(session.user.email);
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Avatar>
          <AvatarImage
            src="/profile.svg"
            className="shadow-2xl hover:scale-105 hover:cursor-pointer"
          />
          <AvatarFallback>
            <Skeleton className="w-12 h-12 bg-slate-500" />
          </AvatarFallback>
        </Avatar>
      </HoverCardTrigger>
      <HoverCardContent className="w-auto">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <h4 className="text-sm text-sky-700 font-semibold">
              Welcome to Buzz
            </h4>
            <p className="text-sm">
              Name: <span className="font-semibold">{session.user.name}</span>
            </p>
            <p className="text-sm">
              Email: <span className="font-semibold">{session.user.email}</span>
            </p>
            <div className="flex items-center py-2">
              <ProgressBarLink href={"/leaderboard"}>
                <span className="text-xs flex justify-center items-center transition font-semibold hover:text-sky-700 hover:underline">
                  Check Your Points{" "}
                  <span>
                    <ArrowBigRightDashIcon />
                  </span>
                </span>
              </ProgressBarLink>
            </div>

            <SignOutButton />
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
