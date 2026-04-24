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
    <div className="container mt-4 mx-auto py-2 bg-gray-200 rounded-lg flex justify-center items-center px-4">
      <button className="text-2xl bg-red-500 px-4 py-2 rounded-r-lg">
        Latest
      </button>
      <Marquee className="overflow-y-hidden" pauseOnClick={true}>
        {datas.map((data, ind) => (
          <Link
            className="text-foreground  hover:underline mr-2 bg-background py-2"
            key={ind}
            href={`/news/${data.id}`}
          >
            {data.title}
          </Link>
        ))}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
