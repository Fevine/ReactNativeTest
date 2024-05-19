import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function TabTwoScreen() {

  const [text, setText] = useState<string>('')
  const [ToDos, setToDos] = useState<string[]>([])

  function handleText() {
    setToDos([...ToDos, text])
  }

  return (
    <View style={styles.div}>
      <Text style={styles.title}>To Do</Text>
      <TextInput
        style={styles.input}
        onChangeText={(e) => setText(e)}
        placeholder='Enter Text Here...'
      ></TextInput>
      <Button
        title='Click'
        onPress={handleText}
      />
      <ScrollView style={styles.div}>
        {ToDos && ToDos.map((todo) => (
          <Text style={styles.text}>
            {todo}
          </Text>
        ))}
      </ScrollView>
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
  },
  text: {
    fontSize: 24,
    width: '100%',
    textAlign: 'center',
    paddingTop: 5,
  },
  input: {
    fontSize: 24,
    width: '100%',
    textAlign: 'center',
    paddingTop: 5,
  },
});
