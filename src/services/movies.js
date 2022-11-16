import axios from "axios"

export const getService = async () => {
    const response = await axios.get("https://vipinfvrtmovies.free.beeceptor.com/movies");
    return response.data;
}