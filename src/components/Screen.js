import React from "react";
import { Text, View, StyleSheet } from "react-native";

export const Screen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.display}>{props.display}</Text>
      <Text style={styles.operator}>{props.operator}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      padding: 20
  },
  display: {
    fontSize: 60,
    color: "white",
    textAlign: "right",
  },
  operator: {
    fontSize: 30,
    color: 'white',
    textAlign: 'right'
  }
});


Screen.defaultProps = {
  display: ''
}