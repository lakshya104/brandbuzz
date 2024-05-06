import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { auth, signOut } from "@/auth";
import { Button } from "./ui/button";
import { ProgressBarLink } from "./progress-bar";
import { ArrowBigRightDashIcon } from "lucide-react";

const ProfileDropdown = async () => {
  const session = await auth();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-[44px] rounded-full h-[44px] flex justify-center items-center">
        <Image
          src={"/profile.svg"}
          alt="Profile"
          className="w-12"
          width={100}
          height={100}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <p className="text-sm">
            Name: <span className="font-semibold">{session.user.name}</span>
          </p>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <p className="text-sm">
            Email: <span className="font-semibold">{session.user.email}</span>
          </p>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ProgressBarLink href={"/leaderboard"}>
            <span className="text-xs flex justify-center items-center underline lg:no-underline transition font-medium  lg:hover:text-sky-700 lg:hover:underline">
              Click here to check Your Points{" "}
              <span>
                <ArrowBigRightDashIcon />
              </span>
            </span>
          </ProgressBarLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <form
            className="w-full"
            action={async () => {
              "use server";
              await signOut({
                redirectTo:'/'
              });
            }}
          >
            <Button
              variant="dangerOutline"
              className="w-full bg-slate-100"
              type="submit"
            >
              Sign Out
            </Button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdown;
