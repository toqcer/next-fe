import { getInstance, routes } from "./axiosInstance";

const deleteMarketplaceList = (marketplaceId) => {
    try{
        const response = await getInstance().get(routes.deleteMarketplaceList(marketplaceId));
        const { data } = response;
        return data;
    }catch(err){
        return err;
    }
}

export default deleteMarketplaceList;