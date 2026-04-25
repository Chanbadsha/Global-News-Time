import CategoriesList from "@/utils/CategoriesList";
import GetCategories from "@/utils/GetCategories";

const CategoriesSection = async () => {
  const categories = await GetCategories();
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
