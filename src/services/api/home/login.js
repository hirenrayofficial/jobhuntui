
import axios from "axios"
import Cookies from 'js-cookie'
const endpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;


export const LoginNow = async (email, pass) => {
    const res = await axios.post(endpoint + "/api/home/getway/login", {
        email, pass
    }, {
        withCredentials: true,
    })

    // i don't want to use this // 
    Cookies.set("tokens",res.data.token)

    if (!res) {
        return
    }
    console.log(res)
    return res.data
}