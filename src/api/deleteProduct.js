import { getInstance, routes } from "./axiosInstance";

const deleteProduct = (productId) => {
    try{
        const response = getInstance().delete(routes.deleteProduct(productId));
        return response;
    }catch(err){
        return err;
    }
}

export default deleteProduct;