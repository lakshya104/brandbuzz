"use client";

import Card from "./card";

const List = ({ rewards, activeRewardId }) => {
  return (
    <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
      {rewards.map((reward) => (
        <Card
          key={reward.id}
          id={reward.id}
          name={reward.name}
          image={reward.image}
          onClick={() => {}}
          disabled={false}
          active={reward.id === activeRewardId}
        />
      ))}
    </div>
  );
};

export default List;
