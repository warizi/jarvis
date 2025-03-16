import { ThemeProvider } from "@emotion/react";
import HomePage from "@pages/home";
import TaskPage from "@pages/task";
import TestPage from "@pages/test";
import { darkTheme, lightTheme } from "@shared/theme/theme";
import { useThemeStore } from "@shared/theme/themeStore";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const darkMode = useThemeStore((state) => state.darkMode);

  return (
    <ThemeProvider
      theme={darkMode ? darkTheme : lightTheme}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/task" element={<TaskPage />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
