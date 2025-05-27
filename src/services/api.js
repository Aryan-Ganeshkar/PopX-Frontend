import axios from "axios";

const API = axios.create({
    baseURL: "https://popx-backend-51nh.onrender.com/api",
    headers: {
        "Content-Type": "application/json",
    },
});

export default API;
