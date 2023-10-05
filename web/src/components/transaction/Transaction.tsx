import { FloatButton, theme } from "antd";
import styles from "./transaction.module.css";
import { useEffect } from "react";
import useToken from "antd/es/theme/useToken";
import { Space, Typography } from "antd";

const { Text, Link } = Typography;
export const Transaction = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user_info}>
        <img className={styles.avatar} />
        <div className={styles.info_column}>
          <Text>Cafe</Text>
          <p className={styles.desc}>Mahdi paid 2000$</p>
        </div>
      </div>
      <div className={styles.amount_container}>
        <p className={styles.value}>2,000 $</p>
        <p className={styles.value_desc}>You owe</p>
      </div>

    </div>
  );
};
