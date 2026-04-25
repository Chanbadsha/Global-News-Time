const GetCategories = async (categoryId) => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  const categories = data.data.news_category;

  // If categoryId exists → return single category
  if (categoryId) {
    return categories.find((cat) => cat.category_id === String(categoryId));
  }

  // Otherwise return all
  return categories;
};

export default GetCategories;
