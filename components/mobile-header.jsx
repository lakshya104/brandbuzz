import { MobileSidebar } from "./mobile-sidebar";
import Image from "next/image";
import SignOutButton from "./auth/signout-button";
import { ProgressBarLink } from "./progress-bar";
import ProfileDropdown from "./profile-dropdown";

export const MobileHeader = () => {
  return (
    <nav className="lg:hidden px-6 h-[50px] flex items-center bg-white justify-between fixed top-0 w-full z-50 border-b-sky-700 border">
      <div className="flex items-center w-full">
        <MobileSidebar />
        <div className="pt-8 pl-2 pb-7 flex items-center">
          <Image src="/logo.svg" priority height={50} width={50} alt="logo" />
          <ProgressBarLink href="/">
            <h1 className="text-2xl font-extrabold text-sky-600 tracking-wide">
              Buzz
            </h1>
          </ProgressBarLink>
        </div>
      </div>
      <ProfileDropdown />
    </nav>
  );
};
