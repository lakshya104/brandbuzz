import { ProgressBarLink } from "./progress-bar";
import { ArrowBigRightDashIcon } from "lucide-react";
import { auth } from "@/auth";

const UserCard = async () => {
  const session = await auth();

  return (
    <div className="flex justify-between items-center space-x-4 shadow-2xl py-6 px-8">
      <div className="space-y-1">
        <h4 className="text-sm text-sky-700 font-semibold">Welcome to Buzz</h4>
        <p className="text-sm">
          Name: <span className="font-semibold">{session.user.name}</span>
        </p>
        <p className="text-sm">
          Email: <span className="font-semibold">{session.user.email}</span>
        </p>
        <div className="flex items-center py-2">
          <ProgressBarLink href={"/leaderboard"}>
            <span className="text-xs flex justify-center items-center transition font-medium  hover:text-sky-700 hover:underline">
              Click here to check Your Points{" "}
              <span>
                <ArrowBigRightDashIcon />
              </span>
            </span>
          </ProgressBarLink>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
