import TableCell from "./TableCell"

const TableCellParagraph = ({ onClick, text }) => {
    return (
        <TableCell>
            <div className="h-24">
                <p
                    className={`${!!onClick ? 'cursor-pointer' : ''} overflow-hidden w-full h-full text-ellipsis`}
                    onClick={onClick}
                >
                    {text}
                </p>
            </div>
        </TableCell>
    )
}

export default TableCellParagraph