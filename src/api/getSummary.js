import { getInstance, routes } from "./axiosInstance";

const getSummary = async (token) => {
    try {
        const response = await getInstance(token).get(routes.getSummarys);
        const { data } = response;
        return data;
    } catch (err) {
        return err;
    }
}

export default getSummary;