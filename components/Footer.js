function Footer() {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    }

    return (
        <div className="text-center w-full text-xs py-5">
            Copyright &copy; {getCurrentYear()} ToqCer
        </div>
    )
}

export default Footer