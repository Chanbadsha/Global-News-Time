import CategoriesList from "@/utils/CategoriesList";

const CategoriesSection = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  const categories = data.data.news_category;
  return (
    <ul className="flex flex-col items-center w-full">
      {categories.map((category) => (
        <CategoriesList
          categoryId={category.category_id}
          key={category.category_id}
        >
          {category.category_name}{" "}
        </CategoriesList>
      ))}
    </ul>
  );
};

export default CategoriesSection;
