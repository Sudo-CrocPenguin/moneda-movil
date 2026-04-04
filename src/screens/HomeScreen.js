import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Coin from "../components/Coin";

export default function HomeScreen() {
  const [result, setResult] = useState(null);

  const lanzarMoneda = () => {
    const random = Math.random() < 0.5 ? "Sí" : "No";
    setResult(random);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Moneda</Text>

      <Coin result={result} />

      <TouchableOpacity style={styles.button} onPress={lanzarMoneda}>
        <Text style={styles.buttonText}>Lanzar</Text>
      </TouchableOpacity>

      {result && <Text style={styles.result}>{result}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
  },
  title: {
    fontSize: 32,
    color: "#fff",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#00c853",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  result: {
    marginTop: 20,
    fontSize: 28,
    color: "#fff",
  },
});