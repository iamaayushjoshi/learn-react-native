import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealList from "../components/MealsList/MealList";

function MealsOverviewScreen({ navigation, route }) {
  const categoryId = route.params.categoryId;

  // route = useRoute();
  // const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(() => {
    if (categoryId) {
      const category = CATEGORIES.find((cat) => cat.id === categoryId);
      navigation.setOptions({
        title: category.title,
      });
    }
  }, [categoryId]);

  return <MealList items={displayedMeals} />;
}

export default MealsOverviewScreen;
