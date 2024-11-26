import React from "react";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default InputSection =({task,setTask,handleAdd, currentTaskId})=>{
    return (
        <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Task"
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
          <Text style={styles.addButtonText}>{currentTaskId ? 'Save' : 'Add'}</Text>
        </TouchableOpacity>
      </View>
    );
}



const styles = StyleSheet.create({
inputContainer: {
    marginTop: 25,
    marginBottom: 20,
    flexDirection: "row",
  },


  input: {
    flex: 1,
    padding: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#777",
    fontSize: 15,
  },


  addButton: {
    justifyContent: "center",
    width: 60,
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: "#6E52B2",
    padding: 10,
    marginLeft: 10,
    borderRadius: 5,
    borderColor: "#6E52B2",
  },


  addButtonText: {
    color: "white",
    fontSize: 15,
  },
})