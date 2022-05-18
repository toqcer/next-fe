import axios from "axios";

const apiURL = 'https://staging-api.toqcer.uloy.dev/v1/'

const getInstance = (token = '') => {
    const instance = axios.create({
        baseURL: apiURL,
        timeout: 60000,
    });

    if (!!token) {
        instance.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    }

    instance.interceptors.response.use(
        (response) => response,
        (err) => Promise.reject(err)
    );

    return instance;
}

const routes = {
    adminLogin: "/admin/login",
    getSummarys: "/admin/summary",
    getDataProducts: (query = "") => `/product/?${query}`,
    getMarketplaceList: (query = "") => `/marketplace/?${query}`,
    deleteMarketplaceList: (marketplaceId) => `/marketplace/${marketplaceId}`,
}

export { getInstance, routes };