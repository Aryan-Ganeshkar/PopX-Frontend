import axios from "axios";

const API = axios.create({
    baseURL: "https://popx-backend-nlt3.onrender.com/api",
    headers: {
        "Content-Type": "application/json",
    },
});

export default API;
