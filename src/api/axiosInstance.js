import axios from "axios";
import Cookie from "js-cookie";

const apiURL = "https://staging-api.toqcer.uloy.dev/v1/";

const getInstance = () => {
  const token = Cookie.get("tokenAdmin");

  const instance = axios.create({
    baseURL: apiURL,
    timeout: 60000,
  });

  instance.interceptors.request.use((config) => {
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  });

  instance.interceptors.response.use(
    (response) => response,
    (err) => Promise.reject(err)
  );


  // axios interceptors for refresh token for later
  // instance.interceptors.response.use((response) => {
  //   return response
  // }, async function (error) {
  //   const originalRequest = error.config;
  //   if (error.response.status === 403 && !originalRequest._retry) {
  //     originalRequest._retry = true;
  //     const access_token = await refreshAccessToken();            
  //     axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
  //     return instance(originalRequest);
  //   }
  //   return Promise.reject(error);
  // });

  return instance;
};

const routes = {
  adminLogin: "/admin/login",
  getSummarys: "/admin/summary",
  postDataProduct: "/product",
  getDataProducts: (query = "") => `/product/?${query}`,
  getProductDetail: (path = "") => `/product/${path}`,
  deleteProduct: (productId = "") => `/product/${productId}`,
  getMarketplaceList: (query = "") => `/marketplace/?${query}`,
  deleteMarketplaceList: (marketplaceId) => `/marketplace/${marketplaceId}`,
};

export { getInstance, routes };
