import axios from "axios";
import { DashboardCard } from "@components/molecules";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Cookie from "js-cookie";
import MyChart from "lib/ChartJs";
import styles from "styles/Dashboard.module.scss";
import AdminTemplates from "@components/templates/admin/AdminTemplates";
import {
  BiBarChart,
  BiPieChart,
  BiUserPlus,
  BiBadgeCheck,
} from "react-icons/bi";

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
    } catch (e) {
      const status = e.response?.status;
      if (status === 403) {
        router.reload();
      }
    }
  }, []);

  return (
    <AdminTemplates title="dashboard">
      <div className="flex flex-wrap py-10 sm:py-20 gap-4">
        <DashboardCard
          title="total order"
          bgIcon="bg-[#EF4444]"
          Icon={<BiBarChart size={24} />}
          value={data.total_order}
          valueLastWeek={data.order_last_week}
        />
        <DashboardCard
          title="total sales"
          bgIcon="bg-[#F97316]"
          Icon={<BiPieChart size={24} />}
          value={data.total_sales}
          valueLastWeek={data.sales_last_week}
        />
        <DashboardCard
          title="total user"
          bgIcon="bg-[#EC4899]"
          Icon={<BiUserPlus size={24} />}
          value={data.total_user}
          valueLastWeek={data.user_last_week}
        />
        <DashboardCard
          title="order completed"
          bgIcon="bg-[#0EA5E9]"
          Icon={<BiBadgeCheck size={24} />}
          value={data.total_order_completed}
          valueLastWeek={data.order_completed_last_week}
        />
      </div>
      <div className="w-full">
        <div className="flex gap-4 flex-col xl:flex-row w-full">
          <div
            className={`bg-midnight-blue p-4 h-96 shadow-md shadow-primary md:h-[550px] xl:w-2/3 lg:px-10 lg:py-5 mb-6 rounded-lg`}
          >
            <MyChart
              type="line"
              tickColor="#FFFFFF"
              datas={data.sales_chart}
              title="Sales Chart"
              gridColor="rgba(229, 229, 229, 0.5)"
            />
          </div>
          <div className="bg-white p-4 h-96 shadow-md shadow-gray-500 md:h-[550px] xl:min-w-[33%] lg:px-10 lg:py-5 mb-8 rounded-lg">
            <MyChart
              type="bar"
              tickColor="#000000"
              bgColor={{ y: "#313A55" }}
              borderColor={{ y: "#313A55" }}
              datas={data.order_chart}
              title="Order Chart"
              gridColor="rgba(20, 33, 61, 0.5)"
            />
          </div>
        </div>

        <div>
          <p className="font-bold text-primary text-2xl mb-3">OVERVIEW</p>
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg">Order Notifications</p>
          </div>
          <div className="overflow-hidden overflow-x-scroll">
            <table className="table-fixed mt-4 w-full">
              <tbody>
                <tr className="border-y border-y-gray-300">
                  <td className="py-4 w-48">toqcer@gmail.com</td>
                  <td className="font-bold py-4 w-72">
                    Bariq Dharmawan -
                    <span className="text-gray-400 font-normal">
                      Order ASUS ROG
                    </span>
                  </td>
                  <td className="font-bold text-dark-gray py-4 text-right w-64">
                    <time>
                      Minggu
                      <span className="font-normal mx-3">19 Maret 2022</span>
                      17.25
                    </time>
                  </td>
                </tr>
                <tr className=" border-y border-y-gray-300">
                  <td className="py-4">toqcer@gmail.com</td>
                  <td className="font-bold py-4">
                    Bariq Dharmawan -
                    <span className="text-gray-400 font-normal">
                      Order ASUS ROG
                    </span>
                  </td>
                  <td className="font-bold text-dark-gray py-4 text-right">
                    <time>
                      Minggu
                      <span className="font-normal mx-3">19 Maret 2022</span>
                      17.25
                    </time>
                  </td>
                </tr>
                <tr className=" border-y-gray-300">
                  <td className="py-4">toqcer@gmail.com</td>
                  <td className="font-bold py-4">
                    Bariq Dharmawan -
                    <span className="text-gray-400 font-normal">
                      Order ASUS ROG
                    </span>
                  </td>
                  <td className="font-bold text-dark-gray py-4 text-right">
                    <time>
                      Minggu
                      <span className="font-normal mx-3">19 Maret 2022</span>
                      17.25
                    </time>
                  </td>
                </tr>
                <tr className=" border-y-gray-300">
                  <td className="py-4">toqcer@gmail.com</td>
                  <td className="font-bold py-4">
                    Bariq Dharmawan -
                    <span className="text-gray-400 font-normal">
                      Order ASUS ROG
                    </span>
                  </td>
                  <td className="font-bold text-dark-gray py-4 text-right">
                    <time>
                      Minggu
                      <span className="font-normal mx-3">19 Maret 2022</span>
                      17.25
                    </time>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-right">
            <span
              className=" hover:text-dark-gray text-right text-muted cursor-pointer"
              onClick={() => router.push("/admin/product/list")}
            >
              Show More
            </span>
          </div>
        </div>
      </div>
    </AdminTemplates>
  );
}

export default Dashboard;
