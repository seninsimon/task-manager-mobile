import { api } from "./api"


export const loginApi = async (payload: { email: string, password: string }) => {
    console.log(payload)
    const res = await api.post("/auth/login", payload)
    console.log(res)
    return res.data
}

export const registerApi = async (payload: { email: string, password: string, name: string }) => {
    console.log(payload)
    const res = await api.post("/auth/register", payload)
    console.log(res)
    return res.data
}
