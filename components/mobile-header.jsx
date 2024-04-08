import { MobileSidebar } from "./mobile-sidebar";
import Image from "next/image";
import Link from "next/link";

export const MobileHeader = () => {
  return (
    <nav className="lg:hidden px-6 h-[50px] flex items-center fixed top-0 w-full z-50 border-b-sky-700 border">
      <MobileSidebar />
      <Link href="/">
        <div className="pt-8 pl-2 pb-7 flex items-center">
          <Image src="/logo.svg" height={50} width={50} alt="logo" />
          <h1 className="text-2xl font-extrabold text-sky-600 tracking-wide">
            Buzz
          </h1>
        </div>
      </Link>
    </nav>
  );
};
