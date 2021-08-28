import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SelectOption from "./src/atoms/selectOptions";

export default function App() {
  let data = [
    { value: null, name: "Por favor, selecione uma opção!" },
    { value: 10, name: "10 dias" },
    { value: 15, name: "15 dias" },
  ];

  return (
    <View>
      <SelectOption
        fields={data}
        styles={styles.container}
        title="Tempo em dias"
      />
      <StatusBar style="auto"></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 15,
    alignItems: "center",
    marginVertical: 200,
    justifyContent: "center",
  },
});
