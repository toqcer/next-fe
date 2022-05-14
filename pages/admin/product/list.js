import { useState, useEffect } from "react";
import { BiChevronUp, BiChevronDown, BiTrashAlt, BiPencil} from "react-icons/bi";

import { TableCell, TableCellParagraph } from "@components/atoms";
import { Search, Table, Pagination } from "@components/molecules/";
import AdminTemplates from "@components/templates/admin/AdminTemplates";

import getDataProduct from "src/api/getDataProduct";

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
  const [search, setSearch] = useState('');
  const [datas, setDatas] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [params, setParams] = useState({
    order_by: 'id',
    sort_type: 0,
    page: 1,
    size: 10,
    search: '',
  });

  const handleOnSearch = () => {
    setParams({
      ...params,
      page: 1,
      search,
    });
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

  useEffect(() => {
    const fetchDataProduct = async () => {
      const result = await Promise.any([getDataProduct(params)]);
      const { data } = result;
      const { total } = result.pagination;
      setTotalPage(total <= 0 ? 1 : Math.ceil(total / params.size));
      setDatas(data);
    };

    fetchDataProduct();
  }, [params]);

  return (
    <AdminTemplates title="Product List">
      <div className="py-8 sm:py-20 ">
        <header className="flex flex-col justify-between sm:flex-row sm:items-center gap-4">
          <div className="text-sm text-white ">
            <span>Show</span>
            <select
              className="text-black mx-2 px-3 py-1 rounded"
              value={params.size}
              data-params="size"
              onChange={handdleChangeParams}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
            <span>entries</span>
          </div>
          <Search
            maxWidth="sm:max-w-[350px] xl:max-w-[450px] -order-1 sm:order-1"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onClick={handleOnSearch}
          />
        </header>
        <article className="bg-white px-6 py-2 mt-4 shadow-md rounded-lg shadow-gray-500">
          <div className="overflow-hidden overflow-x-scroll">
            <Table className="table-fixed w-[1524px] border-collapse">
              <thead>
                <tr>
                  <th className="py-4 pr-2 font-bold text-sm w-[4%] text-left">
                    No
                  </th>
                  {labels.map((label, index) => (
                    <th
                      key={index}
                      className={`py-4 pr-2 font-bold text-sm ${index === 0 || index === labels.length - 1
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
                              className={`${params.order_by === label &&
                                params.sort_type === 1
                                ? "text-orange"
                                : "text-gray-400"
                                }`}
                            />
                            <BiChevronDown
                              size={20}
                              className={`-mt-2.5 ${params.order_by === label &&
                                params.sort_type === 0
                                ? "text-orange"
                                : "text-gray-400"
                                }`}
                            />
                          </div>
                        )}
                      </div>
                    </th>
                  ))}
                    <th className="py-4 pr-2 font-bold text-sm w-[10%]">Action</th>
                </tr>
              </thead>
              <tbody>
                {datas.length !== 0 &&
                  datas.map((data, index) => (
                    <tr key={index}>
                      <TableCellParagraph data={(params.page - 1) * params.size + (index + 1)} />
                      <TableCellParagraph data={data.title} />
                      <TableCellParagraph data={data.id} />
                      <TableCellParagraph data={data.code} />
                      <TableCellParagraph data={data.stock} />
                      <TableCellParagraph data={data.purchase_price} />
                      <TableCellParagraph data={data.price} />
                      <TableCellParagraph data={data.markup_price} />
                      <TableCellParagraph data={data.supplier_url} onClick={() => window.location.href = data.supplier_url} />
                      <TableCellParagraph data={data.description} />
                      <TableCell>
                        <div className="flex items-center justify-center space-x-4">
                          <button className="h-10 w-10 bg-dark-gray rounded-sm hover:bg-red-600">
                            <BiTrashAlt size={24} className="text-muted"/>
                          </button>
                          <button className="h-10 w-10 bg-dark-gray rounded-sm hover:bg-[#35D227]">
                            <BiPencil size={24} className="text-muted"/>
                          </button>
                        </div>
                      </TableCell>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
          <div className="flex flex-col justify-between lg:flex-row items-center py-4 md:py-8 gap-4">
            <h3 className="text-black font-bold text-lg">
              Showing page {params.page} from {totalPage} pages
            </h3>
            <Pagination
              className="grow-0 w-full justify-center md:w-max"
              totalPage={totalPage}
              currentPage={params.page}
              onClick={handdleChangeParams}
            />
          </div>
        </article>
      </div >
    </AdminTemplates >
  );
}

export default ProductList;
