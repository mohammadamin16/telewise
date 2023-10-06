// @ts-nocheck
import axios from "axios";
const BASE_URL = "https://9478-5-62-203-23.ngrok-free.app/api/v1";
export const registerUser = () => {
  axios
    .post(BASE_URL + "/user", {
      chat: "1",
      userId: "1001",
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
      params: {},
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

export const addTransaction = () => {
  axios
    .post(BASE_URL + "/transaction", {
      chat: "1",
      userId: "1003",
      amount: 500,
      group: [
        {
          userId: "1000",
          amount: 100,
        },
        {
          userId: "1001",
          amount: 400,
        },
      ],
      title: "Food",
      description: "VCafe",
    })
    .then(function (response) {
      console.log("add transaction", response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
