// @ts-ignore
const webAppData: any = window.Telegram.WebApp;

interface TelegeamWebAppData {
  auth_date: string;
  hash: string;
  query_id: string;
  receiver: {
    first_name: string;
    id: number;
    is_bot: boolean;
    last_name: string;
    photo_url: string;
    username: string;
  };
  user: {
    added_to_attachment_menu: boolean;
    allows_write_to_pm: boolean;
    first_name: string;
    id: number;
    is_premium: boolean;
    language_code: string;
    last_name: string;
    photo_url: string;
    username: string;
  };
}
export const getInitData = () => webAppData.initData;

export const getUnsafeDate = (): TelegeamWebAppData =>
  webAppData.initDataUnsafe;
