import { getRewards } from "@/data/queries";
import List from "./list";
import { auth } from "@/auth";
import { getUserPoints } from "@/actions/redeem";

const Redeem = async () => {
  const session = await auth();
  const rewards = await getRewards();
  const points = await getUserPoints(session.user.email);
  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      <h1 className="text-xl font-bold text-sky-800">Choose Your Reward</h1>
      <List rewards={rewards} userEmail={session.user.email} points={points} />
    </div>
  );
};

export default Redeem;
