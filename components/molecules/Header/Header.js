import Image from "next/image";
import { Search } from "@components/molecules"
import { Gap } from '@components/atoms';

function Header() {
    return (
        <div className="flex items-center justify-between">
            <h1 className="text-white font-bold text-xl">Dashboard</h1>
            <div className="flex max-w-md w-full">
                <Search />
                <Gap width={48} />
                <Image src="/dummy/avatar.svg" className="rounded-full" height="48" width="48" />
            </div>
        </div>
    )
}

export default Header