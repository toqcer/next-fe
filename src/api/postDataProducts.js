import { getInstance, routes } from "./axiosInstance";

const getSummary = async (payload) => {
  try {
    const response = await getInstance().post(routes.postDataProduct, payload);
    const { data } = response;
    return data;
  } catch (err) {
    return err;
  }
};

export default getSummary;
