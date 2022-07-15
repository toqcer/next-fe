import PaginationItem from "@components/molecules/Pagination/PaginationItem";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";

const Pagination = ({ className, currentPage = 1, totalPage = 1, onClick }) => {
  const generatePaginationItems = (totalPage, initialValue = 1) =>
    Array.from({ length: totalPage }, (_, index) => (
      <PaginationItem
        key={index}
        onClick={() =>
          onClick({ type: "SET_PAGE", payload: { page: index + initialValue } })
        }
        isActive={currentPage === index + initialValue}
      >
        {index + initialValue}
      </PaginationItem>
    ));

  const renderPagination = () => {
    const Buffer = [];
    if (totalPage <= 6) {
      return generatePaginationItems(totalPage);
    }
    if (currentPage <= 3) {
      Buffer.push(generatePaginationItems(4));
      Buffer.push(
        <>
          <PaginationItem disabled />
          <PaginationItem
            onClick={() =>
              onClick({ type: "SET_PAGE", payload: { page: totalPage } })
            }
            isActive={currentPage === totalPage}
          >
            {totalPage}
          </PaginationItem>
        </>
      );
      return Buffer;
    }
    Buffer.push(
      <>
        <PaginationItem
          onClick={() => onClick({ type: "SET_PAGE", payload: { page: 1 } })}
          isActive={currentPage === 1}
        >
          1
        </PaginationItem>
        <PaginationItem disabled />
      </>
    );

    if (totalPage - currentPage < 4) {
      Buffer.push(generatePaginationItems(5, totalPage - 4));
    } else {
      Buffer.push(
        <>
          {Array.from({ length: 3 }, (_, index) => (
            <PaginationItem
              key={index}
              onClick={() =>
                onClick({
                  type: "SET_PAGE",
                  payload: { page: currentPage - 1 + index },
                })
              }
              isActive={currentPage === currentPage - 1 + index}
            >
              {currentPage - 1 + index}
            </PaginationItem>
          ))}
          <PaginationItem disabled />
          <PaginationItem
            onClick={() =>
              onClick({ type: "SET_PAGE", payload: { page: totalPage } })
            }
            isActive={currentPage === totalPage}
          >
            {totalPage}
          </PaginationItem>
        </>
      );
    }
    return Buffer;
  };

  return (
    <div className={`${className} flex gap-2`}>
      <PaginationItem
        disabled={currentPage <= 1}
        onClick={() => onClick({ type: "PREV" })}
      >
        <BiChevronsLeft />
      </PaginationItem>
      <div className="flex overflow-hidden overflow-x-scroll md:overflow-x-auto gap-x-1">
        {renderPagination()}
      </div>
      <PaginationItem
        disabled={currentPage >= totalPage}
        onClick={() => onClick({ type: "NEXT" })}
      >
        <BiChevronsRight />
      </PaginationItem>
    </div>
  );
};

export default Pagination;
