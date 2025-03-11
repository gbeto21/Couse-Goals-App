import { StyleSheet } from "react-native";
import { View, Text, Pressable } from "react-native";

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    goalText: {
        color: "white"
    }
})

function GoalItem(props) {
    return (
        <Pressable onPress={props.onDeleteItem}>
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>
                    {props.text}
                </Text>
            </View>
        </Pressable>
    )

}

export default GoalItem