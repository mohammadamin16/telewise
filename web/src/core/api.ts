import axios from "axios";
import { json } from "react-router-dom";
// const BASE_URL = "http://localhost:5001/api/v1";
// const BASE_URL = "/api/v1";
const BASE_URL = "http://188.121.116.20:5001/api/v1";

export const resetServer = () => {
  axios
    .get(BASE_URL + "/")
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
export const registerUser = (chatId: string, userId: string, name: string) => {
  return axios.post(BASE_URL + "/user", {
    chat: chatId,
    userId: userId,
    name: name,
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
  axios
    .post(BASE_URL + "/pay", {
      ...data,
    })
    .then(function (response) {
      console.log("pay", response);
    })
    .catch(function (error) {
      console.log(error);
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
