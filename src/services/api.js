import axios from 'axios'

export const api = axios.create({
    baseURL: "https://rocketnotes-api-dle2.onrender.com"
})