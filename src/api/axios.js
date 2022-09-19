import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "8f46ebc388c8766110859b42629284b9",
    language: "ko-KR"
  },
});

export default instance;