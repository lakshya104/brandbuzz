import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import Questions from "./questions";
import { pointDecrease, pointIncrease } from "@/actions/redeem";

const Main = async ({ email, name, ques, id }) => {
  const pointIncrement = async () => {
    "use server"
     pointIncrease();
  };

  const pointDecrement = async () => {
    "use server"
    await pointDecrease();
  };

  return (
    <>
      <FeedWrapper>
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-xl mb-8 font-bold text-sky-800">Quiz</h1>
          <div className="lg:hidden flex flex-col justify-center items-center space-y-5 mb-5">
            <div className="flex justify-between items-center space-x-4 shadow-2xl py-6 px-8">
              <div className="space-y-1">
                <h4 className="text-sm text-sky-700 font-semibold">
                  Welcome to Buzz
                </h4>
                <p className="text-sm">
                  Name: <span className="font-semibold">{name}</span>
                </p>
                <p className="text-sm">
                  Email: <span className="font-semibold">{email}</span>
                </p>
                <div className="flex items-center py-2"></div>
              </div>
            </div>
          </div>
          <div className="flex items-start flex-col justify-start">
            <Questions
              ques={ques}
              inc={pointIncrement}
              dec={pointDecrement}
              id={id}
            />
          </div>
        </div>
      </FeedWrapper>
      <StickyWrapper>
        <div className="flex justify-between items-center space-x-4 shadow-2xl py-6 px-8 mr-6">
          <div className="space-y-1">
            <h4 className="text-sm text-sky-700 font-semibold">
              Welcome to Buzz
            </h4>
            <p className="text-sm">
              Name: <span className="font-semibold">{name}</span>
            </p>
            <p className="text-sm">
              Email: <span className="font-semibold">{email}</span>
            </p>
            <div className="flex items-center py-2"></div>
          </div>
        </div>
      </StickyWrapper>
    </>
  );
};

export default Main;
