"use client";
import { getSession } from "@/lib/auth-client";
import NavLink from "@/utils/NavLink";

import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";

const NavBar = () => {
  const [user, setUser] = useState(null);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Latest News", href: "/latest-news" },
    { name: "World", href: "/world-news" },
    { name: "Bangladesh", href: "/bangladesh-news" },
    { name: "Sports", href: "/sports-news" },
    { name: "Tech", href: "/tech-news" },
  ];

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getSession();
      const currentUser = data?.data?.user;

      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  return (
    <nav className="container flex-col gap-y-3 sm:flex-row sm:gap-y-0 mx-auto flex  items-center w-full justify-between py-2">
      <ul className="flex flex-wrap items-center justify-center gap-2 sm:gap-5 flex-1">
        {navLinks.map((link, ind) => (
          <NavLink suppressHydrationWarning href={link.href} key={ind}>
            <span
              suppressHydrationWarning
              className="px-3 py-1.5 rounded-md text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-100 transition"
            >
              {link.name}
            </span>
          </NavLink>
        ))}
      </ul>
      {/* Right Side Btn */}
      <div className="flex items-center gap-3">
        {user ? (
          <Link
            suppressHydrationWarning
            href="/profile"
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            <CgProfile className="text-2xl lg:text-3xl text-gray-800" />
          </Link>
        ) : (
          <Link
            href="/auth/signin"
            suppressHydrationWarning
            className="px-5 py-2 rounded-lg bg-black text-white text-sm font-medium
                 hover:bg-gray-800 transition shadow-sm"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
