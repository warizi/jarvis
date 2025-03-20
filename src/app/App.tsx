import { ThemeProvider } from "@emotion/react";
import HomePage from "@pages/home";
import { TodoLayout, TodoPage } from "@pages/Todo";
import TestPage from "@pages/test";
import {
  darkTheme,
  lightTheme,
} from "@shared/config/theme/theme";
import { useThemeStore } from "@shared/config/theme/themeStore";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import CommonLayout from "./layout/commonLayout";
import "./app.css";
import { ROUTE_URL } from "@shared/constants/route/ROUTE_URL";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  const darkMode = useThemeStore((state) => state.darkMode);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        theme={darkMode ? darkTheme : lightTheme}
      >
        <BrowserRouter>
          <Routes>
            <Route element={<CommonLayout />}>
              {/* HOME */}
              <Route
                path={ROUTE_URL.HOME}
                element={<HomePage />}
              />
              {/* TODO */}
              <Route
                path={ROUTE_URL.TODO}
                element={<TodoLayout />}
              >
                <Route
                  path={ROUTE_URL.TODO_CATE + "/:id"}
                  element={<TodoPage />}
                />
                <Route
                  path={ROUTE_URL.TODO_TODAY}
                  element={<TodoPage />}
                />
                <Route
                  path={ROUTE_URL.TODO_IMPORTANT}
                  element={<TodoPage />}
                />
              </Route>
              {/* TEST */}
              <Route
                path={ROUTE_URL.TEST}
                element={<TestPage />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
