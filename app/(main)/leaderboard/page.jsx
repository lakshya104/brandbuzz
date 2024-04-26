import { getLeaderboard } from "@/actions/redeem";
import React from "react";
import PointsTable from "./points-table";
import RefreshBtn from "@/components/server-refresh-btn";

const Leaderboard = async () => {
  const pointBoard = await getLeaderboard();

  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      <div className="flex items-center justify-center space-x-4">
        <h1 className="text-xl font-bold text-sky-800">Leader Board</h1>
        <RefreshBtn />
      </div>
      <PointsTable pointBoard={pointBoard} />
    </div>
  );
};

export default Leaderboard;
