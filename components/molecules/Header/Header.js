import Image from "next/image";

function Header() {
    return (
        <div className="flex items-center justify-between sticky top-0 py-8">
            <h1 className="text-white font-bold text-xl">Dashboard</h1>
            <div className="rounded-[50%] outline outline-2 outline-white outline-offset-2 box-border w-12 h-12 overflow-hidden relative cursor-pointer">
                <Image src="/dummy/avatar2.jpg" layout="fill" />
            </div>
        </div>
    )
}

export default Header