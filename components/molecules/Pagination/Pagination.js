const Pagination = ({ children, className }) => {
	return <ul className={`${className} flex flex-wrap gap-2`}>{children}</ul>;
};

export default Pagination;
