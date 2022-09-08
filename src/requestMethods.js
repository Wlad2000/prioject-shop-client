import axios from "axios"

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMTM2N2Q4MmMyMTRlMGVlMzM4ZjE0NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MjU0NjY0MSwiZXhwIjoxNjYyODA1ODQxfQ.OgqJxRfLmjEQbGNoePdskh0h3UJHXm265cGKxcUlSao";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` }
});