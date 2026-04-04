import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Haptics from "expo-haptics";

import Coin from "../components/Coin";

export default function HomeScreen() {
  const [result, setResult] = useState(null);
  const [trigger, setTrigger] = useState(false);
  const [mode, setMode] = useState("50");

  const lanzarMoneda = async () => {
    setTrigger(false);

    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);

    setTimeout(() => {
      let prob;

      if (mode === "60") prob = Math.random() < 0.6;
      else if (mode === "40") prob = Math.random() < 0.4;
      else prob = Math.random() < 0.5;

      setResult(prob ? "Sí" : "No");
      setTrigger(true);
    }, 200);
  };

  return (
    <LinearGradient
      colors={["#0a0a0f", "#1a0033", "#001f2f"]}
      style={styles.container}
    >
      <View style={styles.card}>
        <Text style={styles.title}>CYBER COIN</Text>

        <Coin result={result} trigger={trigger} />

        {/* SELECTOR */}
        <View style={styles.selector}>
          <TouchableOpacity onPress={() => setMode("60")}>
            <Text style={styles.option}>60/40</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setMode("50")}>
            <Text style={styles.option}>50/50</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setMode("40")}>
            <Text style={styles.option}>40/60</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={lanzarMoneda}>
          <Text style={styles.buttonText}>Lanzar</Text>
        </TouchableOpacity>

        {result && <Text style={styles.result}>{result}</Text>}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: "85%",
    padding: 30,
    borderRadius: 20,
    backgroundColor: "#111122",
    alignItems: "center",

    borderWidth: 1,
    borderColor: "#7f00ff",
  },

  title: {
    fontSize: 28,
    color: "#00e5ff",
    marginBottom: 20,
    fontWeight: "bold",
  },

  selector: {
    flexDirection: "row",
    marginTop: 20,
    gap: 15,
  },

  option: {
    color: "#00ff9f",
    fontSize: 16,
  },

  button: {
    marginTop: 20,
    padding: 12,
    backgroundColor: "#00ff9f",
    borderRadius: 10,
  },

  buttonText: {
    color: "#000",
    fontWeight: "bold",
  },

  result: {
    marginTop: 20,
    fontSize: 30,
    color: "#ff00ff",
  },
});