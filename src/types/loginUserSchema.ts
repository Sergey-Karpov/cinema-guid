import { z } from "zod";

export const RegisterFormSchema = z.object({
  name: z.string().min(3),
  surname: z.string().min(3),
  email: z.string().email().min(5),
  password: z.string().min(5),
  confirmPassword: z.string().min(5),
});

export type RegisterDataType = z.infer<typeof RegisterFormSchema>;

export const LoginFormSchema = z.object({
  email: z.string().email().min(5),
  password: z.string().min(5),
});

export type LoginDataType = z.infer<typeof LoginFormSchema>;

export const ResponseFetchProfileSchema = z.object({
  favorites: z.array(z.string()),
  surname: z.string(),
  name: z.string(),
  email: z.string().email().min(5),
});

export type ResponseFetchProfileType = z.infer<
  typeof ResponseFetchProfileSchema
>;
