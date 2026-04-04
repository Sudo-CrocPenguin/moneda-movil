import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";

export default function Coin({ result }) {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <Animated.View
      style={[styles.coin, { transform: [{ scale: scaleAnim }] }]}
    >
      <Text style={styles.text}>{result ? result : "?"}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  coin: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#1a1a2e",
    justifyContent: "center",
    alignItems: "center",

    borderWidth: 2,
    borderColor: "#00e5ff",

    shadowColor: "#00e5ff",
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 20,
  },

  text: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#00ff9f",
    textShadowColor: "#00ff9f",
    textShadowRadius: 15,
  },
});