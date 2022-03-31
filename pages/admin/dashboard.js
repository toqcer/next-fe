import axios from "axios";
import { Header, Sidebar, DashboardCard, Footer } from "@components/molecules";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Cookie from "js-cookie";
import MyChart from "lib/ChartJs";
import styles from "styles/Dashboard.module.scss"

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
			const data = response.data.data;
			setData(data);
			// setTimeout(() => {
			// 	setIsLoading(false);
			// }, 2000);
			console.log(data);
		} catch (e) {
			const status = e.response?.status;
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
					<div className="container px-4">
						<Header title="dashboard" />
						<div className="flex flex-wrap py-24 gap-4">
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
						<div className={` bg-midnight-blue shadow-md shadow-primary p-4 lg:px-10 lg:py-5 mb-6 -mt-10 rounded-lg`}>
							<MyChart
								type="line"
								tickColor="#FFFFFF"
								datas={data.sales_chart}
								title="Sales Chart"
							/>
						</div>
						<div className="bg-gay lg:px-10 lg:py-5 mb-8 rounded-lg">
							<MyChart
								type="bar"
								bgColor={{ y: "#14213D" }}
								borderColor={{ y: "#14213D" }}
								datas={data.order_chart}
								title="Order Chart"
							/>
						</div>

						<div>
							<p className="font-bold text-primary text-2xl mb-3">
								OVERVIEW
							</p>
							<div className="flex justify-between items-center">
								<p className="font-bold text-lg">
									Order Notifications
								</p>
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
							<div className="text-right">
								<span className=" hover:text-dark-gray text-right text-muted cursor-pointer"
									onClick={() => router.push('/admin/product/list')}>
									Show More
								</span>
							</div>
						</div>
					</div>
				</section>

				<Footer />
			</main>
		</div>
	);
}

export default Dashboard;