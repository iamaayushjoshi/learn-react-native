import { useContext } from "react";
import MealList from "../components/MealsList/MealList";
import { FavoritesContext } from "../store/context/favorite-context";
import { MEALS } from "../data/dummy-data";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

function FavoritesScreen() {
  // const favoriteMealsCtx = useContext(FavoritesContext);
  // const favouriteMealIds = favoriteMealsCtx.ids;
  const favouriteMealIds = useSelector((state) => state.favoriteMeal.ids);
  const favoriteMeals = MEALS.filter((meal) =>
    favouriteMealIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet</Text>
      </View>
    );
  } else {
    return <MealList items={favoriteMeals} />;
  }
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default FavoritesScreen;
