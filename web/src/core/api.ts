import axios from "axios";
// const BASE_URL = "http://localhost:5001/api/v1";
const BASE_URL = "/api/v1";

export const pingServer = () => {
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
  axios
    .post(BASE_URL + "/user", {
      chat: chatId,
      userId: userId,
      name: name,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const getTransaction = () => {
  axios
    .get(BASE_URL + "/transaction", {
      data: { chat: "1" },
      //   data: {
      //     chat: "1",
      //     userId: "1003",
      //   },
    })
    .then(function (response) {
      console.log("getTransaction", response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const getBalance = () => {
  axios
    .get(BASE_URL + "/balance", {
      params: {},
      //   data: {
      //     chat: "1",
      //     userId: "1003",
      //   },
    })
    .then(function (response) {
      console.log("getTransaction", response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const pay = () => {
  axios
    .post(BASE_URL + "/pay", {
      userId: "1001",
      chat: "1",
      amount: 100,
      receiverUserId: "1003",
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
