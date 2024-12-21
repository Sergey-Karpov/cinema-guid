import { getGenres } from "@/api/api";
import Genres from "@/components/sections/Genres/Genres";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const GenresPage: React.FC = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["fetchGenres"],
    queryFn: getGenres,
  });

  return <>{data && <Genres genresData={data} />}</>;
};

export default GenresPage;
