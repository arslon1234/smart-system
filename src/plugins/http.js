import axios from "axios";
import { getToken } from "@/utils/TokenService";
const http = axios.create({
    baseURL:process.env.VUE_APP_BASE_URL,
    headers: {
        'Content-Type': "application/json",
    }}
)

http.interceptors.request.use((config)=>{
    const configClone = {...config}
    const token = localStorage.getItem("Token")
    if(token) {
        configClone.headers["Authorization"] = `Bearer ${token}`
    }
    configClone.headers["Accept"] = "application/json";
    configClone.headers["Content-Type"] = "application/json";
    return configClone
})

http.interceptors.response.use(
    (response) => response,
    (error) => error
);

export default http

