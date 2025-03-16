import { ThemeProvider } from "@emotion/react";
import HomePage from "@pages/home";
import TaskPage from "@pages/task";
import TestPage from "@pages/test";
import { lightTheme } from "@shared/theme/theme";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
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
