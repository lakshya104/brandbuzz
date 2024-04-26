"use server";

import { auth } from "@/auth";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";

export const redeemRewardForUser = async (rewardId) => {
  const session = await auth();
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
      throw new Error("User not found");
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
    console.error("Error increasing points:", error);
    return null;
  }
};

export const pointDecrease = async () => {
  const session = await auth();
  const email = session.user.email;
  try {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const newPoints = Math.max(user.points - 1, 0);
    const updatedUser = await db.user.update({
      where: {
        email,
      },
      data: {
        points: newPoints,
      },
    });

    return updatedUser;
  } catch (error) {
    console.error("Error increasing points:", error);
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
    console.error("Error fetching user points:", error);
  }
};

export const getLeaderboard = async () => {
  try {
    const leaderboard = await db.user.findMany({
      orderBy: {
        points: "desc",
      },
      select: {
        id: true,
        email: true,
        name: true,
        points: true,
      },
    });
    return leaderboard;
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    throw error;
  }
};

// export const createQuestionWithAnswers = async () => {
//   try {
//     // Create the question
//     const question = await db.question.create({
//       data: {
//         text: "Which country is known as the Land of the Rising Sun?",
//         answers: {
//           createMany: {
//             data: [
//               { text: "Japan", isCorrect: true },
//               { text: "China", isCorrect: false },
//               { text: "Korea", isCorrect: false },
//               { text: "Vietnam", isCorrect: false },
//             ],
//           },
//         },
//       },
//       include: {
//         answers: true,
//       },
//     });

//     // Get the question ID
//     const questionId = question.id;

//     console.log("Question created with ID:", questionId);
//   } catch (error) {
//     console.error("Error creating question:", error);
//   }
// };

export const getAllQuestionsWithAnswers = async () => {
  try {
    // Fetch all questions with their answers
    const questionsWithAnswers = await db.question.findMany({
      include: {
        answers: true,
      },
    });

    console.log('Questions with answers:', questionsWithAnswers);
    
    return questionsWithAnswers;
  } catch (error) {
    console.error('Error fetching questions with answers:', error);
    throw error;
  }
};
