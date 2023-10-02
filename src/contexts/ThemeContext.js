import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
    <ThemeContext.Provider
        value={{
        theme,
        reversedTheme: theme === "dark" ? "light" : "dark",
        toggleTheme,
        }}
    >
        {children}
    </ThemeContext.Provider>
    );
}
