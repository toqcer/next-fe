import AdminTemplates from "@components/templates/admin/AdminTemplates";
import { Search, Table } from "@components/molecules/";
import { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "@components/molecules/Pagination/Pagination";
import PaginationItem from "@components/molecules/Pagination/PaginationItem";
import {
  BiChevronsLeft,
  BiChevronsRight,
  BiChevronUp,
  BiChevronDown,
} from "react-icons/bi";

const fetchDataProduct = async (params, search) => {
  const sortType = ["ASC", "DESC"];
  try {
    let { order_by, sort_type, page, size } = params;
    search = `search=${search}&`;
    order_by = `order_by=${order_by}&`;
    sort_type = `sort_type=${sortType[sort_type]}&`;
    const response = await axios.get(
      `v1/product/?${search}${order_by}${sort_type}page=${page}&size=${size}`,
      {
        baseURL: "https://staging-api.toqcer.uloy.dev/",
      }
    );
    const data = response.data;
    return data;
  } catch (err) {
    throw err;
  }
};

function ProductList() {
  const labels = [
    "title",
    "id",
    "code",
    "stock",
    "purchase_price",
    "price",
    "markup_price",
    "supplier",
    "description",
  ];
  const labelConditions = ["supplier", "description", "code"];
  const [search, setSearch] = useState({
    current: "",
    post: "",
  });
  const [datas, setDatas] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [params, setParams] = useState({
    order_by: "id",
    sort_type: 0,
    page: 1,
    size: 10,
  });

  const getDataProduct = async () => {
    try {
      const json = await fetchDataProduct(params, search.post);
      const { total } = json.pagination;
      const data = json.data;
      setTotalPage(total <= 0 ? 1 : Math.ceil(total / params.size));
      setDatas(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handdleChangeParams = (e) => {
    const dataSize = e.target.dataset.params;
    const dataOrder = e.currentTarget.dataset.order;
    const dataPagination = e.currentTarget.dataset.page;
    if (dataSize === "size") {
      const value = e.target.value;
      return setParams({
        ...params,
        page: 1,
        size: value,
      });
    }
    if (dataOrder) {
      let sort_type = 0;
      if (params.order_by === dataOrder) {
        sort_type = Number(!params.sort_type);
      }
      return setParams({
        ...params,
        sort_type,
        order_by: dataOrder,
      });
    }
    if (dataPagination) {
      if (dataPagination === "prev") {
        dataPagination = params.page - 1;
      }
      if (dataPagination === "next") {
        dataPagination = params.page + 1;
      }
      return setParams({
        ...params,
        page: Number(dataPagination),
      });
    }
  };

  useEffect(async () => {
    await getDataProduct();
  }, [params]);

  return (
    <AdminTemplates title="Product List">
      <div className="my-20 ">
        <header className="flex justify-between items-center">
          <div className="text-sm text-white">
            <span>Show</span>
            <select
              className="text-black mx-2 px-3 py-1 rounded"
              value={params.size}
              data-params="size"
              onChange={(e) => {
                handdleChangeParams(e);
              }}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
            <span>entries</span>
          </div>
          <div>
            <Search
              value={search.current}
              onChange={(e) => {
                setSearch({
                  ...search,
                  current: e.target.value,
                });
              }}
              onClick={async () => {
                let tempSearch = search.current;
                setSearch({
                  post: tempSearch,
                  current: "",
                });
                setParams({
                  ...params,
                  page: 1,
                });
                await getDataProduct();
              }}
            />
          </div>
        </header>
        <article className="bg-white px-8 py-4 mt-4 shadow-md rounded-lg shadow-gray-500">
          {search.post !== "" && <span>Search by {search.post}</span>}
          <div className="overflow-hidden overflow-x-scroll">
            <Table className="table-fixed w-[1524px] border-collapse">
              <thead>
                <tr>
                  <th className="p-4 font-bold text-sm w-[2%] align-middle">
                    No
                  </th>
                  {labels.map((label, index) => (
                    <th
                      key={index}
                      className={`p-4 font-bold text-sm ${
                        index === 0 || index === labels.length - 1
                          ? "w-[15%]"
                          : "w-[10%]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="capitalize">
                          {label.replace("_price", "")}
                        </span>
                        {!labelConditions.some((el) => label.includes(el)) && (
                          <div
                            data-order={label}
                            onClick={(e) => handdleChangeParams(e)}
                            className="cursor-pointer flex flex-col"
                          >
                            <BiChevronUp
                              size={20}
                              className={`${
                                params.order_by === label &&
                                params.sort_type === 1
                                  ? "text-orange"
                                  : "text-gay"
                              }`}
                            />
                            <BiChevronDown
                              size={20}
                              className={`-mt-2.5 ${
                                params.order_by === label &&
                                params.sort_type === 0
                                  ? "text-orange"
                                  : "text-gay"
                              }`}
                            />
                          </div>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {datas.length !== 0 &&
                  datas.map((data, index) => (
                    <tr key={index}>
                      <td className="font-bold text-dark-gray text-sm py-2 px-4 align-baseline border-gray-300/50 border-y-2">
                        {(params.page - 1) * params.size + (index + 1)}
                      </td>
                      <td className="font-bold text-dark-gray text-sm py-2 px-4 align-baseline border-gray-300/50 border-y-2">
                        <div className="h-24 overflow-y-hidden">
                          {data.title}
                        </div>
                      </td>
                      <td className="font-bold text-dark-gray text-sm py-3 px-4 align-baseline border-gray-300/50 border-y-2">
                        {data.id}
                      </td>
                      <td className="font-bold text-dark-gray text-sm py-3 px-4 align-baseline border-gray-300/50 border-y-2">
                        {data.code}
                      </td>
                      <td className="font-bold text-dark-gray text-sm py-3 px-4 align-baseline border-gray-300/50 border-y-2 ">
                        {data.stock}
                      </td>
                      <td className="font-bold text-dark-gray text-sm py-3 px-4 align-baseline border-gray-300/50 border-y-2">
                        {data.purchase_price}
                      </td>
                      <td className="font-bold text-dark-gray text-sm py-3 px-4 align-baseline border-gray-300/50 border-y-2">
                        {data.price}
                      </td>
                      <td className="font-bold text-dark-gray text-sm py-3 px-4 align-baseline border-gray-300/50 border-y-2">
                        {data.markup_price}
                      </td>
                      <td className="font-bold text-dark-gray text-sm py-3 px-4 align-baseline border-gray-300/50 border-y-2 overflow-hidden text-ellipsis ">
                        <a href={data.supplier_url} className="font-normal ">
                          {data.supplier_url}
                        </a>
                      </td>
                      <td className="font-bold text-dark-gray text-sm py-3 px-4 align-baseline border-gray-300/50 border-y-2">
                        <div className="h-24 overflow-y-hidden w-full">
                          {data.description}
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
          <div className="flex justify-between items-center my-6">
            <h3 className="text-black font-bold text-lg">
              Showing page {params.page} from {totalPage} pages
            </h3>
            <Pagination>
              <PaginationItem
                disabled={params.page <= 1}
                dataPage="prev"
                onClick={(e) => handdleChangeParams(e)}
              >
                <BiChevronsLeft />
              </PaginationItem>
              {Array.from({ length: totalPage }, (item, index) => (
                <PaginationItem
                  key={index}
                  dataPage={index + 1}
                  onClick={(e) => handdleChangeParams(e)}
                  isActive={params.page === index + 1}
                >
                  {index + 1}
                </PaginationItem>
              ))}
              <PaginationItem
                disabled={params.page >= totalPage}
                dataPage="next"
                onClick={(e) => handdleChangeParams(e)}
              >
                <BiChevronsRight />
              </PaginationItem>
            </Pagination>
          </div>
        </article>
      </div>
    </AdminTemplates>
  );
}

export default ProductList;
