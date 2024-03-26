import axios, { AxiosInstance } from "axios"

export const SERVER_URL: string | undefined = process.env.SERVER_URL as string

export const AxiosServer: AxiosInstance = axios.create({
    baseURL: `${SERVER_URL}/api`,
    headers: {
        "Content-Type": 'application/json'
    },
    withCredentials: true
})