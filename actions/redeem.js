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

export const getUserId = async () => {
  const session = await auth();
  const userEmail = session.user.email;
  const user = await getUserByEmail(userEmail);
  return user.id;
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
//     // Create the first question with answers
//     await db.question.create({
//       data: {
//         text: "What is the capital of Japan?",
//         answers: {
//           createMany: {
//             data: [
//               { text: "Beijing", isCorrect: false },
//               { text: "Seoul", isCorrect: false },
//               { text: "Tokyo", isCorrect: true },
//               { text: "Bangkok", isCorrect: false },
//             ],
//           },
//         },
//       },
//       include: {
//         answers: true,
//       },
//     });

//     // Create the second question with answers
//     await db.question.create({
//       data: {
//         text: "Which gas is most abundant in Earth's atmosphere?",
//         answers: {
//           createMany: {
//             data: [
//               { text: "Oxygen", isCorrect: false },
//               { text: "Carbon Dioxide", isCorrect: false },
//               { text: "Nitrogen", isCorrect: true },
//               { text: "Methane", isCorrect: false },
//             ],
//           },
//         },
//       },
//       include: {
//         answers: true,
//       },
//     });

//     // Create the third question with answers
//     await db.question.create({
//       data: {
//         text: "Who developed the theory of relativity?",
//         answers: {
//           createMany: {
//             data: [
//               { text: "Isaac Newton", isCorrect: false },
//               { text: "Albert Einstein", isCorrect: true },
//               { text: "Stephen Hawking", isCorrect: false },
//               { text: "Galileo Galilei", isCorrect: false },
//             ],
//           },
//         },
//       },
//       include: {
//         answers: true,
//       },
//     });

//     // Create the fourth question with answers
//     await db.question.create({
//       data: {
//         text: "What is the chemical symbol for gold?",
//         answers: {
//           createMany: {
//             data: [
//               { text: "Au", isCorrect: true },
//               { text: "Ag", isCorrect: false },
//               { text: "Fe", isCorrect: false },
//               { text: "Cu", isCorrect: false },
//             ],
//           },
//         },
//       },
//       include: {
//         answers: true,
//       },
//     });

//     // Create the fifth question with answers
//     await db.question.create({
//       data: {
//         text: "Which animal is known as the 'King of the Jungle'?",
//         answers: {
//           createMany: {
//             data: [
//               { text: "Lion", isCorrect: true },
//               { text: "Tiger", isCorrect: false },
//               { text: "Leopard", isCorrect: false },
//               { text: "Cheetah", isCorrect: false },
//             ],
//           },
//         },
//       },
//       include: {
//         answers: true,
//       },
//     });

//     console.log("Questions and answers created successfully.");
//   } catch (error) {
//     console.error("Error creating questions:", error);
//   }
// };



export const getAllQuestionsWithAnswers = async () => {
  try {
    const questionsWithAnswers = await db.question.findMany({
      include: {
        answers: true,
      },
    });

    console.log("Questions with answers:", questionsWithAnswers);

    return questionsWithAnswers;
  } catch (error) {
    console.error("Error fetching questions with answers:", error);
    throw error;
  }
};

export const createUserAnswer = async (userId, questionId) => {
  try {
    const userAnswer = await db.userAnswer.create({
      data: {
        userId: userId,
        questionId: questionId,
      },
    });
    return userAnswer;
  } catch (error) {
    console.error("Error creating user answer:", error);
    throw error;
  }
};

export const hasUserAnsweredQuestion = async (userId, questionId) => {
  try {
    const userAnswer = await db.userAnswer.findUnique({
      where: {
        unique_user_question_answer: {
          userId: userId,
          questionId: questionId,
        },
      },
    });

    return !!userAnswer;
  } catch (error) {
    console.error("Error checking user answer:", error);
    throw error;
  }
};
