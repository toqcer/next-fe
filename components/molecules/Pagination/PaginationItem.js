import Link from "next/link";
import PaginationStyle from "./../../../styles/Pagination.module.scss";

const PaginationItem = ({ className, isActive, children, href }) => {
	return (
		<li
			className={`${PaginationStyle.pagination__item} ${
				isActive ? PaginationStyle["pagination__item--active"] : ""
			} ${className}`}
		>
			<Link href={href}>
				<span>{children}</span>
			</Link>
		</li>
	);
};

export default PaginationItem;
