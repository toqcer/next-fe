function DropdownContainer({ children }) {
    return (
        <ul className={`m-0 transition-all duration-300 overflow-hidden`}>
            {children}
        </ul>
    )
}

export default DropdownContainer