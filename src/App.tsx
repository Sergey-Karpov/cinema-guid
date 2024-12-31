import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@/components/Layout/Layout";
import HomePage from "@/pages/Home/HomePage";
import GenresPage from "@/pages/Genres/GenresPage";
import MoviePage from "@/pages/Movie/MoviePage";
import "@/global.scss";
import CertainGenrePage from "@/pages/CertainGenre/CertainGenrePage";
import AccountPage from "./pages/Account/AccountPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:movieId" element={<MoviePage />} />
          <Route path="/genres" element={<GenresPage />} />
          <Route path="/genres/:genre" element={<CertainGenrePage />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
