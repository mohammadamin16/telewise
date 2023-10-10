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
import { New } from "./pages/new/New.tsx";
import { Pay } from "./pages/pay/Pay.tsx";
function App() {
  const [colorScheme, themeParams] = useThemeParams();
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Home,
    },
    { path: "/new", Component: New },
    { path: "/pay", Component: Pay },
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
