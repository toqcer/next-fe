import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Cookie from "js-cookie";
import {
  BiBarChart,
  BiPieChart,
  BiUserPlus,
  BiBadgeCheck,
} from "react-icons/bi";

import { Button, Input } from "@components/atoms";
import { DashboardCard } from "@components/molecules";
import AdminTemplates from "@components/templates/admin/AdminTemplates";

const ProfileAdmin = (props) => {
  const [data, setData] = useState("");
  const router = useRouter();

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
    } catch (e) {
      const status = e.response?.status;
      if (status === 403) {
        router.reload();
      }
    }
  }, []);

  return (
    <AdminTemplates title="Profile">
      
      <div className="mt-12 ">
        <div className="min-w[400px] flex w-[70%] justify-between bg-midnight-blue text-white p-5 rounded-lg">
          <div className="flex-1 mb-5">
            <div className="font-bold text-lg">
              <h3 className="capitalize ">my account</h3>
              <span className="uppercase text-muted mt-2">
                admin information
              </span>
            </div>
            <div className="mt-6">
              <div>
                <Input
                  label="name"
                  labelColor="text-white"
                  placeholder="Nama"
                />
              </div>
              <div className="flex gap-x-2 mt-4">
                <div className="flex-1">
                  <Input
                    label="Email"
                    type="email"
                    labelColor="text-white"
                    placeholder="Email"
                  />
                </div>
                <div className="flex-1">
                  <Input
                    label="password"
                    type="password"
                    labelColor="text-white"
                    placeholder="Password"
                  />
                </div>
              </div>
            </div>
            <div className="py-4 max-w-[160px]">
              <Button className="text-black h-12 rounded-md">Edit</Button>
            </div>
          </div>
          <div className="w-1/3 relative">
            <div className="absolute top-1/2 w-[320px] h-full -translate-y-1/2 left-14">
              <Image src="/dummy/avatar.svg" layout="fill" alt="avatarpict" />
            </div>
          </div>
        </div>
      </div>
    </AdminTemplates>
  );
};

export default ProfileAdmin;

// export async function getServerSideProps(ctx) {
//     const cookie = ctx.req ? ctx.req.cookies.tokenAdmin : null;
//     const refreshAdmin = ctx.req ? ctx.req.cookies.refreshAdmin : null;
//     fetch('http://localhost:3000/api/refresh',
//         {
//             method: 'post',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//                 ,
//             },
//             body: {
//                 expires: 3600
//             }
//         })

//     return {
//         props: {

//         }
//     }
// }
