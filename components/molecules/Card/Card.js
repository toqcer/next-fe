function Card({ title, children }) {
    return (
        <div className='w-full h-max bg-gray text-black p-8 space-y-5 rounded-lg'>
            <h3 className="text-center text-xl font-bold">{title}</h3>
            <div className="space-y-6">
                {children}
            </div>
        </div>
    )
}

export default Card