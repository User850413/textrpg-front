import axios, { type AxiosInstance } from "axios";

// axios.defaults.baseURL = import.meta.env.VITE_INTERNAL_URL
// axios.defaults.withCredentials = true;

class Connect {
    client: AxiosInstance;

    constructor() {
        this.client = axios.create();
        this.client.defaults.headers["Content-Type"] = "application/json; charset=UTF-8";
        this.client.defaults.headers.common["Authorization"] = localStorage.getItem("jwtsessiontoken") == null ? null: `Bearer ${localStorage.getItem("jwtsessiontoken")}`;
        this.client.defaults.baseURL = import.meta.env.VITE_INTERNAL_URL;
        this.client.defaults.withCredentials = true;
    }
}

export default Connect;