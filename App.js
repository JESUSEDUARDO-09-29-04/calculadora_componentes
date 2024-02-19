import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { calculatorStyles } from './componentes/Estilos'; 
import useCalculadora from './componentes/Calculadora';

const Calculator = () => {
  const { displayValue, handleInput } = useCalculadora();

  return (
    <View style={calculatorStyles.container}>
      <Text style={calculatorStyles.display}>{displayValue}</Text>
      <View style={calculatorStyles.row}>
        <TouchableOpacity style={calculatorStyles.button} onPress={() => handleInput('%')}>
          <Text style={calculatorStyles.buttonText}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={calculatorStyles.button} onPress={() => handleInput('CE')}>
          <Text style={calculatorStyles.buttonText}>CE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={calculatorStyles.button} onPress={() => handleInput('C')}>
          <Text style={calculatorStyles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={calculatorStyles.button} onPress={() => handleInput('/')}>
          <Text style={calculatorStyles.buttonText}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={calculatorStyles.row}>
        <TouchableOpacity style={calculatorStyles.button} onPress={() => handleInput('7')}>
          <Text style={calculatorStyles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={calculatorStyles.button} onPress={() => handleInput('8')}>
          <Text style={calculatorStyles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={calculatorStyles.button} onPress={() => handleInput('9')}>
          <Text style={calculatorStyles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={calculatorStyles.button} onPress={() => handleInput('*')}>
          <Text style={calculatorStyles.buttonText}>*</Text>
        </TouchableOpacity>
      </View>
      <View style={calculatorStyles.row}>
        <TouchableOpacity style={calculatorStyles.button} onPress={() => handleInput('4')}>
          <Text style={calculatorStyles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={calculatorStyles.button} onPress={() => handleInput('5')}>
          <Text style={calculatorStyles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={calculatorStyles.button} onPress={() => handleInput('6')}>
          <Text style={calculatorStyles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={calculatorStyles.button} onPress={() => handleInput('-')}>
          <Text style={calculatorStyles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={calculatorStyles.row}>
        <TouchableOpacity style={calculatorStyles.button} onPress={() => handleInput('1')}>
          <Text style={calculatorStyles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={calculatorStyles.button} onPress={() => handleInput('2')}>
          <Text style={calculatorStyles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={calculatorStyles.button} onPress={() => handleInput('3')}>
          <Text style={calculatorStyles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={calculatorStyles.button} onPress={() => handleInput('+')}>
          <Text style={calculatorStyles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={calculatorStyles.row}>
        <TouchableOpacity style={calculatorStyles.button} onPress={() => handleInput('0')}>
          <Text style={calculatorStyles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={calculatorStyles.button} onPress={() => handleInput('.')}>
          <Text style={calculatorStyles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={calculatorStyles.button} onPress={() => handleInput('=')}>
          <Text style={calculatorStyles.buttonText}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Calculator;
