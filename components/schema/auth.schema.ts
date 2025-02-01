import { z } from "zod";

export const registerSchema = z
  .object({
    email: z
      .string()
      .email("Invalid email format")
      .nonempty("Email is required"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters long")
      .regex(/[a-z]/, "Password must contain at least 1 lowercase letter")
      .regex(/\d/, "Password must contain at least 1 number")
      .nonempty("Password is required"),
    confirmPassword: z.string().nonempty("Confirm password is required"),
    firstName: z
      .string()
      .min(2, "Firstname must be at least 2 characters long")
      .nonempty("Firstname is required"),
    lastName: z
      .string()
      .min(2, "Lastname must be at least 2 characters long")
      .nonempty("Lastname is required"),
    phoneNumber: z
      .string()
      .regex(
        /^(\+251|0)?9\d{8}$/,
        "Phone number must be a valid Ethiopian phone number"
      )
      .nonempty("Phone number is required"),
    age:  z
      .number()
      .default(22) , 
    allergies:z.array(z.number()).optional()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const loginSchema = z.object({
  email: z.string().email("Invalid email format").nonempty("Email is required"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .refine(
      (value) => /[a-z]/.test(value),
      "Password must contain at least 1 lowercase letter"
    )
    .refine(
      (value) => /\d/.test(value),
      "Password must contain at least 1 number"
    ),
});
