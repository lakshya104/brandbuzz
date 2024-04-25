import { getUserPoints } from "@/actions/redeem";
import { auth } from "@/auth";
import { FeedWrapper } from "@/components/feed-wrapper";
import PointsInc from "@/components/points-increase";
import { StickyWrapper } from "@/components/sticky-wrapper";

const Quiz = async () => {
  const session = await auth();
  const points = await getUserPoints(session.user.email);
  return (
    <div className="flex gap-[48px]">
      <FeedWrapper>
        <div className="flex justify-center items-center flex-col">
        <h1 className="text-xl mb-8 font-bold text-sky-800">Quiz</h1>
        <PointsInc />
        </div>
      </FeedWrapper>
      <StickyWrapper>
        <h4 className="font-medium text-sky-900">
          Welcome to Buzz {session.user.name}! <br />
          Your Total Points are {points}
        </h4>
      </StickyWrapper>
    </div>
  );
};

export default Quiz;
