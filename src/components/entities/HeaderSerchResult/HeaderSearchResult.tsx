import { MovieListType } from "@/types/movieSchema";
import React from "react";
import MovieDisplay from "../SearchMovieDisplay/SearchMovieDisplay";

interface SearchResultProps {
  list: MovieListType | null;
  onSelect: () => void;
}

const SearchResult: React.FC<SearchResultProps> = ({ list, onSelect }) => {
  if (!list || list.length === 0) {
    return <p>Ничего не найдено</p>;
  }

  return (
    <div className="search-result">
      <ul>
        {list.map((movie) => (
          <MovieDisplay key={movie.id} movieData={movie} onSelect={onSelect} />
        ))}
      </ul>
    </div>
  );
};

export default SearchResult;
