import axios from "axios";

const API = axios.create({
    baseURL: "https://popx-backend-6l5a.onrender.com/api",
    headers: {
        "Content-Type": "application/json",
    },
});

export default API;
