import axios from "axios"
const endpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
export const getJob = async () => {
    const res = await axios.get(endpoint+"/api/admin/job")
    if (!res) {
        return
    }
    return res.data.job
}

export const postJob = async (formDataFromComponent) => {
    const res = await axios.post(endpoint+"/api/admin/job", formDataFromComponent);

    if (!res) {
        return;
    }
    return res.data;
};
export const jobUpdate = async (formDataFromComponent,id) => {
    const res = await axios.put(endpoint+`/api/admin/job?id=${id}`, formDataFromComponent);

    if (!res) {
        return;
    }
    return res.data;
};
export const imgUploader = async (formData) => {
    const res = await axios.post(endpoint+"/api/admin/img", formData)
    if(!res){
        return
    }
    return res.data
}
export const deleteJob = async(id)=>{
    const res = await axios.delete(endpoint + `/api/admin/job?id=${id}`)
}

export const updateStatus = async(id,active)=>{
    const res = await axios.put(endpoint+ `/api/admin/job/status?id=${id}&active=${active}`)
    return res
}