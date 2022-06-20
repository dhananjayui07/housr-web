import axios from "axios";

const instance = axios.create({
  baseURL: "https://staging.stayabode.in/api/v1/stayabode/website/housr",
});

export default instance;
