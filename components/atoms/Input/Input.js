function Input({ label, className="", labelColor, ...rest }) {
    return (
        <div className="w-full">
            {label ? (
                <label className="font-semibold text-lg text-black uppercase cursor-pointer">
                    <span
                        className={`mb-2 inline-block ${
                            labelColor ? labelColor : "text-black"
                        }`}
                    >
                        {label}
                    </span>
                    <input
                        className="outline-muted w-full py-2 px-4 rounded-md"
                        {...rest}
                    />
                </label>
            ) : (
                <input
                    className={`bg-white outline-1 outline-muted h-full border-0 w-full py-2 px-4 ${className}`}
                    {...rest}
                />
            )}
        </div>
    );
}

export default Input;
