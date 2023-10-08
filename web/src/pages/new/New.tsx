import { MainButton } from "@vkruglikov/react-telegram-web-app";
import { Input, Radio, RadioChangeEvent, Typography } from "antd";
import Title from "antd/es/typography/Title";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./new.module.css";
import { useUserData } from "../../hooks/useUserData";
const { Text, Link } = Typography;
enum ShareType {
  Equally = "Equally",
  NotEqually = "Un Equally",
}
export const New = () => {
  const [type, setType] = useState<ShareType>(ShareType.Equally);
  const navigate = useNavigate();
  const onChange = (e: RadioChangeEvent) => {
    setType(e.target.value);
  };
  const handleConfirm = () => {
    navigate("/");
  };

  const [description, setDescription] = useState("");
  const [inputAmount, setInputAmount] = useState<string | undefined>();
  const { name } = useUserData();
  return (
    <>
      <div className={styles.header}>
        <Title level={3}>Account Info</Title>
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
        type="number"
        style={{ width: "90%" }}
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
      <MainButton text="Confirm" onClick={handleConfirm} />
    </>
  );
};
