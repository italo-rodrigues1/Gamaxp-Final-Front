import axios from "axios";

export const api = axios.create({
  baseURL: "https://gamaxpfinalapi.herokuapp.com/livro",
});