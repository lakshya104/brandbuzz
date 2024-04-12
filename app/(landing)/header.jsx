import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
import { auth, signOut } from "@/auth";

export const Header = async () => {
  const session = await auth();
  return (
    <header className="h-20 w-full border-b-2 border-slate-200 px-4">
      <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/logo.svg" priority height={70} width={70} alt="logo" />
          <h1 className="text-2xl font-extrabold text-sky-600 tracking-wide">
            Buzz
          </h1>
        </div>
        {!session ? (
          <LoginButton mode="modal" asChild>
            <Button size="lg" variant="ghost">
              Login
            </Button>
          </LoginButton>
        ) : (
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <Button
              variant="dangerOutline"
              className=" bg-slate-100"
              type="submit"
            >
              Sign Out
            </Button>
          </form>
        )}
      </div>
    </header>
  );
};
