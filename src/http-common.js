import axios from "axios";
export default axios.create({
  baseURL: "https://quran-api-id.vercel.app/",
  headers: {
    "Content-type": "application/json"
  }
});
