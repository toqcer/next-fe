function Button({ children, className, disabled, ...rest }) {
    return (
        <button
            className={`uppercase w-full font-bold bg-orange py-2 px-2 hover:shadow-md hover:bg-amber-500 ${className} 
            ${disabled ? "opacity-50" : ""}`}
            {...rest}
        >
            {children}
        </button>
    );
}

export default Button;
