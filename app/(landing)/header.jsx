import Image from "next/image";
import { Loader } from "lucide-react";
// import {
//   ClerkLoaded,
//   ClerkLoading,
//   SignedIn,
//   SignedOut,
//   SignInButton,
//   UserButton,
// } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LoginButton } from "@/components/auth/login-button";

export const Header = () => {
  return (
    <header className="h-20 w-full border-b-2 border-slate-200 px-4">
      <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/logo.svg" priority height={70} width={70} alt="logo" />
          <h1 className="text-2xl font-extrabold text-sky-600 tracking-wide">
            Buzz
          </h1>
        </div>
        <LoginButton >
          <Button size="lg" variant="ghost">
            Login
          </Button>
        </LoginButton>
      </div>
    </header>
  );
};
