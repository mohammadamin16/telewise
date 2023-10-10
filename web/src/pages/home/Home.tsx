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
import { useEffect, useMemo, useState } from "react";
import {
  addTransaction,
  getBalance,
  getTransaction,
  getUsers,
  pay,
  registerUser,
} from "../../core/api";
import { Button, theme } from "antd";

const { useToken } = theme;

import { getUnsafeDate } from "../../utils";
import { useUserData } from "../../hooks/useUserData";

export const Home = () => {
  const { chatId, name, userId } = useUserData();

  const [transactions, setTransactions] = useState<ApiTransction[]>([]);
  const [users, setUsers] = useState<ApiUser[]>();
  const [balances, setBalances] = useState<ApiBalance[]>([]);
  const balanceAmount = useMemo(() => {
    let amount = 0;
    balances.map((b) => {
      amount += b.amount;
    });
    return amount;
  }, [balances]);
  useEffect(() => {
    registerUser(chatId, userId, name);
    getBalance(chatId, userId).then((res) => {
      setBalances(res.data);
    });
    getTransaction(chatId, userId).then((res) => {
      setTransactions(res.data);
    });
    getUsers(chatId, userId).then((res) => {
      setUsers(res?.data?.[chatId] as ApiUser[]);
    });
  }, [chatId, userId, name]);

  const navigate = useNavigate();
  const handleGoToNewPage = () => {
    navigate("/new");
  };
  const { token } = useToken();

  const handleSettleUp = () => {
    navigate("/pay");
  };

  return (
    <>
      <div className={styles.header}>
        <p className={styles.title} style={{ color: token.colorTextHeading }}>
          Account Info
        </p>
      </div>
      <div className={styles.balanced_row}>
        <p>Balance</p>
        <Button type="primary" onClick={handleSettleUp}>
          Settle up
        </Button>
        <div className={styles.value_container}>
          <p>+{balanceAmount} $</p>
          <p>{balanceAmount > 0 ? "You owe" : "You lent"}</p>
        </div>
      </div>
      <div className={styles.list}>
        {transactions.map((t) => (
          <Transaction
            transction={t}
            key={t.transactionId}
            PayerName={
              users?.find((user) => user.userId === t.userId)?.name || ""
            }
            amIPayer={t.userId === userId}
          />
        ))}
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
