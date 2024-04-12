import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { signOut } from "@/auth";
import { LogOutIcon } from "lucide-react";

const SignOutButton = ({ mode }) => {
  let logout;
  if (mode === "icon") {
    logout = <LogOutIcon className="text-red-700 h-7 w-7" />;
  } else {
    logout = (
      <Button variant="dangerOutline" className=" bg-slate-100" type="submit">
        Sign Out
      </Button>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{logout}</DialogTrigger>
      <DialogContent className="shadow-inner w-[380px] py-8 rounded-sm px-4 lg:px-12 z-50">
        <div className="flex items-center justify-center flex-col space-y-4">
          <h3 className="font-semibold">Are you sure you want to Sign out?</h3>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <Button
              variant="dangerOutline"
              className=" bg-slate-100 my-2 px-12 border-2 border-slate-500"
              type="submit"
            >
              Yes
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignOutButton;
