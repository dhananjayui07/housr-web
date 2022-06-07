import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://b3f5-2405-204-5489-5416-c9b1-d5b7-47d0-35e6.ngrok.io/api/v1/stayabode/website/housr",
});

export default instance;
