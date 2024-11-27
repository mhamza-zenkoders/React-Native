import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function Demo() {
  const [isRunning, setIsRunning] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(()=>{
    if (seconds > 59){
      setMinutes(prev=>prev+1);
      setSeconds(0)
    }
  },[seconds])

  const handleStart = () => {
    if (!isRunning) {
      const id = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 59) {
            setMinutes((prevMinutes) => prevMinutes + 1);
            return 0;
          }
          return prevSeconds + 1;
        });
      }, 1000);
      setIntervalId(id);
      setIsRunning(true);
    }
  };

  const handlePause = () => {
    if (isRunning) {
      clearInterval(intervalId);
      setIsRunning(false);
      setIntervalId(null);
    }
  };

  const handleStop = () => {
    clearInterval(intervalId);
    setIsRunning(false);
    setIntervalId(null);
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>STOPWATCH</Text>
      <View style={styles.timerContainer}>
      <Text style={styles.timer}>
        {minutes < 9 ? "0" + minutes : minutes}:
        {seconds < 9 ? "0" + seconds : seconds}
      </Text>
      </View>
      <View style={styles.btnContainer}>
        
        <TouchableOpacity style={styles.button} onPress={handlePause}>
          <Text style={styles.btnText}> Pause </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.startButton} onPress={handleStart}>
        <FontAwesome5 name="play" size={60} color="#ff7900" style={{paddingLeft: 10}}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleStop}>
          <Text style={styles.btnText}> Stop</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 60,
    color:'white'
  },

  timerContainer:{
    height:400,
    width:400,
    borderWidth:30,
    borderRadius:200,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#FF7900",
    marginVertical:80
  },

  timer: {
    textAlign:'center',
    fontSize: 100,
    color: 'white'
  },

  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'#222222',
    borderRadius: 10,
    borderColor: "#4CAF50",
    marginVertical: 10,
    width: 150,
    height: 70,
    marginHorizontal:20
  },

  btnContainer:{
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: 'row'
  },

  startButton:{
    backgroundColor:'#222222',
    justifyContent: "center",
    alignItems: "center",
    borderRadius:100,
    borderColor: "white",
    width:120,
    height:120,
  },

  btnText:{
    color: 'white',
    fontSize:30,
    textAlignVertical: 'center',
    includeFontPadding: false
  }
  
});
