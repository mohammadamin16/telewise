import { useInitData } from "@vkruglikov/react-telegram-web-app";

export const useUserData = () => {
  const [initDataUnsafe, initData] = useInitData();

  return {
    userId: initDataUnsafe.user?.id.toString() || "1",
    name: initDataUnsafe.user?.first_name || "testName2",
    chatId: initDataUnsafe.chat_instance || "-10",
  };
};
