import { toggleBodyScroll } from "@/utils/toggleBodyScroll";
import React, { useState, useEffect } from "react";
import CloseButton from "@/components/ui/buttons/CloseButton/CloseButton";
import "./HeaderSearch.scss";
import SearchIcon from "@/assets/icons/search.svg?react";

const HeaderSearch: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleClear = () => setSearchValue("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (searchValue) {
      toggleBodyScroll("add");
    } else {
      toggleBodyScroll("remove");
    }
  });

  return (
    <div className="header-search">
      <form action="" onSubmit={handleSubmit} className="header-search__form">
        <SearchIcon className="header-search__icon" />
        <input
          type="text"
          placeholder="Поиск"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {searchValue && <CloseButton onClick={handleClear} />}
      </form>
      <div className="header-search__dropdown">
        <ul>
          <li>123</li>
          <li>123</li>
          <li>123</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderSearch;
