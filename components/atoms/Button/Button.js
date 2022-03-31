function Button({ children, className, ...rest }) {
    return (
        <button className={`uppercase w-full font-bold bg-orange py-2 px-2 hover:shadow-md hover:bg-amber-500 ${className}`} {...rest}>
            {children}
        </button>
    )
}

export default Button