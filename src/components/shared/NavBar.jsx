"use client";
import { Moon, Sun } from "@gravity-ui/icons";
import { Switch } from "@heroui/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";
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
  const { theme, setTheme } = useTheme();
  const [user, setUser] = useState(false);

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
        <Switch onChange={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {({ isSelected }) => (
            <>
              <Switch.Control
                className={`h-[31px] w-[51px] bg-blue-500 ${isSelected ? "bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.5)]" : ""}`}
              >
                <Switch.Thumb
                  className={`size-[27px] bg-white shadow-sm ${isSelected ? "ms-[22px] shadow-lg" : ""}`}
                >
                  <Switch.Icon>
                    {isSelected ? (
                      <Moon className="size-4 text-cyan-600" />
                    ) : (
                      <Sun className="size-4 text-blue-600" />
                    )}
                  </Switch.Icon>
                </Switch.Thumb>
              </Switch.Control>
            </>
          )}
        </Switch>

        {user ? (
          <Link className="text-2xl lg:text-3xl xl:text-4xl" href={"/profile"}>
            <CgProfile />
          </Link>
        ) : (
          <Link
            className="bg-foreground rounded-md text-background px-6 py-2"
            href={"/auth/signin"}
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
