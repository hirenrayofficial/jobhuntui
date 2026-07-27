import axios from "axios"

export const LoginNow = async(email,pass)=>{
    const res = await axios.post("http://localhost:3001/api/home/getway/login",{
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