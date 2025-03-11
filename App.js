import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StyleSheet, View, FlatList } from 'react-native';

export default function App() {

  const [goals, setGoals] = useState([])

  function addGoalhandler(enteredGoalText) {
    setGoals((currentGoals) => [
      ...currentGoals, {
        text: enteredGoalText,
        id: Math.random().toString()
      }])
  }

  function deleteGoalHandler() {
    console.log("❌ Deleted");
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalhandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          alwaysBounceVertical={false}
          keyExtractor={(item, index) => {
            return item.id
          }}
          renderItem={(itemData) => {
            return <GoalItem
              text={itemData.item.text}
              onDeleteItem={deleteGoalHandler}
            />
          }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create(
  {
    appContainer: {
      flex: 1,
      paddingTop: 50,
      paddingHorizontal: 16
    },
    goalsContainer: {
      flex: 5
    },

  }
);
