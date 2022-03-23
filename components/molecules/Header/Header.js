import Image from "next/image";

function Header({ title }) {
    return (
        <div className="flex items-center justify-between py-8">
            <h1 className="text-white font-bold text-xl capitalize">{title}</h1>
            <div className="rounded-[50%] outline outline-2 outline-white outline-offset-2 box-border w-12 h-12 overflow-hidden relative cursor-pointer">
                <Image src="/dummy/avatar2.jpg" layout="fill" />
            </div>
        </div>
    )
}

export default Header