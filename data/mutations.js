// import { auth } from "@/auth";
// import { db } from "@/lib/db";

// export const pointIncrease = async () => {
//   const session = await auth();
//   const email = session.user.email;
//   try {
//     const user = await db.user.findUnique({
//       where: {
//         email,
//       },
//     });

//     if (!user) {
//       throw new Error('User not found');
//     }
//     const updatedUser = await db.user.update({
//       where: {
//         email,
//       },
//       data: {
//         points: user.points + 1, 
//       },
//     });

//     return updatedUser;
//   } catch (error) {
//     console.error('Error increasing points:', error);
//     return null;
//   }
// };
