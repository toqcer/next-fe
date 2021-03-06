import { getCurrentYear } from "src/helpers/getCurrentYear";

function Footer() {
	return (
		<footer className="text-center w-full text-xs py-7 text-muted">
			Copyright &copy; {getCurrentYear()} ToqCer
		</footer>
	);
}

export default Footer;
