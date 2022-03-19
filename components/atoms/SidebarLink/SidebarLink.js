import Link from 'next/link';

function SidebarLink({ text, active, href }) {
    return (
        <Link href={href} passHref>
            <div className={`uppercase py-3 px-4 font-semibold ${active ? 'text-orange bg-gray/50'
                : 'text-primary'} hover:text-orange hover:bg-gray/50 cursor-pointer rounded-sm`}>
                <a>{text}</a>
            </div>
        </Link>
    )
}

export default SidebarLink