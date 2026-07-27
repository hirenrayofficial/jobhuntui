import axios from "axios"
const endpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;

export const getJob = async()=>{
    const res = await axios.get(endpoint+"/api/home/jobs")
    if(!res){
        return
    }
    // console.log(res.data)
    return res.data.job
}