const GetNewsByCategories = async (categoryId) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${categoryId}`,
  );
  const data = await res.json();

  return data.data;
};

export default GetNewsByCategories;
