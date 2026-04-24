import Link from "next/link";
import { CgProfile } from "react-icons/cg";

const NavBar = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Latest News", href: "/news" },
    { name: "World", href: "/world" },
    { name: "Bangladesh", href: "/bangladesh" },
    { name: "Sports", href: "/sports" },
    { name: "Tech", href: "/tech" },
    { name: "About", href: "/about" },
  ];
  return (
    <nav className="container flex-col gap-y-3 sm:flex-row sm:gap-y-0 mx-auto flex  items-center w-full justify-between   mt-5">
      <ul className=" items-center flex-wrap  flex-1 justify-center  gap-4 flex">
        {navLinks.map((link, ind) => (
          <Link
            className="hover:text-foreground text-gray-400"
            href={link.href}
            key={ind}
          >
            {link.name}
          </Link>
        ))}
      </ul>
      {/* Right Side Btn */}
      <div className="flex gap-2 items-center">
        <Link className="text-2xl lg:text-3xl xl:text-4xl" href={"/profile"}>
          <CgProfile />
        </Link>
        <Link
          className="bg-foreground rounded-md text-background px-6 py-2"
          href={"/auth/signin"}
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
