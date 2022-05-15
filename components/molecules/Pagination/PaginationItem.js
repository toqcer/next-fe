import PaginationStyle from "styles/Pagination.module.scss";

const PaginationItem = ({ className, isActive, children, onClick, disabled }) => {
	return (
		<button
			className={`${PaginationStyle.pagination__item} ${isActive ? PaginationStyle["pagination__item--active"] : ""
				} ${className ? className : ''}`}
			onClick={onClick}
			disabled={disabled}
		>
			<span>{children || "..."}</span>
		</button>
	);
};

export default PaginationItem;
