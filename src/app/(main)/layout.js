import BreakingNews from "@/components/shared/BreakingNews";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import NavBar from "@/components/shared/NavBar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex container mx-auto  flex-col min-h-screen">
      <Header />
      <BreakingNews />
      <div
        className={`sticky mt-2   px-4 top-0 left-0 w-full   z-40 bg-gray-300  shadow-md
        }`}
      >
        <NavBar />
      </div>
      <main className="flex-1 pt-4 lg:pt-8">{children}</main>

      <Footer />
    </div>
  );
};

export default MainLayout;
