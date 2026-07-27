import axios from "axios"
const endpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;


export const LoginNow = async(email,pass)=>{
    const res = await axios.post(endpoint+ "/api/home/getway/login",{
        email,pass
    },{
        withCredentials:true,
    })
    if(!res){
        return
    }
    console.log(res)
    return res.data
}