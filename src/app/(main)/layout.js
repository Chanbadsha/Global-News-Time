import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import NavBar from "@/components/shared/NavBar";

import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="flex  flex-col min-h-screen">
      <Header />
      <NavBar />
      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
};

export default MainLayout;
