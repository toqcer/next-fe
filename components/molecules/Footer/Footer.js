function Footer() {
	const getCurrentYear = () => {
		return new Date().getFullYear();
	};

	return (
		<footer className="text-center w-full text-xs py-5 text-muted">
			Copyright &copy; {getCurrentYear()} ToqCer
		</footer>
	);
}

export default Footer;
