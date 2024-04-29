"use client"
import { redeemRewardForUser } from "@/actions/redeem";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const Card = ({ id, name, image, disabled, description }) => {
  const [active, setActive] = useState(false);
  return (
    <div
      className={cn(
        "flex flex-col justify-between items-center h-full border-2 rounded-xl border-b-4 hover:bg-sky-400/5 cursor-pointer active:border-b-2 p-3 pb-6 min-h-[300px] min-w-[170px]",
        disabled && "pointer-events-none opacity-50",
        active && "bg-sky-400/5 border-sky-700"
      )}
    >
      <div className="min-h-[24px] w-full flex items-start justify-center">
        <h2 className="font-bold text-center text-sm lg:text-base text-neutral-700">
          {name}
        </h2>
      </div>

      <Image
        src={image}
        alt={name}
        height={100}
        width={100}
        className="rounded-lg drop-shadow-md border object-cover"
      />
      <p className="text-neutral-700 text-center text-xs lg:font-semibold mt-3">
        {description}
      </p>
      <Button
        variant="sidebarOutline"
        className="w-32"
        onClick={() => setActive((prev) => !prev)}
        disabled={disabled}
      >
        {" "}
        {active ? <Check className="stroke-[3] h-6 w-6" /> : "Select"}
      </Button>
      {/* <Button onClick={() => redeemRewardForUser(id)}>Select</Button> */}
    </div>
  );
};

export default Card;
