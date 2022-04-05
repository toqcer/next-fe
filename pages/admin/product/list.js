import AdminTemplates from "@components/templates/admin/AdminTemplates";
import { Search, Table } from "@components/molecules/";
import { useState, useEffect } from "react";
import Pagination from "@components/molecules/Pagination/Pagination";
import PaginationItem from "@components/molecules/Pagination/PaginationItem";
import { BiExpandAlt } from "react-icons/bi";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
import axios from "axios";

const fetchDataProduct = async (params, search) => {
  const sortType = ["ASC", "DESC"];
  try {
    let { order_by, sort_type, page, size } = params;
    search = `search=${search}&`;
    order_by = `order_by=${order_by}&`;
    sort_type = `sort_type=${sortType[sort_type]}&`;
    const response = await axios.get(`v1/product/?${search}${order_by}${sort_type}page=${page}&size=${size}`,
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
    "purchase",
    "price",
    "markup",
    "supplier",
    "description",
  ];
  const [search, setSearch] = useState("");
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
      const json = await fetchDataProduct(params, search);
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
      let sort_type = params.sort_type;
      if (dataOrder === "purchase" || dataOrder === "markup") {
        dataOrder += "_price";
      }
      if (params.order_by === dataOrder) {
        sort_type = Number(!sort_type);
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
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              onClick={async () => {
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
          <Table>
            <thead>
              <tr>
                <th className="py-4 pr-3 font-bold">No</th>
                {labels.map((label, index) => (
                  <th
                    key={index}
                    className={`py-4 pr-3 font-bold ${
                      index !== labels.length - 1 && "w-[10%]"
                    }`}
                  >
                    <span className="capitalize float-left">{label}</span>
                    {label !== "supplier" &&
                      label !== "description" &&
                      label !== "code" && (
                        <span
                          data-order={label}
                          onClick={(e) => handdleChangeParams(e)}
                          className="float-right -rotate-45 cursor-pointer"
                        >
                          <BiExpandAlt />
                        </span>
                      )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {datas.length !== 0 &&
                datas.map((data, index) => (
                  <tr key={index} className="border-y-gray-300">
                    <td className="font-bold text-dark-gray py-4 px-1 align-baseline">
                      {(params.page - 1) * params.size + (index + 1)}
                    </td>
                    <td className="font-bold text-dark-gray py-4 px-1 align-baseline">
                      <div className="h-24 overflow-y-hidden">{data.title}</div>
                    </td>
                    <td className="font-bold text-dark-gray py-4 px-1 align-baseline">
                      {data.id}
                    </td>
                    <td className="font-bold text-dark-gray py-4 px-1 align-baseline">
                      {data.code}
                    </td>
                    <td className="font-bold text-dark-gray py-4 px-1 align-baseline">
                      {data.stock}
                    </td>
                    <td className="font-bold text-dark-gray py-4 px-1 align-baseline">
                      {data.purchase_price}
                    </td>
                    <td className="font-bold text-dark-gray py-4 px-1 align-baseline">
                      {data.price}
                    </td>
                    <td className="font-bold text-dark-gray py-4 px-1 align-baseline">
                      {data.markup_price}
                    </td>
                    <td className="font-bold text-dark-gray py-4 px-1 align-baseline">
                      <a href={data.supplier_url} className="font-normal">
                        {data.supplier_url}
                      </a>
                    </td>
                    <td className="font-bold text-dark-gray py-4 px-1 h-6 align-baseline">
                      <div className="h-24 text-ellipsis overflow-y-hidden">
                        {data.description}
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
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
