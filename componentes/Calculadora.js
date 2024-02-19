import { useState } from 'react';

const useCalculadora = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const handleInput = (input) => {
    switch (input) {
      case '+':
      case '-':
      case '*':
      case '/':
        if (waitingForSecondOperand) {
          setOperator(input);
          return;
        }
        if (firstOperand === null) {
          setFirstOperand(parseFloat(displayValue));
        } else if (operator) {
          const result = evaluate(parseFloat(displayValue));
          setDisplayValue(String(result));
          setFirstOperand(result);
        }
        setWaitingForSecondOperand(true);
        setOperator(input);
        break;
      case '=':
        if (waitingForSecondOperand) return;
        const result = evaluate(parseFloat(displayValue));
        setDisplayValue(String(result));
        setFirstOperand(result);
        setWaitingForSecondOperand(true);
        setOperator(null);
        break;
      case 'C':
        setDisplayValue('0');
        setFirstOperand(null);
        setOperator(null);
        setWaitingForSecondOperand(false);
        break;
      case 'CE':
        if (displayValue.length === 1 || displayValue === '0') {
          setDisplayValue('0');
        } else {
          setDisplayValue(displayValue.slice(0, -1));
        }
        break;
      default:
        if (waitingForSecondOperand) {
          setDisplayValue(String(input));
          setWaitingForSecondOperand(false);
        } else {
          setDisplayValue(displayValue === '0' ? String(input) : displayValue + input);
        }
        break;
    }
  };

  const evaluate = (secondOperand) => {
    switch (operator) {
      case '+':
        return firstOperand + secondOperand;
      case '-':
        return firstOperand - secondOperand;
      case '*':
        return firstOperand * secondOperand;
      case '/':
        return firstOperand / secondOperand;
      default:
        return secondOperand;
    }
  };

  return { displayValue, handleInput };
};

export default useCalculadora;
