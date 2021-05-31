import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { colors } from "../shared/colors";
import LightenDarkenColor from '../../lib/colorchange'



export const Button = (props) => {
  var backgroundColor = props.backgroundColor;
  var borderColor = LightenDarkenColor(backgroundColor, 50)
  

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: backgroundColor, borderColor: borderColor }, { ...props.style }]}
      onPress={props.onPress}
    >
      <Text style={[styles.text]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    height: 80,
    borderRadius: 10,
    margin: 5,
    borderColor: 'white',
    borderWidth: 2
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.text,
  },
});

Button.defaultProps = {
  onPress: function () {},
  title: "hello",
  backgroundColor: "black",
  style: {},
};
