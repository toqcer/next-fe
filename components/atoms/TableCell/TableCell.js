const TableCell = ({ children }) => {
    return (
        <td className="font-bold text-dark-gray text-sm py-3 px-2 border-gray-300/50 border-y-2">
            {children}
        </td>
    )
}

export default TableCell