import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathName = usePathname();
  const isActive = pathName === href;
  return (
    <Link
      className={`${isActive ? "border-b border-b-green-500" : ""} text-gray-500 font-semibold text-lg hover:text-black`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;
