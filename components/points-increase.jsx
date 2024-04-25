'use client'
import { pointIncrease } from "@/actions/redeem";
import { Button } from "./ui/button";

const PointsInc = () => {
  return (
    <Button variant="super" onClick={() => pointIncrease()}>
      Increase Points
    </Button>
  );
};

export default PointsInc;
