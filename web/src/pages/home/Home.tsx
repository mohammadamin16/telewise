import { FloatButton } from "antd";
import { Transaction } from "../../components/transaction/Transaction";
import { getUnsafeDate } from "../../utils";
import styles from "./home.module.css";
import {
  MainButton,
  useShowPopup,
  ThemeParams,
} from "@vkruglikov/react-telegram-web-app";
import { CustomerServiceOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const handleGoToNewPage = () => {
    navigate("/new");
  };
  return (
    <>
      <div className={styles.header}>
        <p className={styles.header}>Account Info</p>
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
        badge={{}}
        style={{ right: 20 }}
        icon={<PlusCircleOutlined />}
      />
    </>
  );
};
