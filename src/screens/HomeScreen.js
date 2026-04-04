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
      <View style={styles.card}>
        <Text style={styles.title}>CYBER COIN</Text>

        <Coin result={result} />

        <TouchableOpacity style={styles.button} onPress={lanzarMoneda}>
          <Text style={styles.buttonText}>Lanzar</Text>
        </TouchableOpacity>

        {result && <Text style={styles.result}>{result}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a0f",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: "85%",
    padding: 30,
    borderRadius: 20,
    backgroundColor: "#111122",

    // Glow efecto cyberpunk
    borderWidth: 1,
    borderColor: "#7f00ff",
    shadowColor: "#7f00ff",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 20,
    elevation: 20,

    alignItems: "center",
  },

  title: {
    fontSize: 28,
    color: "#00e5ff",
    marginBottom: 30,
    fontWeight: "bold",
    textShadowColor: "#00e5ff",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },

  button: {
    marginTop: 25,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 12,
    backgroundColor: "#00ff9f",

    shadowColor: "#00ff9f",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },

  buttonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },

  result: {
    marginTop: 20,
    fontSize: 32,
    color: "#ff00ff",

    textShadowColor: "#ff00ff",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 15,
  },
});