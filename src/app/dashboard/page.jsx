"use client";

import Link from "next/link";
import { Button, Separator } from "@heroui/react";
import { CgProfile } from "react-icons/cg";
import { useEffect, useState } from "react";
import { getSession, signOut } from "@/lib/auth-client";

const Dashboard = () => {
  // const user = {
  //   name: "Chan Badsha Bhuiyan",
  //   email: "chan@example.com",
  //   role: "Premium Reader",
  // };

  const stats = [
    { title: "Saved Articles", value: 18 },
    { title: "Read Today", value: 6 },
    { title: "Bookmarks", value: 11 },
    { title: "Comments", value: 4 },
  ];

  const activities = [
    { text: "Saved 'World Economy Update'", time: "2h ago" },
    { text: "Read 'Sports Highlights Today'", time: "5h ago" },
    { text: "Commented on Tech News", time: "1d ago" },
    { text: "Bookmarked Bangladesh News", time: "2d ago" },
  ];

  const savedArticles = [
    { title: "Global AI Revolution", category: "Tech" },
    { title: "World Economy Crisis 2026", category: "World" },
    { title: "Bangladesh Cricket Update", category: "Sports" },
  ];

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        setLoading(true);
        const data = await getSession();
        setUser(data?.data?.user || null);
      } catch (err) {
        console.error("Session error:", err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  const handleLogout = async () => {
    await signOut();
    window.location.href = "/auth/signin";
  };

  // LOADING UI
  if (loading) {
    return (
      <div className="min-h-[calc(100vh-54px)] flex items-center justify-center">
        <div className="text-gray-500 animate-pulse">
          Loading your dashboard...
        </div>
      </div>
    );
  }

  // NO USER UI
  if (!user) {
    return (
      <div className="min-h-[calc(100vh-54px)] flex flex-col items-center justify-center gap-3">
        <p className="text-gray-500">You are not logged in</p>
        <Link
          href="/auth/signin"
          className="px-5 py-2 bg-black text-white rounded-lg"
        >
          Login
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-54px)] bg-gray-50 px-4 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* PROFILE */}
        <div className="bg-white rounded-2xl border shadow-sm p-6 text-center">
          <CgProfile className="text-6xl mx-auto text-gray-700" />

          <h2 className="mt-3 text-xl font-semibold">{user.name}</h2>

          <p className="text-sm text-gray-500">{user.email}</p>

          <p className="text-xs mt-2 inline-block px-3 py-1 bg-black text-white rounded-full">
            {user.role}
          </p>

          <Separator className="my-4" />

          <Button className="w-full bg-black text-white hover:bg-gray-800">
            Edit Profile
          </Button>

          <Button
            onClick={handleLogout}
            className="w-full mt-2"
            variant="bordered"
          >
            Logout
          </Button>
        </div>

        {/* STATS */}
        <div className="md:col-span-2 grid grid-cols-2 gap-4">
          {stats.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border p-5 shadow-sm hover:shadow-md transition"
            >
              <p className="text-sm text-gray-500">{item.title}</p>
              <h3 className="text-2xl font-bold mt-1">{item.value}</h3>
            </div>
          ))}
        </div>

        {/* SAVED ARTICLES */}
        <div className="md:col-span-2 bg-white rounded-2xl border shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Saved Articles</h3>

          <div className="space-y-3">
            {savedArticles.map((article, i) => (
              <div
                key={i}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <p className="font-medium text-gray-800">{article.title}</p>
                  <p className="text-xs text-gray-500">{article.category}</p>
                </div>

                <Link
                  href="#"
                  className="text-sm text-orange-500 hover:underline"
                >
                  View
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* RECENT ACTIVITY */}
        <div className="md:col-span-3 bg-white rounded-2xl border shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>

          <ul className="space-y-3 text-sm text-gray-600">
            {activities.map((item, i) => (
              <li key={i} className="flex justify-between">
                <span>{item.text}</span>
                <span className="text-gray-400">{item.time}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* QUICK ACTIONS (NEW SECTION) */}
        <div className="md:col-span-3 bg-white rounded-2xl border shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>

          <div className="flex flex-wrap gap-3">
            <Button variant="bordered">Browse News</Button>

            <Button variant="bordered">Edit Profile</Button>

            <Button variant="bordered">Manage Bookmarks</Button>

            <Button className="bg-black text-white">Upgrade Plan</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
