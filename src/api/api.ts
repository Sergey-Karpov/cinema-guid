import { GenreType } from "@/types/genresShema";
import { MovieType } from "@/types/movieSchema";
import {
  LoginDataType,
  RegisterDataType,
  ResponseFetchProfileSchema,
  ResponseFetchProfileType,
} from "@/types/loginUserSchema";
import { QueryClient } from "@tanstack/query-core";
import { validateResponse } from "@/utils/helpers";

export const queryClient = new QueryClient();

export const API_URL = "https://cinemaguide.skillbox.cc/";

export const getRandomMovie = async (): Promise<MovieType> => {
  const res = await fetch(`${API_URL}movie/random`);
  const data = await res.json();
  return data as MovieType;
};

export const getMovieById = async (movieId: number): Promise<MovieType> => {
  const res = await fetch(`${API_URL}movie/${movieId}`);
  const data = await res.json();
  return data as MovieType;
};

export const getTopTenMovies = async (): Promise<MovieType[]> => {
  const res = await fetch(`${API_URL}movie/top10`);
  const data = await res.json();
  return data as MovieType[];
};

export const getGenres = async (): Promise<GenreType[]> => {
  const res = await fetch(`${API_URL}movie/genres`);
  const data = await res.json();
  return data as GenreType[];
};

interface GetMoviesProps {
  genre?: string;
  count?: number;
  title?: string;
}

export const getMovies = async ({
  genre,
  count,
  title,
}: GetMoviesProps): Promise<MovieType[]> => {
  const url = new URL(`${API_URL}movie`);
  if (genre) url.searchParams.append("genre", genre);
  if (title) url.searchParams.append("title", title);
  if (count) url.searchParams.append("count", count.toString());

  const res = await fetch(url.toString());
  if (!res.ok) {
    throw new Error(`Failed to fetch movies: ${res.statusText}`);
  }

  const data = await res.json();
  return data as MovieType[];
};

export const registerUser = async (
  userData: RegisterDataType
): Promise<void> => {
  const response = await fetch(`${API_URL}user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    let errorMessage = "Ошибка регистрации";

    if (response.status === 409) {
      errorMessage = "Пользователь с таким email уже существует";
    } else if (errorData?.message) {
      errorMessage = errorData.message;
    }

    throw new Error(errorMessage);
  }
};

export const login = async (loginData: LoginDataType): Promise<void> => {
  return fetch(`${API_URL}auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
    credentials: "include",
  })
    .then(validateResponse)
    .then((response) => response.json());
};

export const logout = async (): Promise<void> => {
  return fetch(`${API_URL}auth/logout`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  })
    .then(validateResponse)
    .then(() => undefined);
};

export const fetchProfile = (): Promise<ResponseFetchProfileType> => {
  return fetch(`${API_URL}profile`, {
    credentials: "include",
  })
    .then(validateResponse)
    .then((response) => response.json())
    .then((data) => ResponseFetchProfileSchema.parse(data));
};

export const addMovieToFavorites = (id: string) => {
  return fetch(`${API_URL}favorites`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
    credentials: "include",
  });
};

export const getFavoriteMovies = async (): Promise<MovieType[]> => {
  const res = await fetch(`${API_URL}favorites`, {
    credentials: "include",
  });
  const moviesList = await res.json();
  return moviesList;
};

export const removeMovieFromFavorites = async (id: number) => {
  await fetch(`${API_URL}favorites/${id}`, {
    method: "DELETE",
    credentials: "include",
  });
};
