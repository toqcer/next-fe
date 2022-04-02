import Link from "next/link";
import PaginationStyle from "./../../../styles/Pagination.module.scss";

const PaginationItem = ({ className, isActive, children, onClick, dataPage,disabled }) => {
	return (
		<button
			className={`${PaginationStyle.pagination__item} ${
				isActive ? PaginationStyle["pagination__item--active"] : ""
			} ${className}`}
			data-page={dataPage}
			onClick={onClick}
			disabled={disabled}
		>
			<span>{children}</span>
			{/* <Link href={href}>
				<span>{children}</span>
			</Link> */}
		</button>
	);
};

export default PaginationItem;
