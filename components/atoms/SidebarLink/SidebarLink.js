import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BiChevronRight } from "react-icons/bi";

import MenuStyle from "/styles/Menu.module.scss";

function SidebarLink({ text, href, Icon, children, className }) {
  const router = useRouter();
  const pathName = router.asPath;
  const [isOpen, setIsOpen] = useState(() => {
    if (pathName.includes(href)) return true;
    return false;
  });

  return (
    <>
      {children ? (
        <li
          className={`uppercase font-semibold text-dark-gray rounded-sm list-none flex ${
            children && "flex-col"
          }`}
        >
          <span
            className={`${MenuStyle["sidebar-link"]} ${
              isOpen && MenuStyle["dropdown-close"]
            } w-full px-6 py-3 cursor-pointer inline-flex gap-x-2 items-center hover:text-orange hover:bg-gay/30 `}
            onClick={() => setIsOpen(!isOpen)}
          >
            {Icon}
            {text}
            <span
              className={`${MenuStyle["arrow-dropdown"]} transition-transform duration-300 ml-auto`}
            >
              <BiChevronRight />
            </span>
          </span>
          {children}
        </li>
      ) : (
        <Link href={href} passHref>
          <li
            className={`${MenuStyle["sidebar-link"]} uppercase font-semibold ${
              pathName.includes(href) ? "active" : "text-dark-gray "
            } rounded-sm list-none flex space-x-2`}
          >
            <span
              className={`w-full space-x-2 px-6 ${className} cursor-pointer inline-flex gap-x-2 items-center hover:text-orange hover:bg-gay/30`}
            >
              {Icon}
              {text}
            </span>
          </li>
        </Link>
      )}
    </>
  );
}

export default SidebarLink;
