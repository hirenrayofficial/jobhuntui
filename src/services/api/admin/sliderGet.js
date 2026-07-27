import axios from "axios"
const endpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
export const getSlider = async () => {
    const res = await axios.get(endpoint+"/api/admin/slider")
    if (!res) {
        return
    }
    return res.data.slid
}

export const postSlider = async (name, img) => {
    const res = await axios.post(endpoint+"/api/admin/slider", {
        name, img
    })
    return res.data
}
