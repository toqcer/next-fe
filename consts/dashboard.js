import { BiDesktop, BiCog, BiKey, BiUser, BiPackage, BiStore, BiCart, BiQuestionMark } from "react-icons/bi";

const sidebarProps = [
    {
        border: true,
        children: [{
            text: "dashboard",
            href: "/admin/dashboard",
            icon: () => <BiDesktop />,
        },
        {
            text: "profile",
            href: "/admin/profile",
            icon: () => <BiCog />,
        },
        {
            text: "Admin",
            href: "/admin/manage",
            icon: () => <BiKey />,
        },
        {
            text: "user",
            href: "/admin/user",
            icon: () => <BiUser />,
        },
        ]
    },
    {
        border: true,
        children: [{
            text: "product",
            icon: () => <BiPackage />,
            children: [
                {
                    text: "profile",
                    href: "/admin/dashboard",
                    icon: () => <BiUser />,
                },
                {
                    text: "Admin",
                    href: "/admin/admin",
                    icon: () => <BiKey />,
                }
            ]
        },
        {
            text: "marketplace",
            href: "/admin/marketplace",
            icon: () => <BiStore />,
        },]
    },
    {
        children: [{
            text: "order management",
            href: "order",
            icon: () => <BiCart />,
        },
        {
            text: "faq management",
            href: "faq",
            icon: () => <BiQuestionMark />,
        },]
    }

]

export default sidebarProps;