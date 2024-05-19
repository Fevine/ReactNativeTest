import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function TabTwoScreen() {

  const [count, setCount] = useState(0)

  return (
    <View style={styles.div}>
      <Text style={styles.title}>Counter</Text>
      <Button
        title={`You have clicked ${count} times!`}
        onPress={() => setCount(count + 1)}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  div: {
    width: '100%',
    height: '100%',
    backgroundColor: 'khaki',
  },
  title: {
    fontSize: 44,
    width: '100%',
    textAlign: 'center',
    paddingTop: 20,
  }
});
