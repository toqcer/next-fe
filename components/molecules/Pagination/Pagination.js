const Pagination = ({ children, className }) => {
	return <div className={`${className} flex flex-wrap gap-2`}>{children}</div>;
};

export default Pagination;
