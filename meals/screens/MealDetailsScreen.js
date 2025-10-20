import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import SubTitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";
// import { FavoritesContext } from "../store/context/favorite-context";
function MealDetailsScreen({ navigation, route }) {
  const mealId = route.params.mealId;
  const selectecdMeal = MEALS.find((meal) => meal.id == mealId);

  // const favoriteMealsCtx = useContext(FavoritesContext);
  // const favouriteMealIds = favoriteMealsCtx.ids;
  const favouriteMealIds = useSelector((state) => state.favoriteMeal.ids);
  const dispatch = useDispatch();

  const mealIsFavorite = favouriteMealIds.includes(mealId);
  const changeFavoriteStatusHandler = () => {
    if (mealIsFavorite) {
      // favoriteMealsCtx.removeFavorite(mealId);
      dispatch(removeFavorite({ id: mealId }));
    } else {
      // favoriteMealsCtx.addFavorite(mealId);
      dispatch(addFavorite({ id: mealId }));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-outline"}
            color={"white"}
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView>
      <Image
        style={styles.image}
        source={{
          uri: selectecdMeal.imageUrl,
        }}
      />
      <Text style={styles.title}>{selectecdMeal.title}</Text>
      <MealDetails
        duration={selectecdMeal.duration}
        complexity={selectecdMeal.complexity}
        affordability={selectecdMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <SubTitle>Incrediants</SubTitle>
          <List data={selectecdMeal.ingredients} />
          <SubTitle>Steps</SubTitle>
          <List data={selectecdMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
    fontSize: 16,
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
export default MealDetailsScreen;
