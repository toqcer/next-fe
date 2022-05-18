import { useState, useEffect, useReducer } from "react";
import { BiChevronUp, BiChevronDown, BiPencil, BiTrashAlt} from "react-icons/bi";

import { TableCell, TableCellParagraph } from "@components/atoms";
import { Search, Table, Pagination, ActionButton } from "@components/molecules/";
import AdminTemplates from "@components/templates/admin/AdminTemplates";

import getDataProduct from "src/api/getDataProduct";
import { labels , labelConditions } from "consts/List/label";
import { listReducer as reducer } from "@src/reducer/listReducer";

function ProductList() {
  const initialState = {
    order_by: 'id',
    sort_type: 0,
    page: 1,
    size: 10,
    search: '',
  }

  const [search, setSearch] = useState('');
  const [deletedId, setDeletedId] = useState('');
  const [datas, setDatas] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [params, dispatch] = useReducer(reducer,initialState);

  const handleChangeDataOrder = (orderBy) => {
    let sortType = 0;
    if (params.order_by === orderBy) {
      sortType = Number(!params.sort_type);
    }
    return {type: "SET_ORDER", payload: {order: orderBy, sort: sortType}}
  }

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
              onChange={(e) => dispatch({type: "SET_SIZE", payload: {size: parseInt(e.target.value)}})}
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
            onClick={()=> dispatch({type: "SET_SEARCH", payload:{ search }})}
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
                            onClick={() => dispatch(handleChangeDataOrder(label))}
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
                      <TableCellParagraph text={(params.page - 1) * params.size + (index + 1)} />
                      <TableCellParagraph text={data.title} />
                      <TableCellParagraph text={data.id} />
                      <TableCellParagraph text={data.code} />
                      <TableCellParagraph text={data.stock} />
                      <TableCellParagraph text={data.purchase_price} />
                      <TableCellParagraph text={data.price} />
                      <TableCellParagraph text={data.markup_price} />
                      <TableCellParagraph text={data.supplier_url} href={data.supplier_url} />
                      <TableCellParagraph text={data.description} />
                      <TableCell>
                        <div className="flex items-center justify-center">
                          <ActionButton 
                            text="edit" 
                            className="bg-light-orange hover:bg-orange rounded-tl-lg rounded-bl-lg"
                            Icon={<BiPencil size={19}/>}
                          />
                          <ActionButton 
                            text="Delete" 
                            className="bg-light-danger hover:bg-danger rounded-tr-lg rounded-br-lg"
                            onClick={()=>setDeletedId(data.id)}
                            Icon={<BiTrashAlt size={19}/>}
                          />
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
              onClick={dispatch}
            />
          </div>
        </article>
      </div >
    </AdminTemplates >
  );
}

export default ProductList;
