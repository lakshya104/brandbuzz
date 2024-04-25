import { cn } from "@/lib/utils"
import { Check } from "lucide-react";

const Card = ({ id, name, image, onClick, disabled, active }) => {
  return (
    <div
      onClick={() => onClick(id)}
      className=
      {cn(
        "flex justify-between h-full border-2 rounded-xl border-b-4 hover:bg-black/5 cursor-pointer active:border-b-2 p-3 pb-6 min-h-[217px] min-w-[150px]"
        , disabled && "pointer-events-none opacity-50"
      )}
    >
      <div className="min-h-[24px] w-full flex items-center justify-end">
        {active && (
          <div className="rounded-md bg-sky-800 flex items-center justify-center p-1.5">
            <Check className="text-white stroke-[4] h-4 w-4"/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
