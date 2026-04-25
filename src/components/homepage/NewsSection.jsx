import Image from "next/image";
import Link from "next/link";
import { FaBookmark, FaShare } from "react-icons/fa";

const NewsSection = ({ news }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-300">
      {/* Author Section */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <Image
            src={news?.author?.img}
            alt="Author"
            height={45}
            width={45}
            className="rounded-full object-cover"
          />

          <div>
            <h4 className="text-sm font-semibold text-gray-800">
              {news?.author?.name}
            </h4>
            <p className="text-xs text-gray-500">
              {news?.author?.published_date}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 text-gray-500 text-xl">
          <button className="hover:text-black transition">
            <FaBookmark />
          </button>
          <button className="hover:text-black transition">
            <FaShare />
          </button>
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pt-4">
        <h2 className="font-bold text-lg xl:text-2xl leading-snug text-gray-900">
          {news.title}
        </h2>
      </div>

      {/* Image */}
      <div className="mt-3 px-4">
        <Image
          src={news.image_url}
          height={400}
          width={800}
          className="object-cover rounded-lg w-full hover:scale-[1.02] transition-transform duration-300"
          alt={news.title}
        />
      </div>

      {/* Description */}
      <div className="px-4 py-3">
        <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
          {news.details}
        </p>

        <Link
          href={`/news/${news._id}`}
          className="inline-block mt-2 text-sm font-semibold text-orange-500 hover:text-orange-600 transition"
        >
          Read More →
        </Link>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
        {/* Rating */}
        <div className="flex items-center gap-2 text-orange-400 text-sm">
          ⭐⭐⭐⭐⭐
          <span className="text-gray-700">{news.rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1 text-gray-500 text-sm">
          👁️ <span>{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
