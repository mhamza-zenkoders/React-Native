import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, Button } from 'react-native';

export default function App() {

  const [count, setCount] = useState(0);
  const [tasks, setTasks] = useState([
    { id: 1, task: 'Task 1', isCompleted: false },
    { id: 2, task: 'Task 2', isCompleted: false },
    { id: 3, task: 'Task 3', isCompleted: false },
    { id: 4, task: 'Task 4', isCompleted: false },
    { id: 5, task: 'Task 5', isCompleted: false },
  ]);

  const [task, setTask] = useState('');

  const handleAdd = () =>{
    if(task.trim() !== ''){
      setTasks([...tasks, {id:task.length+1, task:task, isCompleted:false}])
      setTask('');
  }
}

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>To Do App</Text>
      </View>
      <View style={styles.hero}>
        <Text style={styles.heroText}>Manage Your Tasks Here</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Task"
          value={task}
          onChangeText={(text) => setTask(text)}
        />
          <Button title='Add' onPress={handleAdd}/>

      </View>
      <View>
        <FlatList
          data={tasks}
          keyExtractor={(item)=> item.id}
          renderItem={({item})=>{ return (
          <View>
            <Text>{item.task}</Text>
            </View>)}}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:35
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  header: {
    paddingTop: 50,
    backgroundColor: 'white'
  },

  headerText: {
    textAlign: 'center',
    fontSize: 40
  },

  hero: {
    backgroundColor: '#C9E6F0',
    padding: 30,
    borderRadius: 20
  },

  heroText: {
    textAlign: 'center',
    fontSize: 30,
    paddingTop: 30,
    paddingBottom: 30,
  },
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    padding:10,
    borderWidth:1,
    borderColor:'#777',
    color: 'black',
    borderRadius: 5,
    alignSelf: 'stretch',
    marginVertical:10
  }

});
