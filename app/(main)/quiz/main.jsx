"use client";

import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { getUserPoints, pointDecrease, pointIncrease } from "@/actions/redeem";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Questions from "./questions";

const Main = ({ email, name, ques, id }) => {
  const [points, setPoints] = useState("");
  const [refetch, setRefetch] = useState(false);

  const pointIncrement = () => {
    pointIncrease();
    setRefetch((prev) => !prev);
  };
  const pointDecrement = () => {
    pointDecrease();
    setRefetch((prev) => !prev);
  };
  useEffect(() => {
    setPoints(getUserPoints(email));
  }, [email, refetch]);
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
                <div className="flex items-center py-2">
                  {!points ? (
                    <Skeleton className="h-[20px] bg-slate-200 rounded-none w-[200px]" />
                  ) : (
                    <span className="text-xs text-muted-foreground">
                      {" "}
                      Your Total Points are <strong>{points}</strong>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start flex-col justify-start">
            <Questions ques={ques} inc={pointIncrement} dec={pointDecrement} id={id}/>
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
            <div className="flex items-center py-2">
              {!points ? (
                <Skeleton className="h-[24px] bg-slate-200 rounded-none w-[200px]" />
              ) : (
                <span className="text-xs text-muted-foreground">
                  {" "}
                  Your Total Points are <strong>{points}</strong>
                </span>
              )}
            </div>
          </div>
        </div>
      </StickyWrapper>
    </>
  );
};

export default Main;
