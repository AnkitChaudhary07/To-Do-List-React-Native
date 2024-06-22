import { useState, useEffect } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  useEffect(() => {
    if (props.editGoalText) {
      setEnteredGoalText(props.editGoalText);
    }
  }, [props.editGoalText]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    if (enteredGoalText.trim().length === 0) {
      Alert.alert("Task is empty", "Please enter a task.");
      return;
    }
    if (props.editGoalId) {
      props.onEditGoal(props.editGoalId, enteredGoalText);
    } else {
      props.onAddGoal(enteredGoalText);
    }
    setEnteredGoalText("");
  }

  return (
    <View style={styles.inputContainer}>
      {props.editGoalId && (
        <Text style={styles.editingText}>
          Editing Task: {props.editGoalText}
        </Text>
      )}
      <TextInput
        style={styles.textInput}
        placeholder="Your Task!"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <TouchableOpacity style={styles.addButton} onPress={addGoalHandler}>
        <Text style={styles.buttonText}>
          {props.editGoalId ? "Update Task" : "Add Task"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#9c85f5",
  },
  editingText: {
    color: "red",
    marginBottom: 5,
    fontSize: 16,
  },
  textInput: {
    borderRadius: 12,
    backgroundColor: "#6ec6fc",
    width: "70%",
    padding: 8,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: "#5a48e7",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    borderColor: "#000000",
    borderWidth: 1,
  },
  buttonText: {
    color: "#fff",
  },
});
