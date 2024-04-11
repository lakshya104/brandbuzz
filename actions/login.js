"use server";

import { LoginSchema } from "@/schemas";

export const login = async (values) => {
  console.log(values);
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Fields!" };
  }

  return { success: "Login Successful!" };
};
