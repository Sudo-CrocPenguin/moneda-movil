import React, { useRef, useEffect } from "react";
import { Animated, Text, StyleSheet } from "react-native";

export default function Coin({ result, trigger }) {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (trigger) {
      rotateAnim.setValue(0);

      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }).start();
    }
  }, [trigger]);

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "720deg"],
  });

  const getColor = () => {
    if (result === "Si") return "#00ff9f";
    if (result === "No") return "#ff1744";
    return "#00e5ff";
  };

  return (
    <Animated.View
      style={[
        styles.coin,
        {
          transform: [{ rotateY: rotate }],
          borderColor: getColor(),
        },
      ]}
    >
      <Text style={[styles.text, { color: getColor() }]}>
        {result ? result : "?"}
      </Text>
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
  },

  text: {
    fontSize: 42,
    fontWeight: "bold",
  },
});