import axios from "axios";
import Cookie from "js-cookie";

const apiURL = 'https://staging-api.toqcer.uloy.dev/v1/'

const getInstance = () => {
    const token = Cookie.get("tokenAdmin");

    const instance = axios.create({
        baseURL: apiURL,
        timeout: 60000,
    });

    instance.interceptors.request.use(
        (config) => {
            config.headers.Authorization = token ? `Bearer ${token}` : '';
            return config;
        }
    )

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