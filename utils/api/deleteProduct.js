import { getInstance, routes } from './axiosInstance';

const deleteProduct = async (productId) => {
  try {
    const response = await getInstance().delete(
      routes.deleteProduct(productId),
    );
    return response;
  } catch (err) {
    return err;
  }
};

export default deleteProduct;
