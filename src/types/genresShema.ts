import { z } from "zod";

export const GenreSchema = z.string();

export type GenreType = z.infer<typeof GenreSchema>;

export type GenresType = GenreType[];
