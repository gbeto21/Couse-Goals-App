import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StyleSheet, View, FlatList, Button } from 'react-native';

export default function App() {

  const [showModal, setShowModal] = useState(false)
  const [goals, setGoals] = useState([])

  function startAddGoalHandler() {
    setShowModal(true)
  }

  function endAddGoalHandler() {
    setShowModal(false)
  }

  function addGoalhandler(enteredGoalText) {
    setGoals((currentGoals) => [
      ...currentGoals, {
        text: enteredGoalText,
        id: Math.random().toString()
      }])
    endAddGoalHandler()
  }

  function deleteGoalHandler(id) {
    setGoals(currentGoals => currentGoals.filter(goal => goal.id !== id))
  }

  return (
    <View style={styles.appContainer}>
      <Button title="Add New Goal" color="#5e0acc" onPress={startAddGoalHandler} />
      <GoalInput
        onAddGoal={addGoalhandler}
        visible={showModal}
        onCancel={endAddGoalHandler}
      />
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
              id={itemData.item.id}
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
