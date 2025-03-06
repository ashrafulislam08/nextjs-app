import MealSearchInput from "../components/MealSearchInput";

const MealsPage = async ({ searchParams }) => {
  const query = await searchParams;

  const fetchMeals = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`
      );
      const data = await response.json();

      return data.meals;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const meals = await fetchMeals();
  console.log(meals);

  return (
    <div className="mx-12">
      <MealSearchInput />

      <div className="grid grid-cols-4 gap-4">
        {meals?.map((meal) => (
          <div className="border-2 p-2">
            <div>
              <img className="rounded" src={meal.strMealThumb} alt="" />
            </div>
            <div>
              <h2 className="font-bold text-2xl">{meal.strMeal}</h2>
              <h4 className="bg-green-400 text-white p-1 w-1/2 text-center rounded-lg">
                {meal.strCategory}
              </h4>
              <p className="mt-2">{meal.strInstructions.slice(0, 100)}...</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealsPage;
