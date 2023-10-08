import { FloatButton } from "antd";
import { Transaction } from "../../components/transaction/Transaction";
import styles from "./home.module.css";
import {
  MainButton,
  useShowPopup,
  InitDataUnsafe,
  useInitData,
  ThemeParams,
  useThemeParams,
} from "@vkruglikov/react-telegram-web-app";
import {
  CustomerServiceOutlined,
  PlusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  addTransaction,
  getBalance,
  getTransaction,
  pay,
  pingServer,
  registerUser,
} from "../../core/api";
import { Button, theme } from "antd";

const { useToken } = theme;

import { getUnsafeDate } from "../../utils";
import { useUserData } from "../../hooks/useUserData";

export const Home = () => {
  const { chatId, name, userId } = useUserData();

  useEffect(() => {
    registerUser(chatId, userId, name);
    // getTransaction();
    // pingServer();
  }, [chatId, userId, name]);

  const navigate = useNavigate();
  const handleGoToNewPage = () => {
    navigate("/new");
  };
  const { token } = useToken();

  return (
    <>
      <div className={styles.header}>
        <p className={styles.title} style={{ color: token.colorTextHeading }}>
          Account Info
        </p>
      </div>
      <div className={styles.balanced_row}>
        <p>Balance</p>
        <div className={styles.value_container}>
          <p>+1,7000 $</p>
          <p>You lent</p>
        </div>
      </div>
      <div className={styles.list}>
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
      </div>
      <FloatButton
        onClick={handleGoToNewPage}
        shape="circle"
        type="primary"
        style={{ right: 20, width: 50, height: 50 }}
        icon={<PlusOutlined />}
      />
    </>
  );
};
