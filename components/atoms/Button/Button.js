function Button({ children, className, isDisabled = false, ...rest }) {
    return (
        <button
            className={`uppercase w-full font-bold bg-orange py-2 px-2 hover:shadow-md hover:bg-amber-500 ${className} 
            ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={isDisabled}
            {...rest}
        >
            {children}
        </button>
    );
}

export default Button;
