function Button({ children, ...rest }) {
    return (
        <button className='uppercase w-full font-bold bg-orange py-3 rounded-md hover:shadow-md hover:bg-amber-500' {...rest}>
            {children}
        </button>
    )
}

export default Button