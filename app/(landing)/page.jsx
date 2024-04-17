import Image from "next/image";
import { Button } from "@/components/ui/button";
import { auth } from "@/auth";
import { ProgressBarLink } from "@/components/progress-bar";

export default async function Home() {
  const session = await auth();
  return (
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
      <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
        <Image src="/hero2.svg" fill alt="Hero" />
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
          Watch, answer, and win with Buzz.
        </h1>
        <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
          {!session ? (
            <Button size="lg" variant="super" className="w-full">
              <ProgressBarLink href="/auth/register"> Get Started </ProgressBarLink>
            </Button>
          ) : (
            <Button size="lg" variant="primary" className="w-full" asChild>
              <ProgressBarLink href="/feed">Continue Winning</ProgressBarLink>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
