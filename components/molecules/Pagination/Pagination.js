const Pagination = ({ children, className }) => {
	return <div className={`${className} flex gap-2`}>{children}</div>;
};

export default Pagination;
