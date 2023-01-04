import { Pressable, StyleSheet, Text, View } from 'react-native';

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#09008c' }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,

    borderRadius: 6,
    backgroundColor: '#5d52f2',
  },
  goalText: {
    padding: 8,
    color: '#ffffff',
  },
  pressedItem: {
    opacity: 0.5,
  },
});
