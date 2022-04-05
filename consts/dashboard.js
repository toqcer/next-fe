import {
  BiDesktop,
  BiCog,
  BiKey,
  BiUser,
  BiPackage,
  BiStore,
  BiCart,
  BiQuestionMark,
  BiShow,
  BiPencil,
  BiUpload,
} from "react-icons/bi";

const sidebarProps = [
  {
    children: [
      {
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
    ],
  },

  // Product
  {
    children: [
      {
        text: "product",
        href: "/admin/product",
        icon: () => <BiPackage />,
        children: [
          {
            text: "List",
            href: "/admin/product/list",
            icon: () => <BiUser />,
          },
          {
            text: "Show",
            href: "/admin/pruduct/show",
            icon: () => <BiShow />,
          },
          {
            text: "Create",
            href: "/admin/product/create",
            icon: () => <BiPencil />,
          },
          {
            text: "Update",
            href: "/admin/product/update",
            icon: () => <BiUpload />,
          },
        ],
      },
      {
        text: "marketplace",
        href: "/admin/marketplace",
        icon: () => <BiStore />,
      },
    ],
  },
  {
    children: [
      {
        text: "order management",
        href: "order",
        icon: () => <BiCart />,
      },
      {
        text: "faq management",
        href: "faq",
        icon: () => <BiQuestionMark />,
      },
    ],
  },
];

export default sidebarProps;
