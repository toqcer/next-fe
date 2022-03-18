function Input({ label, className, ...rest }) {
    return (
        <div className="w-full">
            {label ? (
                <label className="font-semibold text-lg text-black uppercase cursor-pointer">
                    <span className="mb-2 inline-block">{label}</span>
                    <input className="outline-muted w-full py-2 px-4 rounded-md" {...rest} />
                </label>
            ) : (
                <input className={`bg-white outline-none h-full border-0 w-full py-2 px-4 ${className ? className : ''}`} {...rest} />
            )}
        </div>
    )
}

export default Input