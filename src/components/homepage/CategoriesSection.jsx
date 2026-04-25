import CategoriesList from "@/utils/CategoriesList";
import GetCategories from "@/utils/GetCategories";
import demoImg from "@/assets/demo-img.png";
import Image from "next/image";
const CategoriesSection = async () => {
  const categories = await GetCategories();

  return (
    <>
      <ul className="w-full px-3 space-y-2">
        {categories.map((category) => (
          <li key={category.category_id}>
            <CategoriesList categoryId={category.category_id}>
              {category.category_name}
            </CategoriesList>
          </li>
        ))}
      </ul>

      <div className="mt-6 px-3">
        <h3 className="font-semibold text-lg mb-3 text-gray-800">
          Editor&apos;s Picks
        </h3>

        <div className="space-y-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex gap-3 items-start p-3 rounded-xl hover:bg-gray-100 transition cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="w-16 h-14 flex items-center justify-center bg-gray-200 rounded-lg shrink-0">
                <Image
                  src={demoImg}
                  width={60}
                  height={50}
                  alt="demoImg"
                  className="w-full h-auto"
                ></Image>
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800 line-clamp-2">
                  Breaking: Major global event reshaping the world economy
                </p>
                <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoriesSection;
