import React from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import Checkbox from 'expo-checkbox';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

export default TaskList=({item,index,handleEdit,handleDelete,toggleCompleted})=>{
    return(
      <View
      style={[
        styles.taskContainer,
        item.isCompleted ? styles.completedTask : null,
      ]}
    >
      <Checkbox
        style={styles.checkbox}
        value={item.isCompleted}
        onValueChange={() => toggleCompleted(index)}
        color={item.isCompleted ? '#6E52B2' : undefined}
      />
      <Text style={styles.taskText}>{item.text}</Text>
      <TouchableOpacity onPress={() => handleEdit(index)} style={styles.icon}>
        <AntDesign name="edit" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleDelete(index)} style={styles.deleteButton}>
        <AntDesign name="delete" size={24} color="black" style={styles.icon} />
      </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({

    taskContainer: {
        backgroundColor: "#F1EAFF",
        marginVertical: 5,
        paddingVertical: 30,
        paddingHorizontal: 20,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center'
      },
    
      checkbox: {
        marginRight: 10,
      },
    
      taskText: {
        fontSize: 17,
        flex: 1,
      },
    
    
      icon: {
        marginLeft: 10,
      },
    
      completedTask: {
        opacity: 0.5,
      }
    
    });