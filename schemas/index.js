import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Password is required",
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Minimum password length must be 6 characters",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});

export const QuestionSchema = z.object({
  question: z.string().min(10, {
    message: "Minimum question length must be 10 characters",
  }),
  options: z
    .array(
      z.object({
        text: z.string().min(1, {
          message: "Minimum option length must be 1 character",
        }),
        isCorrect: z.boolean(),
      })
    )
    .length(4, {
      message: "There must be exactly 4 options",
    }),
});
