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
    // Extract the actual File object stored under "img"
    const file = formDataFromComponent.get("file");

    // Gather all text fields into a plain object to match backend's JSON.parse(formData.get("data"))
    const dataObj = {
        name: formDataFromComponent.get("name"),
        designation: formDataFromComponent.get("designation"),
        salary: formDataFromComponent.get("salary"),
        type: formDataFromComponent.get("type"),
        location: formDataFromComponent.get("location"),
        skill: formDataFromComponent.get("skill"),
        details: formDataFromComponent.get("details"),
        date: formDataFromComponent.get("date"),
        category: formDataFromComponent.get("category"),
        image:formDataFromComponent.get("image")
    };

    // Build the final FormData structure expected by your Next.js backend
    const backendFormData = new FormData();

    if (file && typeof file !== "string") {
        backendFormData.append("file", file); // Appends the actual File/Blob object
    }

    backendFormData.append("data", JSON.stringify(dataObj));

    // Send via Axios
    const res = await axios.post(endpoint+"/api/admin/job", backendFormData);

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
    return res.data.imageUrl
}
export const deleteJob = async(id)=>{
    const res = await axios.delete(endpoint + `/api/admin/job?id=${id}`)
}

export const updateStatus = async()=>{
    const res = await axios.put(endpoint+ `/api/admin/job`)
    return res
}