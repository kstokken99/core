import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { MainPageAsync, AboutPageAsync } from "./pages";
import { useTheme } from "./providers/theme";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
};
