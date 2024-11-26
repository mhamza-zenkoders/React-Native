import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import TaskListContainer from './components/TaskListContainer.js';
import InputSection from './components/InputSection.js';
import HeroSection from './components/HeroSection.js';

import {
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

export default function App() {
  const [task, setTask] = useState("");
  const [currentTaskId, setCurrentTaskId] = useState(null);
  const [tasks, setTasks] = useState([
    { text: "Read 20 pages of a book", isCompleted: false },
    { text: "Go for a 30-minute walk", isCompleted: false },
    { text: "Prepare a healthy breakfast", isCompleted: false },
    { text: "Respond to important emails", isCompleted: false },
    { text: "Plan the schedule for tomorrow", isCompleted: false },
    { text: "Complete 2 coding challenges", isCompleted: false },
    { text: "Meditate for 15 minutes", isCompleted: false },
    { text: "Organize workspace", isCompleted: false },
    { text: "Research a topic of interest", isCompleted: false },
    { text: "Call a family member or friend Call a family member or friend", isCompleted: true },
  ]);

  const handleAdd = () => {
    if (task.trim() !== "") {
      if (currentTaskId !== null) {
        const newTasks = [...tasks];
        newTasks[currentTaskId] = { ...newTasks[currentTaskId], text: task };
        setTasks(newTasks);
        setCurrentTaskId(null);
      } else {
        setTasks([
          ...tasks,
          { text: task, isCompleted: false },
        ]);
      }
      setTask("");
    }
  };

  const handleEdit = (index) => {
    const taskToEdit = tasks[index];
    if (taskToEdit) {
      setTask(taskToEdit.text);
      setCurrentTaskId(index);
    }
  };

  const handleDelete = (index) => {
    const newTasks = [...tasks]
    newTasks.splice(index, 1),
      setTasks(newTasks);
  };

  const toggleCompleted = (index) => {
    const newTasks = [...tasks]
    newTasks[index] = { ...newTasks[index], isCompleted: !newTasks[index].isCompleted }
    setTasks(newTasks);
  };

  const taskCount = () => {
    return tasks.length;
  }
  const completeTaskCount = () => {
    const completedTasks = tasks.filter((task) => task.isCompleted);
    return completedTasks.length;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("./assets/logo.png")}
        />
      </View>

      <HeroSection />

      <InputSection task={task} setTask={setTask} handleAdd={handleAdd} currentTaskId={currentTaskId} />

      <View style={styles.countContainer}>
        <Text style={styles.taskCount}>Tasks: {taskCount()}</Text>
        <Text style={styles.taskCount}>Completed Tasks: {completeTaskCount()}</Text>
      </View>

      <TaskListContainer tasks={tasks} handleEdit={handleEdit} handleAdd={handleAdd} handleDelete={handleDelete} toggleCompleted={toggleCompleted} />

      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width:'88%',
    alignSelf:'center',
    paddingVertical:30
  },

  header: {
    alignItems: "center",
    backgroundColor: "white",
  },

  logo: {
    width: 250,
    resizeMode: "contain",
  },

  countContainer:{
    flexDirection:'row',
    marginBottom: 10,
    justifyContent: 'space-between',
  },

  taskCount: {
    fontSize: 16,
  }
});

