import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";


function GoalInput(props) {

    const [enteredGoalText, setEnteredGoalText] = useState('')

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText)
    }

    function addGoalhandler() {
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText('')
    }

    const styles = StyleSheet.create({
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
    })

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder='Your course goal.'
                onChangeText={goalInputHandler}
                value={enteredGoalText}
            />
            <Button
                title="Add Goal"
                onPress={addGoalhandler}
            />
        </View>
    )
}

export default GoalInput