import { getSession, useSession } from "@/lib/auth-client";
import { Button, Separator } from "@heroui/react";
import { Icon } from "@iconify/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const RightSideSection = () => {
  return (
    <div>
      {/* Login Btn */}
      <div className="flex w-full max-w-xs flex-col gap-3">
        <Button
          className="w-full text-white bg-gray-700 hover:bg-accent"
          variant="tertiary"
        >
          <Icon icon="devicon:google" />
          Sign in with Google
        </Button>
        <Button
          className="w-full text-white bg-gray-700 hover:bg-accent"
          variant="tertiary"
        >
          <Icon icon="mdi:github" />
          Sign in with GitHub
        </Button>
        <Button
          className="w-full text-white bg-gray-700 hover:bg-accent "
          variant="tertiary"
        >
          <Icon icon="ion:logo-apple" />
          Sign in with Apple
        </Button>
      </div>

      {/* Social Btn */}
      <h3 className="ml-4 font-semibold xl:text-xl my-4">Find us on</h3>

      <div className="max-w-md mx-4 bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
        {/* Facebook */}
        <div className="flex items-center gap-4 px-5 py-4 hover:bg-gray-50 transition cursor-pointer">
          <div className="p-3 rounded-full bg-blue-100 text-blue-600 text-lg">
            <FaFacebook />
          </div>
          <div className="flex-1">
            <p className="font-medium text-gray-800">Facebook</p>
            <p className="text-xs text-gray-500">Follow our updates</p>
          </div>
        </div>

        <Separator />

        {/* Twitter */}
        <div className="flex items-center gap-4 px-5 py-4 hover:bg-gray-50 transition cursor-pointer">
          <div className="p-3 rounded-full bg-sky-100 text-sky-600 text-lg">
            <FaTwitter />
          </div>
          <div className="flex-1">
            <p className="font-medium text-gray-800">Twitter</p>
            <p className="text-xs text-gray-500">Latest breaking news</p>
          </div>
        </div>

        <Separator />

        {/* Instagram */}
        <div className="flex items-center gap-4 px-5 py-4 hover:bg-gray-50 transition cursor-pointer">
          <div className="p-3 rounded-full bg-pink-100 text-pink-600 text-lg">
            <FaInstagram />
          </div>
          <div className="flex-1">
            <p className="font-medium text-gray-800">Instagram</p>
            <p className="text-xs text-gray-500">Behind the scenes</p>
          </div>
        </div>
      </div>

      {/* Trending Tags */}
      <div className="max-w-md mx-4 mt-6 bg-white rounded-2xl shadow-md border border-gray-100 p-5">
        <h4 className="text-lg font-semibold text-gray-800 mb-3">
          Trending Topics
        </h4>

        <div className="flex flex-wrap gap-2">
          {[
            "Politics",
            "Technology",
            "Sports",
            "World",
            "Health",
            "Business",
          ].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 cursor-pointer transition"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="max-w-md mx-4 mt-6 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
        <h4 className="text-lg font-semibold text-gray-800">Stay Updated</h4>

        <p className="text-sm text-gray-500 mt-1">
          Get the latest news delivered straight to your inbox.
        </p>

        <div className="mt-4 flex flex-col gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2.5 rounded-lg text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300 transition"
          />

          <Button className="bg-black text-white font-medium hover:bg-gray-800 transition">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RightSideSection;
