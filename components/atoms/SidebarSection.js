function SidebarSection({ children, border, className }) {
  return <ul className={`py-4 ${border && ''} ${className}`}>{children}</ul>;
}

export default SidebarSection;
