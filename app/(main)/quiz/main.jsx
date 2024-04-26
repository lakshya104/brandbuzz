"use client";

import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { getUserPoints, pointDecrease, pointIncrease } from "@/actions/redeem";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const Main = ({ email, name }) => {
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
            <h4 className="font-medium text-sky-900">
              Welcome to Buzz {name}! <br />
              {!points ? (
                <Skeleton className="h-[24px] bg-slate-200 rounded-none w-[200px]" />
              ) : (
                <p>Your Total Points are {points}</p>
              )}
            </h4>
          </div>
          <div className="flex items-center justify-center space-x-8">
            <Button variant="danger" onClick={pointDecrement}>
              Decrease Points
            </Button>
            <Button variant="super" onClick={pointIncrement}>
              Increase Points
            </Button>
          </div>
        </div>
      </FeedWrapper>
      <StickyWrapper>
        <h4 className="font-medium text-sky-900">
          Welcome to Buzz {name}! <br />
          {!points ? (
            <Skeleton className="h-[24px] bg-slate-200 rounded-none w-[200px]" />
          ) : (
            <p>Your Total Points are {points}</p>
          )}
        </h4>
      </StickyWrapper>
    </>
  );
};

export default Main;
