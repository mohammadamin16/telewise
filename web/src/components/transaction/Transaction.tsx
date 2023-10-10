import { FloatButton, theme } from "antd";
import styles from "./transaction.module.css";
import React, { useEffect } from "react";
import useToken from "antd/es/theme/useToken";
import { Space, Typography } from "antd";

const { Text, Link } = Typography;

interface Props {
  transction: ApiTransction;
  PayerName: string;
  amIPayer: boolean;
}
export const Transaction: React.FC<Props> = ({
  PayerName,
  transction,
  amIPayer,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.user_info}>
        <img className={styles.avatar} />
        <div className={styles.info_column}>
          <Text>{transction.title}</Text>
          <p className={styles.desc}>{PayerName} paid 2000$</p>
        </div>
      </div>
      <div className={styles.amount_container}>
        <p className={styles.value}>
          {transction.group.find((u) => u.userId)?.amount}$
        </p>
        <p className={styles.value_desc}>{amIPayer ? "You lent" : "You owe"}</p>
      </div>
    </div>
  );
};
