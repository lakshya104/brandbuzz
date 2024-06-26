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

export const createQuestionWithAnswers = async (id, question, a, b, c, d) => {
  try {
    await db.question.create({
      data: {
        text: question,
        feedItemId: id,
        answers: {
          createMany: {
            data: [
              { text: a.text, isCorrect: a.isCorrect },
              { text: b.text, isCorrect: b.isCorrect },
              { text: c.text, isCorrect: c.isCorrect },
              { text: d.text, isCorrect: d.isCorrect },
            ],
          },
        },
      },
      include: {
        answers: true,
      },
    });

    console.log("Questions and answers created successfully.");
  } catch (error) {
    console.error("Error creating questions:", error);
  }
};

export const getAllQuestionsWithAnswers = async () => {
  try {
    const questionsWithAnswers = await db.question.findMany({
      include: {
        answers: true,
      },
    });

    // console.log("Questions with answers:", questionsWithAnswers);

    return questionsWithAnswers;
  } catch (error) {
    console.error("Error fetching questions with answers:", error);
    throw error;
  }
};

export const getAnswersByQuestionId = async (questionId) => {
  try {
    const answers = await db.answer.findMany({
      where: {
        questionId: questionId,
      },
    });

    return answers;
  } catch (error) {
    console.error("Error fetching answers by question ID:", error);
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

export const getAllFeedItems = async () => {
  try {
    const feedItems = await db.feedItem.findMany();
    return feedItems;
  } catch (error) {
    console.error("Error fetching feed items:", error);
    throw error;
  }
};

export const fetchFeedItemById = async (itemId) => {
  try {
    const feedItem = await db.feedItem.findUnique({
      where: {
        id: itemId,
      },
      include: {
        questions: true,
      },
    });

    return feedItem;
  } catch (error) {
    console.error("Error fetching feed item:", error);
    throw error;
  }
};
