import Link from "next/link";
import Marquee from "react-fast-marquee";

const BreakingNews = async () => {
  const res = await fetch(
    "https://69ebd41b97482ad5c52814b9.mockapi.io/breakingNews",
    { cache: "no-store" },
  );
  const datas = await res.json();
  // console.log(datas);
  return (
    <div className="container mx-auto my-2 flex items-center bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
      {/* Left Badge */}
      <div className="bg-red-600 text-white px-4 py-2 font-semibold text-sm whitespace-nowrap">
        Latest
      </div>

      {/* Marquee */}
      <Marquee pauseOnHover className="flex items-center">
        {datas.map((data, ind) => (
          <span
            key={ind}
            className="mx-4 text-sm text-gray-700 hover:text-black hover:underline cursor-pointer transition"
          >
            {data.title}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
