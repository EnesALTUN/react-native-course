import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const GoalItem = (props) => {
  const { id, item, onDeleteGoal } = props;

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={onDeleteGoal.bind(this, id)}
        style={({ pressed }) => pressed && styles.pressItem}
      >
        <Text style={styles.goalText}>{item}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "#fff",
    padding: 8,
  },
  pressItem: {
    opacity: 0.5,
  },
});

export default GoalItem;
