import { MainButton } from "@vkruglikov/react-telegram-web-app";
import { Input, Radio, RadioChangeEvent, Typography } from "antd";
import Title from "antd/es/typography/Title";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SwipeToDelete from "react-swipe-to-delete-ios";

import styles from "./new.module.css";
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

  return (
    <>
      <div className={styles.header}>
        <Title level={3}>Account Info</Title>
      </div>
      <div className={styles.new_transaction}>
        <div className={styles.info_container}>
          <Text>Mahdi</Text>
          <Text type="secondary">you lent 400</Text>
        </div>
        <Input addonAfter="$" type="number" placeholder="400$" size={"large"} />
      </div>
      <Input
        type="number"
        style={{ width: "90%" }}
        size={"large"}
        placeholder="description"
        defaultValue="400$"
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
