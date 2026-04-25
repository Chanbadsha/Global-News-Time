import CategoriesSection from "@/components/homepage/CategoriesSection";
import Header from "@/components/shared/Header";

const HomePage = () => {
  return (
    <div className="grid grid-cols-12">
      <aside className="col-span-2">
        <h3 className="ml-4 font-semibold xl:text-xl mb-4">All Categories</h3>
        <CategoriesSection />
      </aside>

      <main className="col-span-7">
        <h3>Top Stories</h3>
        <Header />
      </main>

      <aside className="col-span-3">
        <h3>Trending News</h3>
        <Header />
      </aside>
    </div>
  );
};

export default HomePage;
