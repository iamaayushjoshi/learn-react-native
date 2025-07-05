import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modelIsVisible, setModelIsVisible] = useState(false);
  const [userGoals, setUserGoals] = useState([]);

  function startAtGoalHandler() {
    setModelIsVisible(true);
  }

  function endAtGoalHandler() {
    setModelIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setUserGoals((currentGoals) => [
      ...currentGoals,
      {
        text: enteredGoalText,
        id: Math.random().toString(),
      },
    ]);
    endAtGoalHandler();
  }

  function deleteGoalHandler(id) {
    setUserGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#1065ec"
          onPress={startAtGoalHandler}
        />
        <GoalInput
          visible={modelIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAtGoalHandler}
        />

        <View style={styles.goalsContainer}>
          <FlatList
            keyExtractor={(item) => item.id}
            data={userGoals}
            renderItem={(itemData) => {
              /* key={itemData.index.key} done by flatlist automatically*/
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: "#1e085a",
    paddingTop: 70,
    flex: 1,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
