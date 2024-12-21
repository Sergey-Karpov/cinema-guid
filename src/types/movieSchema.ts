import { z } from "zod";

export const MovieSchema = z.object({
  id: z.number(),
  title: z.string(),
  originalTitle: z.string(),
  language: z.string(),
  releaseYear: z.number(),
  releaseDate: z.string(),
  genres: z.array(z.string()),
  plot: z.string(),
  runtime: z.number(),
  budget: z.nullable(z.string()),
  revenue: z.nullable(z.string()),
  homepage: z.string().url(),
  status: z.string(),
  posterUrl: z.string().url(),
  backdropUrl: z.string().url(),
  trailerUrl: z.string().url(),
  trailerYouTubeId: z.string(),
  tmdbRating: z.number(),
  searchL: z.string(),
  keywords: z.array(z.string()),
  countriesOfOrigin: z.array(z.string()),
  languages: z.array(z.string()),
  cast: z.array(z.string()),
  director: z.string(),
  production: z.string().nullable(),
  awardsSummary: z.string().nullable(),
});

export type MovieType = z.infer<typeof MovieSchema>;

export type MovieListType = MovieType[];
