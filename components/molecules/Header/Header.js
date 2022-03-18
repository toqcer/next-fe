import { Input } from '@components/atoms';
import { FiSearch } from 'react-icons/fi';
import Image from "next/image";

function Header() {
    return (
        <div className="flex items-center justify-between">
            <h1 className="text-white font-bold text-2xl">Dashboard</h1>
            <div className="flex max-w-md w-full">
                <div className="flex mr-12 flex-1 bg-white rounded-sm overflow-hidden">
                    <Input placeholder="Search Input" className="rounded-none" />
                    <button className="py-3 px-4 bg-orange rounded-r-sm ml-auto">
                        <FiSearch color="white" />
                    </button>
                </div>
                <Image src="/dummy/avatar.svg" className="rounded-full" height="48" width="48" />
            </div>
        </div>
    )
}

export default Header