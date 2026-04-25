import CategoriesSection from "@/components/homepage/CategoriesSection";
import NewsSection from "@/components/homepage/NewsSection";
import NoDataFound from "@/components/shared/NoDataFound";
import GetNewsByCategories from "@/utils/GetNewsByCategories";
import Link from "next/link";

const NewsContainer = async ({ params }) => {
  const { categoryId } = await params;
  const newsList = await GetNewsByCategories(categoryId);

  return (
    <main className="lg:col-span-6">
      <h3 className="ml-4 font-semibold xl:text-xl mb-4">Global News Home</h3>

      <div className="flex flex-col gap-6">
        {!newsList || newsList.length === 0 ? (
          <NoDataFound />
        ) : (
          newsList.map((news) => <NewsSection key={news._id} news={news} />)
        )}
      </div>
    </main>
  );
};

export default NewsContainer;
