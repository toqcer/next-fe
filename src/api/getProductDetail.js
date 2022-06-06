import { getInstance, routes } from "./axiosInstance";

const getProductDetail = async (path) => {
  try {
    const response = await getInstance().get(routes.getProductDetail(path));
    return response;
  } catch (err) {
    return err;
  }
};

export default getProductDetail;
