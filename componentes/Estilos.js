import { StyleSheet } from 'react-native';

export const calculatorStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    padding: 10,
  },
  display: {
    height: 100,
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 10,
    fontSize: 40,
    color: '#fff',
    textAlign: 'right',
    paddingRight: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    width: '23%',
    height: 60,
    backgroundColor: '#555',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
  },
  operatorButton: {
    backgroundColor: '#ff7f00',
  },
});