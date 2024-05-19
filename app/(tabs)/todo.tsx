import React, { useRef, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import uuid from 'react-native-uuid';

type ToDo = {
   id: string;
   text: string;
};

export default function TabTwoScreen() {

   // Referances

   const input = useRef<TextInput>(null)

   // States

   const [mode, setMode] = useState<string>('add')
   const [index, setIndex] = useState(-1)
   const [text, setText] = useState<string>('');
   const [toDos, setToDos] = useState<ToDo[]>([]);

   // Functions

   function handleText() {
      if (mode === 'add') {
         if (text.trim()) {
            const newToDo = { id: uuid.v4() as string, text };
            setToDos([...toDos, newToDo]);
            setText('');
         }
      } else if (mode === 'edit') {
         if (text.trim()) {
            toDos[index].text = text
            setMode('add')
            setText('')
         }
      }
   }

   function handleEditClick(id: string) {
      const index = toDos.findIndex(x => x.id === id)
      setIndex(index)
      setText(toDos[index].text)
      setMode('edit')
   }

   // Return

   return (
      <View style={styles.div}>
         <Text style={styles.title}>To Do</Text>
         <TextInput
            ref={input}
            style={styles.input}
            onChangeText={(e) => setText(e)}
            value={text}
            placeholder="What you will do ?"
         />
         <Button
            title={mode === 'add' ? 'Add' : 'Edit'}
            onPress={handleText}
         />
         <ScrollView style={styles.div}>
            {toDos.map((todo) => (
               <View key={todo.id} style={styles.todoContainer}>
                  <Text style={styles.text}>{todo.text}</Text>
                  <View style={styles.flex}>
                     <Button
                        color={'#ff0000'}
                        title="Delete"
                        onPress={() => setToDos(toDos.filter((item) => item.id !== todo.id))}
                     />
                     <Button
                        title="Edit"
                        onPress={() => handleEditClick(todo.id)}
                     />
                  </View>
               </View>
            ))}
         </ScrollView>
      </View>
   );
}

// CSS

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
      paddingVertical: 10,
   },
   todoContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 50,
      flex: 1,
   },
   flex: {
      flex: 0,
      flexDirection: 'row',
   },
   deleteBtn: {
      backgroundColor: '#ff0000'
   },
});