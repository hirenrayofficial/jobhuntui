import axios from "axios"

export const getJob = async()=>{
    const res = await axios.get("http://localhost:3001/api/home/jobs")
    if(!res){
        return
    }
    // console.log(res.data)
    return res.data.job
}