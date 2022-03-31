import AdminTemplates from "@components/templates/admin/AdminTemplates"
import { Search, Table } from "@components/molecules/"
import { useState,useEffect } from 'react';
import Pagination from "@components/molecules/Pagination/Pagination";
import PaginationItem from "@components/molecules/Pagination/PaginationItem";
import {BiExpandAlt} from 'react-icons/bi'
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";

function ProductList() {
    const [size,setSize] = useState(10);
    const [search,setSearch] = useState('');
    const labels = ['title','description','supplier','purchase','price','markup','code','stock','last update']
    // useEffect(async() => {
    //     try {
    //         const response = await axios.get('https://staging-api.toqcer.uloy.dev/v1/product/',{

    //         })
    //     } catch (err) {
            
    //     }
    // }, []);

    return (
        <AdminTemplates title="Product List">
            <div className="w-full">
                <header className="flex justify-between items-center">
                    <div className="text-sm">
                        <span>Show</span>
                        <select 
                        className="text-black mx-2 px-3 py-1 rounded" 
                        value={size}
                        onChange={(e)=>{setSize(e.target.value)}}>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="50">50</option>
                        </select>
                        <span>entries</span>
                    </div>
                    <div>
                      <Search value={search} onChange={(e)=>setSearch(e.target.value)}/>
                    </div>
                </header>
                <article className="bg-white px-8 py-4 mt-4 shadow-md rounded-lg shadow-gray-500">
                    <Table>
                        <thead>
                            <tr>
                                {labels.map((label,index)=>(
                                    <td key={index} className="py-2 pr-3 font-bold">
                                        <div className="flex ">
                                            <span className="capitalize">{label}</span>
                                            <div className="ml-auto -rotate-45">
                                                <BiExpandAlt/>
                                            </div>
                                        </div>
                                    </td>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr className=" border-y-gray-300">
                                <td className="py-4">
                                    Asus TUF
                                </td>
                                <td className="font-bold py-4">
                                    <span className="text-gray-400 font-normal">
                                        Laptop
                                    </span>
                                </td>
                                <td className="font-bold text-dark-gray py-4 ">
                                    <span className="font-normal">
                                        ASUS Indonesia 
                                    </span>
                                </td>
                                <td className="font-bold text-dark-gray py-4">
                                    <span className="font-normal">
                                        $1,300 
                                    </span>
                                </td>
                                <td className="font-bold text-dark-gray py-4">
                                    <span className="font-normal">
                                        $1,200 
                                    </span>
                                </td>
                                <td className="font-bold text-dark-gray py-4">
                                    <span className="font-normal">
                                        $100
                                    </span>
                                </td>
                                <td className="font-bold text-dark-gray py-4">
                                    <span className="font-normal">
                                       AX92FK038FF
                                    </span>
                                </td>
                                <td className="font-bold text-dark-gray py-4">
                                    <span className="font-normal">
                                       143
                                    </span>
                                </td>
                                <td className="font-bold text-dark-gray py-4">
                                    <span className="font-normal">
                                       19/3/2022
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <div className="flex justify-between items-center my-6">
                        <h3 className="text-black font-bold text-lg">Showing page 1 from {size} pages</h3>
                        <Pagination>
                            <PaginationItem href="/">
                                <BiChevronsLeft color="#F59E0B" />
                            </PaginationItem>
                            <PaginationItem href="/" isActive={true}>
                                1
                            </PaginationItem>
                            <PaginationItem href="/">2</PaginationItem>
                            <PaginationItem href="/">3</PaginationItem>
                            <PaginationItem href="/">
                                <BiChevronsRight color="#F59E0B" />
                            </PaginationItem>
                        </Pagination>
                    </div>
                </article>
            </div>
        </AdminTemplates>
    )
}

export default ProductList