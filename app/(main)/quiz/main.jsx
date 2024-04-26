"use client";

import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { getUserPoints, pointDecrease, pointIncrease } from "@/actions/redeem";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const Main = ({ email, name }) => {
  const [points, setPoints] = useState("...");
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
          Your Total Points are {points}
        </h4>
      </StickyWrapper>
    </>
  );
};

export default Main;
