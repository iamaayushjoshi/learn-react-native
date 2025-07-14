import { CATEGORIES, MEALS } from "../data/dummy-data";
import { View, StyleSheet, FlatList } from "react-native";
import { useLayoutEffect } from "react";
import MealItem from "../components/MealItem";

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

  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return (
      <View>
        <MealItem {...mealItemProps} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(meal) => meal.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsOverviewScreen;
