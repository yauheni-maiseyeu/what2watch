import { z } from 'zod';

export const MovieSchema = z.object({
  id: z.number(),
  title: z.string(),
  originalTitle: z.string().nullable(),
  language: z.string().nullable(),
  releaseYear: z.number().nullable(),
  releaseDate: z.string().nullable(),
  genres: z.array(z.string()).nullable(),
  plot: z.string().nullable(),
  runtime: z.number().nullable(),
  budget: z.string().nullable(),
  revenue: z.string().nullable(),
  homepage: z.string().nullable(),
  status: z.string().nullable(),
  posterUrl: z.string().nullable(),
  backdropUrl: z.string().nullable(),
  trailerUrl: z.string().nullable(),
  trailerYoutubeId: z.string().nullable().optional(),
  tmdbRating: z.number().nullable(),
  searchL: z.string().nullable(),
  keywords: z.array(z.string()).nullable(),
  countriesOfOrigin: z.array(z.string()).nullable(),
  languages: z.array(z.string()).nullable(),
  cast: z.array(z.string()).nullable(),
  director: z.string().nullable(),
  production: z.string().nullable(),
  awardsSummary: z.string().nullable(),
});

export type Movie = z.infer<typeof MovieSchema>;
export const MoviesSchema = z.array(MovieSchema);
export type Movies = z.infer<typeof MoviesSchema>;
