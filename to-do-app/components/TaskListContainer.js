import React from "react";

import {
  StyleSheet,
  View,
  FlatList,
} from "react-native";

import TaskList from "./TaskList";

export default TaskListContainer=({tasks,handleEdit,handleDelete,toggleCompleted})=>{
    return(
        <View style={{ flex: 1 }}>
        <FlatList
          data={tasks}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
                <TaskList item={item} index={index} handleEdit={handleEdit} handleDelete={handleDelete} toggleCompleted={toggleCompleted} />
            );
          }}
        />
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