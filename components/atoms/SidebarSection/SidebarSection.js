function SidebarSection({ children, border }) {
    return (
        <ul className={`py-4 ${border && 'border-b-2 border-muted'}`}>
            {children}
        </ul>
    )
}

export default SidebarSection