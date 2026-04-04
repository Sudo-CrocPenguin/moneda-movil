import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Haptics from "expo-haptics";

import Coin from "../components/Coin";

export default function HomeScreen() {
  const [result, setResult] = useState(null);
  const [trigger, setTrigger] = useState(false);
  const [mode, setMode] = useState("50");
  const [message, setMessage] = useState("");

  const scale60 = useRef(new Animated.Value(1)).current;
  const scale50 = useRef(new Animated.Value(1)).current;
  const scale40 = useRef(new Animated.Value(1)).current;

  const animateCard = (scaleRef) => {
    Animated.sequence([
      Animated.timing(scaleRef, {
        toValue: 1.1,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scaleRef, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const getMessage = (res) => {
    if (res === "Sí") {
      const mensajes = [
        "Hazlo 😈",
        "Confía en eso 🔥",
        "Es tu momento 🚀",
      ];
      return mensajes[Math.floor(Math.random() * mensajes.length)];
    } else {
      const mensajes = [
        "Mejor no... 👀",
        "Piénsalo bien 🤔",
        "No es el momento ❌",
      ];
      return mensajes[Math.floor(Math.random() * mensajes.length)];
    }
  };

  const lanzarMoneda = async () => {
    setTrigger(false);

    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);

    setTimeout(() => {
      let prob;

      if (mode === "60") prob = Math.random() < 0.6;
      else if (mode === "40") prob = Math.random() < 0.4;
      else prob = Math.random() < 0.5;

      const res = prob ? "Sí" : "No";
      setResult(res);
      setMessage(getMessage(res));
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

        {/* MENSAJE */}
        {message !== "" && <Text style={styles.message}>{message}</Text>}

        {/* SELECTOR */}
        <View style={styles.selector}>
          <Animated.View style={{ transform: [{ scale: scale60 }] }}>
            <TouchableOpacity
              style={[styles.cardOption, mode === "60" && styles.activeCard]}
              onPress={() => {
                setMode("60");
                animateCard(scale60);
              }}
            >
              <Text style={styles.optionTitle}>Más probable</Text>
              <Text style={styles.optionHighlight}>SÍ</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View style={{ transform: [{ scale: scale50 }] }}>
            <TouchableOpacity
              style={[styles.cardOption, mode === "50" && styles.activeCard]}
              onPress={() => {
                setMode("50");
                animateCard(scale50);
              }}
            >
              <Text style={styles.optionTitle}>Equilibrado</Text>
              <Text style={styles.optionHighlight}>50/50</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View style={{ transform: [{ scale: scale40 }] }}>
            <TouchableOpacity
              style={[styles.cardOption, mode === "40" && styles.activeCard]}
              onPress={() => {
                setMode("40");
                animateCard(scale40);
              }}
            >
              <Text style={styles.optionTitle}>Más probable</Text>
              <Text style={styles.optionHighlight}>NO</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>

        <TouchableOpacity style={styles.button} onPress={lanzarMoneda}>
          <Text style={styles.buttonText}>Lanzar</Text>
        </TouchableOpacity>

        {result && <Text style={styles.result}>{result}</Text>}
      </View>

      <Text style={styles.footer}>
        App desarrollada por Miguel Angel Blandon Montes
      </Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },

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

  message: {
    marginTop: 10,
    color: "#00ff9f",
    fontSize: 16,
  },

  selector: {
    flexDirection: "row",
    marginTop: 25,
    gap: 10,
  },

  cardOption: {
    flex: 1,
    padding: 12,
    borderRadius: 12,
    backgroundColor: "#1a1a2e",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#333",
  },

  activeCard: {
    borderColor: "#00e5ff",
    shadowColor: "#00e5ff",
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
  },

  optionTitle: {
    color: "#aaa",
    fontSize: 12,
  },

  optionHighlight: {
    color: "#00ff9f",
    fontSize: 16,
    fontWeight: "bold",
  },

  button: {
    marginTop: 25,
    padding: 12,
    backgroundColor: "#00ff9f",
    borderRadius: 10,
  },

  buttonText: {
    color: "#000",
    fontWeight: "bold",
  },

  result: {
    marginTop: 15,
    fontSize: 28,
    color: "#ff00ff",
  },

  footer: {
    position: "absolute",
    bottom: 20,
    color: "#555",
    fontSize: 12,
  },
});