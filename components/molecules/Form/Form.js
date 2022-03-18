function Form({ title, children, onSubmit }) {
    return (
        <form className='w-full bg-gray text-black p-8 rounded-lg' onSubmit={onSubmit} >
            <h3 className="text-center text-xl font-bold mb-4">{title}</h3>
            {children}
        </form>
    )
}

export default Form