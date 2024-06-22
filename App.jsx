import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View, FlatList, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [editGoalId, setEditGoalId] = useState(null);
  const [editGoalText, setEditGoalText] = useState("");

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  function startEditGoalHandler(id, text) {
    setEditGoalId(id);
    setEditGoalText(text);
  }

  function editGoalHandler(id, newText) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.map((goal) =>
        goal.id === id ? { id, text: newText } : goal
      );
    });
    setEditGoalId(null);
    setEditGoalText("");
  }

  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.headingContainer}>
        <Ionicons name="logo-ionic" size={30} color="#7402a8" />
        <Text style={styles.heading}>Tasks</Text>
      </View>

      <GoalInput
        onAddGoal={addGoalHandler}
        onEditGoal={editGoalHandler}
        editGoalId={editGoalId}
        editGoalText={editGoalText}
      />

      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
                onEditItem={startEditGoalHandler}
              />
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: "flex-start", // Align items at the top
  },
  headingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  heading: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    color: "#7402a8",
    marginLeft: 10, // Add some space between the icon and the text
  },
  goalsContainer: {
    flex: 6,
    paddingTop: 24,
  },
});
