import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.onEditItem(props.id)}
        >
          <Ionicons name="create" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.onDeleteItem(props.id)}
        >
          <Ionicons name="trash" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginVertical: 8,
    backgroundColor: "#7f9cf3",
    borderRadius: 10,
  },
  goalText: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#5a48e7",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    marginLeft: 5,
  },
});
