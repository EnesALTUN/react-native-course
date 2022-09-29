import { useState } from "react";
import uuid from "react-uuid";
import { FlatList, StyleSheet, View, Button } from "react-native";
import { GoalInput, GoalItem } from "./components/index";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { id: uuid(), text: enteredGoalText },
    ]);

    endAddGoalHandler();
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter((goal) => goal.id !== id)
    );
  };

  return (
    <>
      <StatusBar style="light" />

      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />

        <GoalInput
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
          isVisible={modalIsVisible}
        />

        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => (
              <GoalItem
                id={itemData.item.id}
                item={itemData.item.text}
                onDeleteGoal={deleteGoalHandler}
              />
            )}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 10,
  },
  goalsContainer: {
    flex: 4,
  },
});
