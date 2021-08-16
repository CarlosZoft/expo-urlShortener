import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SelectOption from './src/atoms/selectOptions'

export default function App() {
  let data = [{value: 10, name: '10 anos'}, {value: 15, name: '15 anos'}]
  
  return (
    <View >
      <SelectOption 
        fields = {data}
      /><StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
