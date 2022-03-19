function DropdownContainer({ children }) {
    return (
        <ul className={`ml-0 mt-2 transition-all duration-300 overflow-hidden`}>
            {children}
        </ul>
    )
}

export default DropdownContainer