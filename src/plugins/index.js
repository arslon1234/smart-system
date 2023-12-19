// import axios from "axios";
// import {getToken} from "@/utils/TokenService";

// const BASE_URL = process.env.BASE_URL;

// let instance = axios.create({

//     baseURL:BASE_URL,
//     // timeout:3000,
//     headers:{
//         'Content-Type':'application/json; charset=utf-8'
//     }
// })

// instance.interceptors.request.use((config)=>{
//     const token = getToken();
//     token && (config.headers.Authorization = token);
//     if (config.method === 'POST') {
//         config.data = JSON.stringify(config.data)
//     }
//     return config
// },(error)=>{
//     Promise.reject(error)
// })

// instance.interceptors.response.use(
//     (response) => {
//         return Promise.resolve(response.data)
//     },
//     (error) => {
//         console.log(error)
//         if (error.response && error.response.status) {
//             const status = error.response.status
//             console.log(status)
//             return Promise.reject(error)
//         }
//         return Promise.reject(error)
//     }
// )
// export { instance, BASE_URL }

