function Button({ children, className, ...rest }) {
    return (
        <button className={`uppercase w-full font-bold bg-orange py-4 px-4 hover:shadow-md hover:bg-amber-500 ${className}`} {...rest}>
            {children}
        </button>
    )
}

export default Button