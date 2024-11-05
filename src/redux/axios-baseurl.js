import axios from 'axios'

const client = axios.create({
    baseURL: "https://www.vayuz.com"
}, {
    withCredentials: true,
})

export default client;

export const reCapchaMatching = async (value) => {
    try {
        const response = await client.post("/verify-recapcha", value)
        return response.data;
    } catch (error) {
        return error
    }
}
