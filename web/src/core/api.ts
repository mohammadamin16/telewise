import axios from "axios";
import { json } from "react-router-dom";
// const BASE_URL = "https://amintootoonchi.ir/api/v1";
// const BASE_URL = "http://188.121.116.20:5001/api/v1";
const BASE_URL = "/api/v1";

// export const resetServer = () => {
//   return axios.get(BASE_URL + "/", { withCredentials: false });
// };

export const registerUser = (chatId: string, userId: string, name: string) => {
  return axios({
    method: "post",
    url: BASE_URL + "/user",
    data: {
      userId: userId,
      chat: chatId,
      name: name,
    },
  });
};

export const getUsers = (chatId: string, userId: string) => {
  const jsonData = { chat: chatId, userId: userId };
  return axios(BASE_URL + "/user", {
    params: jsonData,
    method: "get",
  });
};

export const getTransaction = (chatId: string, userId: string) => {
  return axios.get(BASE_URL + "/transaction", {
    params: { chat: chatId, userId: userId },
  });
};

export const getBalance = (chatId: string, userId: string) => {
  return axios.get(BASE_URL + "/balance", {
    params: { userId, chat: chatId },
  });
};

export const pay = (data: {
  chat: string;
  userId: string;
  amount: string;
  receiverUserId: string;
}) => {
  return axios({
    method: "post",
    url: BASE_URL + "/pay",

    data: { ...data },
  });
};

export const addTransaction = (data: {
  chat: string;
  userId: string;
  amount: number;
  group: { userId: string; amount: number }[];
  title: string;
  description: string;
}) => {
  axios
    .post(BASE_URL + "/transaction", { ...data })
    .then(function (response) {
      console.log("add transaction", response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
