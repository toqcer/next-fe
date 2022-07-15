import TableCell from "./TableCell";

const TableCellParagraph = ({ text, href }) => {
  return (
    <TableCell>
      <div className="h-24 text-ellipsis overflow-hidden">
        {href ? (
          <a
            className="cursor-pointer w-full h-full "
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            {text}
          </a>
        ) : (
          <p className="overflow-hidden w-full h-full">{text}</p>
        )}
      </div>
    </TableCell>
  );
};

export default TableCellParagraph;
