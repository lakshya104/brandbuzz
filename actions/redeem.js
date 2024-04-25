"use server";

import { auth } from "@/auth";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";

export const redeemRewardForUser = async (rewardId) => {
    const session = await auth()
    const userEmail = session.user.email;
    const user = await getUserByEmail(userEmail);
    try {
      const redeemedReward = await db.redeemedReward.create({
        data: {
          userId: user.id,
          rewardId: rewardId,
        },
      });
      console.log("RedeemedReward created:", redeemedReward);
      return redeemedReward;
    } catch (error) {
      console.error("Error creating RedeemedReward:", error);
      throw error;
    }
  };

  export const pointIncrease = async () => {
    const session = await auth();
    const email = session.user.email;
    try {
      const user = await db.user.findUnique({
        where: {
          email,
        },
      });
  
      if (!user) {
        throw new Error('User not found');
      }
      const updatedUser = await db.user.update({
        where: {
          email,
        },
        data: {
          points: user.points + 1, 
        },
      });
  
      return updatedUser;
    } catch (error) {
      console.error('Error increasing points:', error);
      return null;
    }
  };


  export const getUserPoints = async (email) => {
    try {
      const user = await db.user.findUnique({
        where: {
          email,
        },
      });
      if (user) {
        return user.points;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error fetching user points:', error);
    }
  };