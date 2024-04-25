import { db } from "@/lib/db";

export const getUserByEmail = async (email) => {
  try {
    const user = db.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  } catch {
    null;
  }
};

export const getUserById = async (id) => {
  try {
    const user = db.user.findUnique({
      where: {
        id,
      },
    });
    return user;
  } catch {
    null;
  }
};

// export const getUserPoints = async (email) => {
//   try {
//     const user = await db.user.findUnique({
//       where: {
//         email,
//       },
//     });
//     if (user) {
//       return user.points;
//     } else {
//       return null;
//     }
//   } catch (error) {
//     console.error('Error fetching user points:', error);
//   }
// };
