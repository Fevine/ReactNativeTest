import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import uuid from 'react-native-uuid';

type ToDo = {
  id: string;
  text: string;
};

export default function TabTwoScreen() {
  const [text, setText] = useState<string>('');
  const [toDos, setToDos] = useState<ToDo[]>([]);

  function handleText() {
    if (text.trim()) {
      const newToDo = { id: uuid.v4() as string, text };
      setToDos([...toDos, newToDo]);
      setText('');
    }
  }

  return (
    <View style={styles.div}>
      <Text style={styles.title}>To Do</Text>
      <TextInput
        style={styles.input}
        onChangeText={(e) => setText(e)}
        value={text}
        placeholder="Enter Text Here..."
      />
      <Button
        title="Click"
        onPress={handleText}
      />
      <ScrollView style={styles.div}>
        {toDos.map((todo) => (
          <View key={todo.id} style={styles.todoContainer}>
            <Text style={styles.text}>{todo.text}</Text>
            <Button
              title="Delete"
              onPress={() => setToDos(toDos.filter((item) => item.id !== todo.id))}
            />
          </View>
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
    textAlign: 'center',
    paddingTop: 5,
  },
  input: {
    fontSize: 24,
    width: '100%',
    textAlign: 'center',
    paddingTop: 5,
  },
  todoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 50,
    flex: 1,
  },
});