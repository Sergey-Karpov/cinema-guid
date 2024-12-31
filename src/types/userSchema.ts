import { z } from "zod";

export const userSchema = z.object({
  email: z.string().email().min(5),
  name: z.string(),
  surname: z.string(),
  favorites: z.array(z.string()),
});

export type UserType = z.infer<typeof userSchema>;
