import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
// import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {

  const [display, setDisplay] = useState('');
  const [result, setResult] = useState('');

  const buttons = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['ICON', '0', '.', '=']
  ]

  const functionButtons = ['AC', '+/-', '%']
  const operatorButtons = ['÷', '×', '-', '+', '=']

  const handlePress = (keyValue) => {
    if (keyValue === 'ICON') {
      return;
    }
    else if (keyValue == 'AC') {
      setDisplay('')
      setResult('')
    }
    else if (keyValue == '=' && result.length !== 0) {
      const lastChar = result.slice(-1);
      try {
        if (operatorButtons.includes(lastChar)) {
          setDisplay(result.slice(0, -1));
          setResult(eval(result.slice(0, -1).replace('÷', '/').replace('×', '*')).toString())
        }
        else {
          setDisplay(result);
          setResult(eval(result.replace('÷', '/').replace('×', '*')).toString())
        }
      }
      catch (err) {
        setDisplay(result);
        setResult('ERROR');
      }
    }
    else if (operatorButtons.includes(keyValue) || keyValue ==='.' ) {
      if (result.length == 0) {
        return;
      }
      const lastChar = result.slice(-1);
      if (operatorButtons.includes(lastChar) || lastChar ==='.' ) {
        setResult(result.slice(0, -1) + keyValue);
      }
      else {
        setResult(result + keyValue);
      }
    }
    else if (keyValue == '+/-') {
      if (result.length !== 0) {
        setResult((parseFloat(eval(result.replace('÷', '/').replace('×', '*'))) * -1).toString())
      }

    }
    else if (keyValue == '%') {
      if (result.length !== 0) {
        setResult((parseFloat(eval(result.replace('÷', '/').replace('×', '*'))) / 100).toString())
      }
    }
    else {
      setResult(result + keyValue);
    }

  }


  const buttonColor = (button) => {
    if (functionButtons.includes(button)) {
      return styles.functionButton
    }
    else if (operatorButtons.includes(button)) {
      return styles.operatorButton;
    }
  }

  const buttonTextSize = (button) => {
    if (operatorButtons.includes(button)) {
      return styles.operatorText;
    }
    return;
  }

  const getFontSize = (text, baseSize) => {
    if (text.length > 8) {
      return baseSize - Math.min((text.length - 8) * 6, baseSize * 0.6);
    }
    return baseSize;
  };



  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{display}</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ alignItems: "center" }}
        >
          <Text
            style={[
              styles.resultText,
              { fontSize: getFontSize(result, 80) }
            ]}
          >
            {result || '0'}
          </Text>
        </ScrollView>

      </View>


      <View style={styles.buttonContainer}>
        {buttons.map((buttonsRow, rowIndex) => (
          <View key={rowIndex} style={styles.buttonRow}>
            {buttonsRow.map((button, index) => (
              <TouchableOpacity key={index} style={[styles.button, buttonColor(button)]} onPress={() => { handlePress(button) }}>
                {button === 'ICON' ? (<MaterialCommunityIcons name="calculator" size={50} color="white" />
                ) : (<Text style={[styles.buttonText, buttonTextSize(button)]}>{button}</Text>)}
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    //alignItems: 'center',
    justifyContent: 'flex-end',
  },

  displayContainer: {
    //paddingVertical:20,
    paddingHorizontal: 30,
    alignItems: "flex-end",
  },

  displayText: {
    fontSize: 35,
    color: '#5c5c5f',
    textAlign: 'right'
  },

  resultText: {
    fontSize: 80,
    color: '#fff',
    textAlign: 'right'

  },

  buttonContainer: {
    alignItems: 'center',
    paddingVertical: 15,
    marginBottom: 15,
  },

  buttonRow: {
    flexDirection: 'row',
  },

  button: {
    backgroundColor: '#2A2A2C',
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  buttonText: {
    fontSize: 40,
    color: '#fff',
    textAlignVertical: 'center',
    includeFontPadding: false
  },
  functionButton: {
    backgroundColor: '#5C5C5F'
  },

  operatorButton: {
    backgroundColor: '#FF9F0A'
  },
  operatorText: {
    fontSize: 70,
  }
});
