import { toggleBodyScroll } from "@/utils/toggleBodyScroll";
import React, { useState, useEffect, useRef } from "react";
import CloseButton from "@/components/ui/buttons/CloseButton/CloseButton";
import "./HeaderSearch.scss";
import SearchIcon from "@/assets/icons/search.svg?react";
import SearchLightIcon from "@/assets/icons/search-light.svg?react";
import { useQuery } from "@tanstack/react-query";
import { getMovies } from "@/api/api";
import SearchResult from "../HeaderSerchResult/HeaderSearchResult";

type mobileSearchStateType = "mobile-show" | "mobile-hide";

const HeaderSearch: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [mobileSearchState, setMobileSearchState] =
    useState<mobileSearchStateType>("mobile-hide");
  const headerSearchRef = useRef<HTMLDivElement>(null);
  const headerSearchBtnRef = useRef<HTMLButtonElement>(null);

  const handleSearchClear = () => setSearchValue("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleMobileSearchBtn = () => {
    if (mobileSearchState === "mobile-hide") {
      setMobileSearchState("mobile-show");
      toggleBodyScroll("add");
    } else {
      setMobileSearchState("mobile-hide");
    }
  };

  const { data, isSuccess } = useQuery({
    queryKey: ["fetchMoviesByTitle", searchValue],
    queryFn: () => getMovies({ title: searchValue }),
    enabled: searchValue.length > 3,
  });

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;

    if (
      window.innerWidth <= 1200 &&
      headerSearchRef.current &&
      headerSearchBtnRef.current &&
      !headerSearchRef.current.contains(target) &&
      !headerSearchBtnRef.current.contains(target) &&
      mobileSearchState === "mobile-show"
    ) {
      setMobileSearchState("mobile-hide");
      toggleBodyScroll("remove");
    }
  };

  useEffect(() => {
    if (mobileSearchState === "mobile-show") {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
  }, [mobileSearchState]);

  useEffect(() => {
    if (!!searchValue.length) {
      toggleBodyScroll("add");
    } else {
      toggleBodyScroll("remove");
    }
    return () => {
      toggleBodyScroll("remove");
    };
  }, [searchValue]);

  return (
    <div
      className={`header-search ${
        mobileSearchState === "mobile-show" ? "mobile-show" : ""
      }`}
    >
      <button
        ref={headerSearchBtnRef}
        className="header-search__mobile-btn"
        onClick={handleMobileSearchBtn}
      >
        <SearchLightIcon />
      </button>
      <div ref={headerSearchRef} className="header-search__inner">
        <form action="" onSubmit={handleSubmit} className="header-search__form">
          <SearchIcon className="header-search__icon" />
          <input
            type="text"
            placeholder="Поиск"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          {searchValue && <CloseButton onClick={handleSearchClear} />}
        </form>
        <div
          className={`header-search__dropdown ${
            isSuccess ? "header-search__dropdown--visible" : ""
          }`}
        >
          {data && (
            <SearchResult
              list={data.slice(0, 5)}
              onSelect={handleSearchClear}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderSearch;
