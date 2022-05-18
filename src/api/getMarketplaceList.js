import { getInstance, routes } from "./axiosInstance";

const getMarketplaceList = async ({
    page,
    order_by,
    sort_type,
    size,
    search
}) => {
    const sortType = ["ASC", "DESC"];
    const querySearch = search ? `search=${search}&` : "";
    const queryPage = page ? `page=${page}&` : "";
    const queryOrderBy = order_by ? `order_by=${order_by}&` : "";
    const querySortType = sort_type ? `sort_type=${sortType[sort_type]}&` : "";
    const querySize = size ? `size=${size}&` : "";
    const query = querySearch + queryPage + queryOrderBy + querySortType + querySize;

    try {
        const response = await getInstance().get(routes.getMarketplaceList(query));
        const { data } = response;
        return data;
    } catch (err) {
        return err;
    }
}

export default getMarketplaceList;