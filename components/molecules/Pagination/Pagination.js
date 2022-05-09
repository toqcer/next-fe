import PaginationItem from "@components/molecules/Pagination/PaginationItem";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";

const Pagination = ({ className, currentPage = 1, totalPage = 1, onClick }) => {

	const generatePaginationItems = (totalPage, initialValue = 1) => (
		Array.from({ length: totalPage }, (_, index) => (
			<PaginationItem
				key={index}
				dataPage={index + initialValue}
				onClick={onClick}
				isActive={currentPage === index + initialValue}
			>
				{index + initialValue}
			</PaginationItem>
		))
	)

	return (
		<div className={`${className} flex gap-2`}>
			<PaginationItem
				disabled={currentPage <= 1}
				dataPage="prev"
				onClick={onClick}
			>
				<BiChevronsLeft />
			</PaginationItem>
			<div className="flex overflow-hidden overflow-x-scroll md:overflow-x-auto gap-x-1">
				{totalPage <= 6 ?
					generatePaginationItems(totalPage)
					: (
						<>
							{currentPage <= 3 ? (
								<>
									{generatePaginationItems(4)}
									<PaginationItem disabled />
									<PaginationItem
										dataPage={totalPage}
										onClick={onClick}
										isActive={currentPage === totalPage}
									>
										{totalPage}
									</PaginationItem>
								</>
							) : (
								<>
									<PaginationItem
										dataPage={1}
										onClick={onClick}
										isActive={currentPage === 1}
									>
										1
									</PaginationItem>
									<PaginationItem disabled />
									{totalPage - currentPage < 4 ?
										generatePaginationItems(5, totalPage - 4)
										: (
											<>
												{Array.from({ length: 3 }, (_, index) => (
													<PaginationItem
														key={index}
														dataPage={currentPage - 1 + index}
														onClick={onClick}
														isActive={currentPage === currentPage - 1 + index}
													>
														{currentPage - 1 + index}
													</PaginationItem>
												))}
												<PaginationItem disabled />
												<PaginationItem
													dataPage={totalPage}
													onClick={onClick}
													isActive={currentPage === totalPage}
												>
													{totalPage}
												</PaginationItem>
											</>
										)}
								</>
							)}
						</>
					)}
			</div>
			<PaginationItem
				disabled={currentPage >= totalPage}
				dataPage="next"
				onClick={onClick}
			>
				<BiChevronsRight />
			</PaginationItem>
		</div>
	)
};

export default Pagination;
