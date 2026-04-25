import CategoriesSection from "@/components/homepage/CategoriesSection";
import NewsSection from "@/components/homepage/NewsSection";
import GetNewsByCategories from "@/utils/GetNewsByCategories";
import Link from "next/link";

const NewsContainer = async ({ params }) => {
  const { categoryId } = await params;
  const newsList = await GetNewsByCategories(categoryId);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-screen">
      {/* LEFT SIDEBAR */}
      <aside className="lg:col-span-3 lg:sticky lg:top-10 h-fit">
        <h3 className="ml-4 font-semibold xl:text-xl mb-4">All Categories</h3>
        <CategoriesSection />
      </aside>

      {/* MAIN CONTENT */}
      <main className="lg:col-span-6">
        <h3 className="ml-4 font-semibold xl:text-xl mb-4">Global News Home</h3>

        <div className="flex flex-col gap-6">
          {!newsList || newsList.length === 0 ? (
            <div className="bg-white flex flex-col items-center justify-center rounded-xl shadow-md border border-gray-100 p-10 text-center">
              <div className="text-5xl mb-4">📰</div>

              <h2 className="text-xl font-semibold text-gray-800">
                No News Available
              </h2>

              <p className="text-gray-500 mt-2 max-w-md">
                We couldn’t find any news articles at the moment. Please check
                back later or try refreshing the page.
              </p>

              <Link
                href="/"
                className="mt-5 px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
              >
                Refresh
              </Link>
            </div>
          ) : (
            newsList.map((news) => <NewsSection key={news._id} news={news} />)
          )}
        </div>
      </main>

      {/* RIGHT SIDEBAR */}
      <aside className="lg:col-span-3 lg:sticky lg:top-10 h-fit">
        <h3 className="ml-4 font-semibold xl:text-xl mb-4">Login With</h3>
        {/* <Header /> */}
      </aside>
    </div>
  );
};

export default NewsContainer;
