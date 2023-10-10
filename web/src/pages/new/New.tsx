import { MainButton } from "@vkruglikov/react-telegram-web-app";
import { Input, Radio, RadioChangeEvent, Typography } from "antd";
import Title from "antd/es/typography/Title";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./new.module.css";
import { useUserData } from "../../hooks/useUserData";
import { addTransaction, getUsers } from "../../core/api";
const { Text, Link } = Typography;
enum ShareType {
  Equally = "Equally",
  NotEqually = "Un Equally",
}
export const New = () => {
  const [type, setType] = useState<ShareType>(ShareType.Equally);
  const navigate = useNavigate();
  const { chatId, name, userId } = useUserData();
  const onChange = (e: RadioChangeEvent) => {
    setType(e.target.value);
  };
  const [inputAmount, setInputAmount] = useState<string | undefined>();
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [users, setUsers] = useState<ApiUser[]>([]);

  useEffect(() => {
    getUsers(chatId, userId).then((res) => setUsers(res.data[chatId]));
  }, []);

  const handleConfirm = () => {
    addTransaction({
      amount: Number(inputAmount),
      chat: chatId,
      description: description,
      group: Object.entries(amounts).map(([userId, amount]) => ({
        userId,
        amount: Number(amount),
      })),
      title: title,
      userId: userId,
    });
    navigate("/");
  };
  const [amounts, setAmount] = useState<{ [key: string]: string }>({});

  const changeAmounts = (userId: string, value: string) => {
    setAmount((am) => {
      const newAmounts = { ...am };
      newAmounts[userId] = value;
      return newAmounts;
    });
  };
  return (
    <>
      <div className={styles.header}>
        <Title level={3} onClick={handleConfirm}>
          New Transaction
        </Title>
      </div>
      <div className={styles.new_transaction}>
        <div className={styles.info_container}>
          <Text>{name}</Text>
          <Text type="secondary">you lent {inputAmount + "$"}</Text>
        </div>
        <Input
          addonAfter="$"
          type="number"
          value={inputAmount}
          onChange={(e) => {
            setInputAmount(e.target.value);
          }}
          placeholder="400$"
          size={"large"}
        />
      </div>
      <Input
        style={{ width: "90%" }}
        size={"large"}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        placeholder="title"
      />
      <Input
        style={{ width: "90%", marginTop: 10 }}
        size={"large"}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        value={description}
        placeholder="description"
      />

      <Radio.Group
        className={styles.radio_group}
        onChange={onChange}
        value={type}
      >
        <Radio value={ShareType.Equally}>{ShareType.Equally}</Radio>
        <Radio value={ShareType}>{ShareType.NotEqually}</Radio>
      </Radio.Group>

      {users.map((user) => (
        <div className={styles.member}>
          <div className={styles.info_container}>
            <Text>{user.name}</Text>
            <p>you lent {amounts[user.userId]}$</p>
          </div>
          <div className={styles.amount_input}>
            <Input
              type="number"
              size={"middle"}
              onChange={(e) => {
                changeAmounts(user.userId, e.target.value);
              }}
              value={amounts[user.userId]}
              placeholder="amount"
            />
          </div>
        </div>
      ))}

      <MainButton text="Confirm" onClick={handleConfirm} />
    </>
  );
};
