import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Octicons from '@expo/vector-icons/Octicons';
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function Stopwatch() {
  const [isStarted, setIsStarted] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (seconds > 59) {
      setMinutes((prev) => prev + 1);
      setSeconds(0);
    }
    if (minutes>59){
      setMinutes(0);
      setSeconds(0);
    }
  }, [seconds]);

  const handleStart = () => {
    if (!isStarted) {
      const id = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
      setIntervalId(id);
      setIsStarted(true);
    }
  }

  const handlePause = () => {
    if (isStarted) {
      clearInterval(intervalId);
      setIsStarted(false);
      setIntervalId(null);
    }
  };

  const handleStop = () => {
    clearInterval(intervalId);
    setIsStarted(false);
    setIntervalId(null);
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <View style={styles.container}>
    <View style= {styles.titleContainer}>
    <Octicons name="stopwatch" size={50} color="white" />
      <Text style={styles.title}>STOPWATCH</Text>
    </View>
      <View style={styles.timerContainer}>
        <Text style={styles.timer}>
          {minutes < 10 ? "0" + minutes : minutes}:
          {seconds < 10 ? "0" + seconds : seconds}
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.button} onPress={handlePause}>
          <Text style={styles.btnText}> Pause </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.startButton} onPress={handleStart}>
          <FontAwesome5
            name="play"
            size={60}
            color="#ff7900"
            style={{ paddingLeft: 10 }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleStop}>
          <Text style={styles.btnText}> Reset </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    justifyContent: "center",
    alignItems: "center",
  },

  titleContainer:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },

  title: {
    fontSize: 50,
    marginStart:20,
    color: "white",
  },

  timerContainer: {
    height: 400,
    width: 400,
    borderWidth: 30,
    borderRadius: 200,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#FF7900",
    marginVertical: 80,
    shadowColor: "black",
    elevation: 7,
  },

  timer: {
    textAlign: "center",
    fontSize: 100,
    color: "white",

  },
  
  btnContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },

  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1B1B1B",
    borderRadius: 10,
    marginVertical: 10,
    width: 150,
    height: 70,
    marginHorizontal: 20,
    shadowColor: "black",
    elevation: 5,
  },

  startButton: {
    backgroundColor: "#1B1B1B",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    width: 120,
    height: 120,
    shadowColor: "black",
    elevation: 5,
  },

  btnText: {
    color: "white",
    fontSize: 30,
    textAlignVertical: "center",
    includeFontPadding: false,
  },
});
