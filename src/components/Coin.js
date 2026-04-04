import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Coin({ result }) {
  return (
    <View style={styles.coin}>
      <Text style={styles.text}>
        {result ? result : "?"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  coin: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#fbc02d",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
  },
});