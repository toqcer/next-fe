import { Gap } from "@components/atoms";
import axios from "axios";
import { Header, Sidebar, DashboardCard, Footer } from "@components/molecules";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Cookie from "js-cookie";
import Pagination from "@components/molecules/Pagination/Pagination";
import PaginationItem from "@components/molecules/Pagination/PaginationItem";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";

const Chart = require("chart.js");

function Dashboard() {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState([]);

	useEffect(async () => {
		const token = Cookie.get("tokenAdmin");
		try {
			const response = await axios.get(
				"https://staging-api.toqcer.uloy.dev/v1/admin/summary",
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			setData(response.data.data);
			setTimeout(() => {
				setIsLoading(false);
			}, 2000);
			console.log(data);
		} catch (e) {
			const status = e.response.status;
			if (status === 403) {
				router.reload();
			}
		}
	}, []);

	return (
		<div className="flex h-screen relative">
			<Sidebar />
			<main className="flex-1 overflow-y-auto h-screen">
				<section className="bg-primary">
					<div className="container">
						<Header title="dashboard" />
						<div className="flex flex-wrap py-24 justify-center gap-4">
							<DashboardCard
								title="total order"
								value={data.total_order}
							/>
							<DashboardCard
								title="total sales"
								value={data.total_sales}
							/>
							<DashboardCard
								title="total user"
								value={data.total_user}
							/>
							<DashboardCard
								title="order completed"
								value={data.total_order_completed}
							/>
						</div>
					</div>
				</section>

				<section>
					<div className="container">
						<div className="bg-midnight-blue lg:px-10 lg:py-5 mb-6 -mt-8 rounded-lg"></div>
						<div className="bg-gay lg:px-10 lg:py-5 mb-8 rounded-lg"></div>

						<div>
							<p className="font-bold text-primary text-2xl mb-3">
								OVERVIEW
							</p>
							<div className="flex justify-between items-center">
								<p className="font-bold text-lg">
									Order Notifications
								</p>
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

							<table className="mt-4 w-full">
								<tbody>
									<tr className="border-y border-y-gray-300">
										<td className="py-4">
											toqcer@gmail.com
										</td>
										<td className="font-bold py-4">
											Bariq Dharmawan -
											<span className="text-gray-400 font-normal">
												Order ASUS ROG
											</span>
										</td>
										<td className="font-bold text-dark-gray py-4 text-right">
											<time>
												Minggu
												<span className="font-normal mx-3">
													19 Maret 2022
												</span>
												17.25
											</time>
										</td>
									</tr>
									<tr className=" border-y border-y-gray-300">
										<td className="py-4">
											toqcer@gmail.com
										</td>
										<td className="font-bold py-4">
											Bariq Dharmawan -
											<span className="text-gray-400 font-normal">
												Order ASUS ROG
											</span>
										</td>
										<td className="font-bold text-dark-gray py-4 text-right">
											<time>
												Minggu
												<span className="font-normal mx-3">
													19 Maret 2022
												</span>
												17.25
											</time>
										</td>
									</tr>
									<tr className=" border-y-gray-300">
										<td className="py-4">
											toqcer@gmail.com
										</td>
										<td className="font-bold py-4">
											Bariq Dharmawan -
											<span className="text-gray-400 font-normal">
												Order ASUS ROG
											</span>
										</td>
										<td className="font-bold text-dark-gray py-4 text-right">
											<time>
												Minggu
												<span className="font-normal mx-3">
													19 Maret 2022
												</span>
												17.25
											</time>
										</td>
									</tr>
									<tr className=" border-y-gray-300">
										<td className="py-4">
											toqcer@gmail.com
										</td>
										<td className="font-bold py-4">
											Bariq Dharmawan -
											<span className="text-gray-400 font-normal">
												Order ASUS ROG
											</span>
										</td>
										<td className="font-bold text-dark-gray py-4 text-right">
											<time>
												Minggu
												<span className="font-normal mx-3">
													19 Maret 2022
												</span>
												17.25
											</time>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</section>

				<Footer />
			</main>
		</div>
	);
}

export default Dashboard;

// function getDataSummary() {
//     return axios.get('https://staging-api.toqcer.uloy.dev/v1/admin/summary')
//         .then(res => res.data)
//         .catch(e => { throw e });
// }

// export async function getServerSideProps(ctx) {
//     const cookie = ctx.req ? ctx.req.cookies.tokenAdmin : null;
//     if (cookie) {
//         let config = {
//             headers: {
//                 'Authorization': 'Bearer ' + cookie
//             }
//         }
//         const response = await getDataSummary(config)
//         const {
//             order_chart
//             , order_completed_last_week
//             , order_last_week
//             , sales_chart
//             , sales_last_week
//             , total_order
//             , total_order_completed
//             , total_sales
//             , total_user
//             , user_last_week
//         } = response.data
//         return {
//             props: {
//                 order_chart
//                 , order_completed_last_week
//                 , order_last_week
//                 , sales_chart
//                 , sales_last_week
//                 , total_order
//                 , total_order_completed
//                 , total_sales
//                 , total_user
//                 , user_last_week
//             }, // will be passed to the page component as props
//         }
//     }
//     else {
//         return {
//             props: {

//             }
//         }
//         // throw new Error('Error nih boss');
//     }
// }
