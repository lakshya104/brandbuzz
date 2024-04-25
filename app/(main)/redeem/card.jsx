import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Image from "next/image";

const Card = ({ id, name, image, onClick, disabled, active, description }) => {
  return (
    <div
      onClick={() => onClick(id)}
      className={cn(
        "flex flex-col justify-between items-center h-full border-2 rounded-xl border-b-4 hover:bg-black/5 cursor-pointer active:border-b-2 p-3 pb-6 min-h-[290px] min-w-[170px]",
        disabled && "pointer-events-none opacity-50",
        active && "bg-sky-400/5 border-sky-700 border-4"
      )}
    >
      <div
        className={cn(
          "min-h-[24px] w-full flex items-start",
          active ? "justify-end" : "justify-center"
        )}
      >
        {active ? (
          <>
            <h2 className="mr-2 text-center text-sm lg:text-base text-neutral-700 font-bold">{name}</h2>
            <div className="rounded-md bg-sky-800 flex items-center justify-center p-1">
              <Check className="text-white stroke-[4] h-3 w-3" />
            </div>
          </>
        ) : (
          <h2 className="font-bold text-center text-sm lg:text-base text-neutral-700">{name}</h2>
        )}
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
    </div>
  );
};

export default Card;
