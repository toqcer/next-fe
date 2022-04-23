const TableCell = ({ onClick, data }) => {
    return (
        <td className="font-bold text-dark-gray text-sm py-3 px-2 align-baseline border-gray-300/50 border-y-2">
            <div className="h-24">
                <p
                    className={`${!!onClick ? 'cursor-pointer' : ''} overflow-hidden w-full h-full text-ellipsis`}
                    onClick={onClick}
                >
                    {data}
                </p>
            </div>
        </td>
    )
}

export default TableCell