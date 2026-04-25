import CategoriesSection from "@/components/homepage/CategoriesSection";
import BreakingNews from "@/components/shared/BreakingNews";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import NavBar from "@/components/shared/NavBar";

const MainLayout = ({ children }) => {
  return (
    <>
      {" "}
      <div className="flex container mx-auto  flex-col min-h-screen">
        <Header />
        <BreakingNews />
        <div
          className={`sticky mt-2   px-4 top-0 left-0 w-full   z-40 bg-gray-300  shadow-md
        }`}
        >
          <NavBar />
        </div>

        {/* Main Contents */}
        <div className="grid grid-cols-1 mt-4 lg:mt-6 xl:mt-8 lg:grid-cols-12 gap-6 min-h-screen">
          {/* LEFT SIDEBAR */}
          <aside className="lg:col-span-3 lg:sticky lg:top-18 h-fit">
            <h3 className="ml-4 font-semibold xl:text-xl mb-4">
              All Categories
            </h3>
            <CategoriesSection />
          </aside>

          {/* MAIN CONTENT */}
          <main className="lg:col-span-6">{children}</main>

          {/* RIGHT SIDEBAR */}
          <aside className="lg:col-span-3 lg:sticky lg:top-18 h-fit">
            <h3 className="ml-4 font-semibold xl:text-xl mb-4">Login With</h3>
            {/* <Header /> */}
          </aside>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
