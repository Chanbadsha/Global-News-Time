import NewsSection from "@/components/homepage/NewsSection";
import NoDataFound from "@/components/shared/NoDataFound";
import GetNewsByCategories from "@/utils/GetNewsByCategories";

const WorldNews = async () => {
  const newsList = await GetNewsByCategories("05");

  return (
    <main className="lg:col-span-6 ">
      <h3 className="ml-4 font-semibold xl:text-xl mb-4">Global Latest News</h3>

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

export default WorldNews;
