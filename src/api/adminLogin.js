import { getInstance, routes } from "./axiosInstance";

const adminLogin = async (credentials = {}) => {
    try {
        const response = await getInstance().post(routes.adminLogin, credentials);
        const { data } = response;
        return data;
    } catch (err) {
        return err;
    }
}

export default adminLogin;