import {
  BackButton,
  MainButton,
  WebAppProvider,
  useThemeParams,
} from "@vkruglikov/react-telegram-web-app";
import "./App.css";
import { Home } from "./pages/home/Home.tsx";
import { ConfigProvider, theme } from "antd";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const [colorScheme, themeParams] = useThemeParams();
  const router = createBrowserRouter([
    // @ts-ignore
    {
      path: "/",
      Component: Home,
    },
    // @ts-ignore
    { path: "/new", Component: New },
  ]);
  return (
    <>
      <ConfigProvider
        theme={
          themeParams.text_color
            ? {
                algorithm:
                  colorScheme === "dark"
                    ? theme.darkAlgorithm
                    : theme.defaultAlgorithm,
                token: {
                  colorText: themeParams.text_color,
                  colorPrimary: themeParams.button_color,
                  colorBgBase: themeParams.bg_color,
                },
              }
            : undefined
        }
      >
        <WebAppProvider
          options={{
            smoothButtonsTransition: true,
          }}
        >
          <RouterProvider router={router} />
        </WebAppProvider>
      </ConfigProvider>
    </>
  );
}

export default App;
