import axios from 'axios';

// const getTokenFromLocalStorage = localStorage.getItem("user")
//   ? JSON.parse(localStorage.getItem("user"))
//   : null;

// export const config = {
//   headers: {
//     Authorization: `Bearer ${getTokenFromLocalStorage.token}`,
//     Accept: "application/json",
//   },
// };


const instance = axios.create({
    baseURL: 'https://mern-ecommerce-7hcd.onrender.com/api',
    withCredentials: true,
});

instance.interceptors.request.use((config) => {
    // config.headers.Authorization = window.localStorage.getItem('token');
    config.headers.Authorization = `Bearer ${window.localStorage.getItem('token')}`;
    return config;
});

export default instance;