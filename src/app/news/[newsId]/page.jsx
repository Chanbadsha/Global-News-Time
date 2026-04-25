import GetCategories from "@/utils/GetCategories";
import Image from "next/image";
import Link from "next/link";

const NewsDetailsPage = async ({ params }) => {
  const { newsId } = await params;
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/${newsId}`,
  );
  const data = await res.json();
  const news = data.data[0];
  const category = await GetCategories(news.category_id);
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-5 lg:p-6 w-full">
      {/* Section Title */}
      <h3 className="text-gray-700 font-semibold mb-4">
        {category.category_name}
      </h3>

      {/* Image */}
      <div className="overflow-hidden rounded-lg">
        <Image
          src={news.image_url}
          alt={news.title}
          width={900}
          height={900}
          className="w-full h-55 lg:h-auto   rounded-lg hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="mt-5">
        {/* Title */}
        <h2 className="text-xl lg:text-2xl font-bold text-gray-900 leading-snug">
          {news.title}
        </h2>

        {/* Meta */}
        <p className="text-sm text-gray-400 mt-2">
          {news?.author?.published_date} | {news?.author?.name}
        </p>

        {/* Description */}
        <p className="text-gray-600 text-sm lg:text-base mt-3 leading-relaxed">
          {news.details}
        </p>

        {/* Button */}
        <Link
          href={`/categories/${news.category_id}`}
          className="mt-5 inline-flex items-center gap-2 bg-rose-600 text-white px-5 py-2 rounded-md hover:bg-rose-700 transition"
        >
          ← All news in this category
        </Link>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
