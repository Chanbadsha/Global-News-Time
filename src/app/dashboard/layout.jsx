import Header from "@/components/shared/Header";
import NavBar from "@/components/shared/NavBar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <Header />

      {/* Sticky Navbar */}
      <div className="sticky top-0 z-50 bg-white shadow-sm border-b">
        <NavBar />
      </div>

      {/* Page Content */}
      <main className="flex-1 container mx-auto px-4 py-6">{children}</main>
    </div>
  );
};

export default Layout;
