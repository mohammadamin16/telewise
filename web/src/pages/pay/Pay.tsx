import { Input, Typography } from "antd";

import styles from "./pay.module.css";
const { Text, Link } = Typography;
enum ShareType {
  Equally = "Equally",
  NotEqually = "Un Equally",
}
import { Button, theme } from "antd";
import Title from "antd/es/typography/Title";
import { useEffect, useState } from "react";
import {
  registerUser,
  getBalance,
  getTransaction,
  getUsers,
  pay,
} from "../../core/api";
import { useUserData } from "../../hooks/useUserData";
import { MainButton } from "@vkruglikov/react-telegram-web-app";

const { useToken } = theme;

export const Pay = () => {
  const { token } = useToken();
  const [users, setUsers] = useState<ApiUser[]>([]);
  const { chatId, name, userId } = useUserData();
  const [selectedUser, setSelectedUser] = useState<ApiUser>();
  useEffect(() => {
    getUsers(chatId, userId).then((res) => {
      setUsers(res?.data?.[chatId] as ApiUser[]);
    });
  }, [chatId, userId, name]);
  const handleSelectUser = (user: ApiUser) => {
    setSelectedUser(user);
  };
  const [amount, setAmount] = useState("");
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };
  const handlePay = () => {
    pay({
      amount,
      chat: chatId,
      receiverUserId: selectedUser?.userId!,
      userId,
    });
  };
  return (
    <>
      <div className={styles.header}>
        <Title
          onClick={() => handlePay()}
          className={styles.title}
          style={{ color: token.colorTextHeading }}
        >
          Pay
        </Title>
      </div>
      <Text className={styles.body}>
        {selectedUser
          ? `How much you want to pay ${selectedUser.name}?`
          : "Select a member"}
      </Text>
      {!selectedUser ? (
        <div className={styles.members}>
          {users.map((user) => (
            <div
              key={user.userId}
              className={styles.person}
              onClick={() => handleSelectUser(user)}
            >
              <div className={styles.avatar}>
                <Text>{user.name.substring(0, 1).toUpperCase()}</Text>
              </div>
              <Text className={styles.name}>{user.name}</Text>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.form_container}>
          <Input
            addonAfter="$"
            type="number"
            style={{ width: "40%", margin: 10 }}
            value={amount}
            onChange={handleAmountChange}
            placeholder="400$"
            size={"large"}
          />
        </div>
      )}
      {/* <MainButton text="Pay" color="red" /> */}
    </>
  );
};
