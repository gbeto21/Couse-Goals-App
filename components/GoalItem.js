import { StyleSheet } from "react-native";
import { View, Text, Pressable } from "react-native";

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    presedItem: {
        opacity: 0.5,
    },
    goalText: {
        padding: 8,
        color: "white"
    }
})

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{ color: '#dddddd' }}
                onPress={props.onDeleteItem.bind(this, props.id)}
                style={({ pressed }) => pressed && styles.presedItem}
            >
                <Text style={styles.goalText}>
                    {props.text}
                </Text>
            </Pressable>
        </View>
    )

}

export default GoalItem