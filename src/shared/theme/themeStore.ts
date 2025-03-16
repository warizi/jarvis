import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeState {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const useThemeStore = create(
  persist<ThemeState>(
    (set) => ({
      darkMode: false,
      toggleDarkMode: () =>
        set((state) => ({ darkMode: !state.darkMode })),
    }),
    { name: "theme-storage" }
  )
);
