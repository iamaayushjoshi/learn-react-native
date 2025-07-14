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
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
function MealDetailsScreen({ navigation, route }) {
  const mealId = route.params.mealId;
  const selectecdMeal = MEALS.find((meal) => meal.id == mealId);

  const headerButtonPressHandler = () => {
    console.log("Header button pressed!");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={"star"}
            color={"white"}
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [navigation, headerButtonPressHandler]);

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
