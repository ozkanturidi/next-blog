"use client";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();
export const getTheme = () => {
  if (typeof window !== undefined) {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return getTheme();
  });
  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  //   const changeTheme = (theme) => {
  //     if (theme === "light") {
  //       localStorage.setItem("theme", "dark");
  //       setTheme("dark");
  //     } else {
  //       localStorage.setItem("theme", "light");
  //       setTheme("light");
  //     }
  //   };

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
