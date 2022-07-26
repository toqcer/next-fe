function Table({ children, className }) {
  return <table className={`mt-4 text-black ${className}`}>{children}</table>;
}

export default Table;
