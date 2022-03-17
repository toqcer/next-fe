function Input({ label, ...rest }) {
    return (
        <div className="space-y-4">
            <label className="font-semibold text-lg text-black uppercase cursor-pointer">
                {label}
                <input className="outline-[#C4C4C4] block my-3 w-full py-2 px-4 rounded-md" {...rest} />
            </label>
        </div>
    )
}

export default Input