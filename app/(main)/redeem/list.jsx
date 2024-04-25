"use client";

import Card from "./card";
import { pointIncrease } from "@/actions/redeem";

const List = ({ rewards, userEmail }) => {
  return (
    <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
      {rewards.map((reward) => (
        <Card
          key={reward.id}
          id={reward.id}
          name={reward.name}
          image={reward.image}
          description={reward.description}
          disabled={false}
          userEmail={userEmail}
        />
      ))}
    </div>
  );
};

export default List;
