import BreakingNews from "@/components/shared/BreakingNews";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import NavBar from "@/components/shared/NavBar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex container mx-auto  flex-col min-h-screen">
      <Header />
      <BreakingNews />
      <NavBar />
      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
};

export default MainLayout;
