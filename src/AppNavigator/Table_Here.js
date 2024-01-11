import React from 'react';
import { View, Text, StyleSheet , TextInput} from 'react-native';

const MultiplicationTable = ({ inputValue }) => {
  const table = parseInt(inputValue, 10);
  const rows = [];

  if (isNaN(table)) {
    return (
      <View style={styles.error}>
        <Text style={styles.errorText}>Please enter a valid number.</Text>
      </View>
    );
  }

  for (let i = 1; i <= 10; i++) {
    const product = i * table;
    rows.push(
      <View style={styles.row} key={i}>
        <Text style={styles.cell}>{table}</Text>
        <Text style={styles.cell}>x</Text>
        <Text style={styles.cell}>{i}</Text>
        <Text style={styles.cell}>=</Text>
        <Text style={styles.cell}>{product}</Text>
      </View>
    );
  }

  return (
    <View style={styles.table}>
      {rows}
    </View>
  );
};

const Table_Here = () => {
  const [inputValue, setInputValue] = React.useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setInputValue}
        value={inputValue}
        keyboardType="numeric"
        placeholder="Enter a number"
      />
      <MultiplicationTable inputValue={inputValue} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  table: {
    borderWidth: 1,
    borderColor: '#000',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    padding: 5,
    borderWidth: 1,
    borderColor: '#000',
    textAlign: 'center',
    color:'#000'
  },
  error: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  errorText: {
    color: 'red',
  },
});

export default Table_Here;
