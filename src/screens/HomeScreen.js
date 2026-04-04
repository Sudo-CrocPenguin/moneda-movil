import React, { useState, useEffect, useRef } from "react";
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

  // Animación glow
  const glowAnim = useRef(new Animated.Value(0)).current;

  // Animación glitch
  const glitchAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(glowAnim, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: false,
        }),
        Animated.timing(glowAnim, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: false,
        }),
      ])
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(glitchAnim, {
          toValue: 5,
          duration: 100,
          useNativeDriver: false,
        }),
        Animated.timing(glitchAnim, {
          toValue: -5,
          duration: 100,
          useNativeDriver: false,
        }),
        Animated.timing(glitchAnim, {
          toValue: 0,
          duration: 100,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, []);

  const lanzarMoneda = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);

    const random = Math.random() < 0.5 ? "Sí" : "No";
    setResult(random);
  };

  const glowColor = glowAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["#7f00ff", "#00e5ff"],
  });

  return (
    <LinearGradient
      colors={["#0a0a0f", "#1a0033", "#001f2f"]}
      style={styles.container}
    >
      <Animated.View style={[styles.card, { borderColor: glowColor }]}>
        
        {/* GLITCH TEXT */}
        <Animated.Text
          style={[
            styles.title,
            { transform: [{ translateX: glitchAnim }] },
          ]}
        >
          CYBER COIN
        </Animated.Text>

        <Coin result={result} />

        <TouchableOpacity style={styles.button} onPress={lanzarMoneda}>
          <Text style={styles.buttonText}>Lanzar</Text>
        </TouchableOpacity>

        {result && <Text style={styles.result}>{result}</Text>}
      </Animated.View>
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
    borderWidth: 2,
    alignItems: "center",
  },

  title: {
    fontSize: 28,
    color: "#00e5ff",
    marginBottom: 30,
    fontWeight: "bold",
    textShadowColor: "#00e5ff",
    textShadowRadius: 15,
  },

  button: {
    marginTop: 25,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 12,
    backgroundColor: "#00ff9f",

    shadowColor: "#00ff9f",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 15,
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
    textShadowRadius: 20,
  },
});