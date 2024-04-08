import axios from "axios";

//https://viacep.com.br/ws/35502455/json

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;