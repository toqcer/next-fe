import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";

function Header({ title }) {
  const [shown, setShown] = useState(false);
  const router = useRouter();

  const logOut = async () => {
    await axios.post("http://localhost:3000/api/auth/admin/logout");
    router.reload();
  };

  return (
    <div className="flex items-center justify-between py-8">
      <h1 className="text-white font-bold text-xl capitalize">{title}</h1>
      <div className="relative" onClick={() => setShown(!shown)}>
        <div className="rounded-[50%] box-border w-14 h-14 overflow-hidden relative cursor-pointer">
          <Image src="/dummy/avatar2.jpg" layout="fill" alt="avatar" />
        </div>
        <ul
          className={`${
            shown ? "block" : "hidden"
          } bg-white absolute w-48 right-0 rounded-sm text-center`}
        >
          <li
            className="hover:text-dark-gray py-1 hover:bg-slate-200 cursor-pointer border-b-2 border-dark-gray/20"
            onClick={() => router.push("/admin/profile")}
          >
            Profile
          </li>
          <li
            className="hover:text-dark-gray py-1 hover:bg-slate-200 cursor-pointer"
            onClick={logOut}
          >
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
