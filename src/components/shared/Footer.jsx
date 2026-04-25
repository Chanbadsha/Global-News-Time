"use client";

import { useApp } from "@/provider/AppProvider";
import Link from "next/link";

const Footer = () => {
  const { setCategoryId } = useApp();
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-white">Global News Times</h2>
          <p className="mt-3 text-sm text-gray-400">
            Delivering the latest global news with accuracy and speed. Stay
            informed with real-time updates from around the world.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/categories/01"
                onClick={() => setCategoryId("01")}
                className="hover:text-white transition"
              >
                Breaking News
              </Link>
            </li>
            <li>
              <Link
                href="/categories/04"
                onClick={() => setCategoryId("04")}
                className="hover:text-white transition"
              >
                Sports
              </Link>
            </li>
            <li>
              <Link
                href="/categories/05"
                onClick={() => setCategoryId("05")}
                className="hover:text-white transition"
              >
                Entertainment
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT / SOCIAL */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Connect With Us
          </h3>
          <p className="text-sm text-gray-400 mb-3">
            Follow us on social media for updates.
          </p>

          <div className="flex gap-4">
            <Link href="#" className="hover:text-white">
              Facebook
            </Link>
            <Link href="#" className="hover:text-white">
              Twitter
            </Link>
            <Link href="#" className="hover:text-white">
              YouTube
            </Link>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Global News Times. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
