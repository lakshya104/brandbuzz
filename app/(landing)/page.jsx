// import { Button } from "@/components/ui/button";

// export default function Home() {
//   return (
//     <div className="flex flex-col justify-center items-center h-full">
//       <Button variant="sidebar">sidebar</Button>
//       <Button variant="secondary">secondary</Button>
//       {/* <Button variant="locked">locked </Button>
//       <Button variant="default"> default</Button>
//       <Button variant="primary">primary </Button>
//       <Button variant="primaryOutline"> primaryOutline</Button>
//       <Button variant="secondaryOutline"> secondaryOutline</Button>
//       <Button variant="danger"> danger</Button>
//       <Button variant="dangerOutline">dangerOutline </Button>
//       <Button variant="super">super </Button>
//       <Button variant="superOutline"> superOutline</Button> */}
//       <Button variant="ghost"> ghost</Button>
//       <Button variant="sidebarOutline"> sidebarOutline</Button>

//     </div>
//   );
// }


import Image from "next/image";
import { Loader } from "lucide-react";
// import { 
//   ClerkLoaded, 
//   ClerkLoading, 
//   SignInButton, 
//   SignUpButton, 
//   SignedIn, 
//   SignedOut
// } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
      <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
        <Image src="/hero.svg" fill alt="Hero" />
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
          Earn, practice, and master with Buzz.
        </h1>
        <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
          {/* <ClerkLoading> */}
            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
          {/* </ClerkLoading> */}
          {/* <ClerkLoaded>
            <SignedOut>
              <SignUpButton
                mode="modal"
                afterSignInUrl="/learn"
                afterSignUpUrl="/learn"
              > */}
                <Button size="lg" variant="super" className="w-full">
                  Get Started
                </Button>
              {/* </SignUpButton>
              <SignInButton
                mode="modal"
                afterSignInUrl="/learn"
                afterSignUpUrl="/learn"
              >
                <Button size="lg" variant="primaryOutline" className="w-full">
                  I already have an account
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn> */}
              <Button size="lg" variant="primary" className="w-full" asChild>
                <Link href="/learn">
                  Continue Watching
                </Link>
              </Button>
            {/* </SignedIn>
          </ClerkLoaded> */}
        </div>
      </div>
    </div>
  )
}