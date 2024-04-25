import { getRewards } from "@/data/queries";
import List from "./list";
import { auth } from "@/auth";

const Redeem = async () => {
  const session = await auth()
  const rewards = await getRewards();
  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      <h1 className="text-xl font-bold text-sky-800">Choose Your Reward</h1>
      <List 
      rewards={rewards}
      activeRewardId={1}
      userEmail={session.user.email}
      />
    </div>
  );
};

export default Redeem;
