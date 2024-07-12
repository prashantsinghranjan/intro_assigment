import axios from "axios"
export let BASE_ENDPOINT = 'http://localhost:5000';

const BASE_URL = `${BASE_ENDPOINT}`;
export default axios.create({
    baseURL:BASE_URL,
    headers:{"Content-Type":"application/json",Accept:"application/json"},
    withCredentials:true
})