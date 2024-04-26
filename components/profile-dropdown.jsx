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
import { getUserPoints } from "@/actions/redeem";
import { Button } from "./ui/button";

const ProfileDropdown = async () => {
  const session = await auth();
  const points = await getUserPoints(session.user.email);
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
          <span className="text-xs text-muted-foreground">
            Your Total Points are: {points}
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <form className="w-full"
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <Button variant="dangerOutline" className="w-full bg-slate-100" type="submit">
              Sign Out
            </Button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdown;


