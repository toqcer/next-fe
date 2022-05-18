import TableCell from "./TableCell"

const TableCellParagraph = ({ text, href }) => {
    return (
        <TableCell>
            <div className="h-24">
                {href ? (
                    <a
                        className='cursor-pointer overflow-hidden w-full h-full text-ellipsis'
                        href={href}
                        target="_blank"
                    >
                        {text}
                    </a>
                ):(
                    <p
                        className='overflow-hidden w-full h-full text-ellipsis'
                    >
                        {text}
                    </p>
                )}
                
            </div>
        </TableCell>
    )
}

export default TableCellParagraph