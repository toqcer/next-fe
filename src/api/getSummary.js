import { getInstance, routes } from './axiosInstance';

const getSummary = async () => {
  try {
    const response = await getInstance().get(routes.getSummarys);
    const { data } = response;
    return data;
  } catch (err) {
    return err;
  }
};

export default getSummary;
