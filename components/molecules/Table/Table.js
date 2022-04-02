function Table({children,className}) {
  return (
        <table className={`mt-4 w-full text-black ${className}`}>
            {children}
        </table>
  )
}

export default Table