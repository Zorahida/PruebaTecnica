import axios from "axios";

export const RegisteredUsers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  Authorization: {
    toString() {
      return `Bearer ${localStorage.getItem("token")}`;
    },
  },
};

export const UserReg = axios.create({
  baseURL: "http://localhost:8000",
});