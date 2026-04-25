import Image from "next/image";
import { FaBookmark, FaShare } from "react-icons/fa";

const NewsSection = ({ news }) => {
  return (
    <div className=" bg-white rounded-xl  shadow-md overflow-hidden border border-gray-100">
      {/* Author Section */}
      <div className="flex bg-gray-400 items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <Image
            src={news?.author?.img}
            alt={"News Image"}
            height={100}
            width={100}
            className="rounded-full"
          ></Image>
          <div>
            <h4 className="text-sm lg:text-xl font-semibold">
              {news?.author?.name}
            </h4>
            <p className="text-xs lg:text-base text-gray-500">
              {" "}
              {news?.author?.published_date}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4 text-background text-2xl">
          <button>
            <FaBookmark />
          </button>
          <button>
            <FaShare />
          </button>
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pt-4">
        <h2 className="font-bold text-lg xl:text-2xl leading-snug text-gray-800">
          {news.title}
        </h2>
      </div>

      {/* Image */}
      <div className="mt-3 px-4 flex items-center justify-center">
        <Image
          src={news.image_url}
          height={400}
          width={800}
          className="object-cover"
          alt={news.title}
        />
      </div>

      {/* Description */}
      <div className="px-4 py-3">
        <p className="text-sm text-gray-600 line-clamp-3">{news.details}</p>

        <button className="text-orange-500 text-sm font-semibold mt-2">
          Read More
        </button>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-3 border-t">
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-400">
          ⭐⭐⭐⭐⭐
          <span className="text-gray-700 text-sm ml-1">
            {news.rating.number}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1 text-gray-500 text-sm">
          👁️{news.total_view}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
