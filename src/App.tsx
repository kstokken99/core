import { Link, Route, Routes } from "react-router-dom";
import { MainPageAsync, AboutPageAsync } from "./pages";
import { Suspense } from "react";

export const App = () => {
  return (
    <div className="app">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
    </div>
  );
};
