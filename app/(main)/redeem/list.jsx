"use client";
import Card from "./card";
import { useEffect, useState } from "react";
import { getUserPoints } from "@/actions/redeem";

const List = ({ rewards, userEmail, point }) => {
  const [points, setPoints] = useState(point);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const fetchPoints = async () => {
      const userPoints = await getUserPoints(userEmail);
      setPoints(userPoints);
      if (points > 50) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    };
    fetchPoints();
  }, [userEmail, points]);

  return (
    <>
      <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
        {rewards.map((reward) => (
          <Card
            key={reward.id}
            id={reward.id}
            name={reward.name}
            image={reward.image}
            description={reward.description}
            disabled={disabled}
            userEmail={userEmail}
            points={points}
          />
        ))}
      </div>
      {disabled && (
        <p className="text-muted-foreground text-sm mt-5 ml-2 text-red-500">
          * Your points must be greater than 25 for redeeming any of these
          Items.
        </p>
      )}
    </>
  );
};

export default List;
