import Link from "next/link";
function AuthLink({ href, title }) {
    return (
        <Link href={href} passHref>
            <a className="text-muted hover:text-white">{title}</a>
        </Link>
    )
}

export default AuthLink