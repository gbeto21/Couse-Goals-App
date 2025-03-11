import { useState } from "react";
import GoalItem from "./components/GoalItem";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  FlatList
} from 'react-native';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [goals, setGoals] = useState([])

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }

  function addGoalhandler() {
    setGoals((currentGoals) => [
      ...currentGoals, {
        text: enteredGoalText,
        id: Math.random().toString()
      }])
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Your course goal.'
          onChangeText={goalInputHandler}
        />
        <Button
          title="Add Goal"
          onPress={addGoalhandler}
        />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          alwaysBounceVertical={false}
          keyExtractor={(item, index) => {
            return item.id
          }}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />
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
    inputContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 24,
      borderBottomWidth: 1,
      borderBottomColor: "#cccccc"
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#cccccc',
      width: '70%',
      marginRight: 8,
      padding: 8
    },
    goalsContainer: {
      flex: 5
    },

  }
);
