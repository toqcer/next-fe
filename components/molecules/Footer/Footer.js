import { getCurrentYear } from "lib/helper";

function Footer() {
	return (
		<footer className="text-center w-full text-xs py-5 text-muted">
			Copyright &copy; {getCurrentYear()} ToqCer
		</footer>
	);
}

export default Footer;
