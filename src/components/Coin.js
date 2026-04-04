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

  return (
    <Animated.View
      style={[
        styles.coin,
        {
          transform: [{ rotateY: rotate }],
        },
      ]}
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
  },

  text: {
    fontSize: 42,
    color: "#00ff9f",
    fontWeight: "bold",
  },
});