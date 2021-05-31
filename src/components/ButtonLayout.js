require("../../lib/swisscalc.lib.format.js");
require("../../lib/swisscalc.lib.operator.js");
require("../../lib/swisscalc.lib.operatorCache.js");
require("../../lib/swisscalc.lib.shuntingYard.js");
require("../../lib/swisscalc.display.numericDisplay.js");
require("../../lib/swisscalc.display.memoryDisplay.js");
require("../../lib/swisscalc.calc.calculator.js");

import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "./Button";
import { colors } from "../shared/colors";
import { Screen } from "./Screen";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
export default class CalculatorScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "0",
      operator: "",
    };

    // Initialize Calculator
    this.oc = global.swisscalc.lib.operatorCache;
    this.calc = new global.swisscalc.calc.calculator();
  }

  //Occurs when a digit is pressed
  onDigitPress = (digit) => {
    this.calc.addDigit(digit);
    this.setState({ display: this.calc.getMainDisplay() });
  };

  //Clears the display
  onClearPress = () => {
    this.calc.clear();
    this.setState({ display: this.calc.getMainDisplay() });
    this.setState({ operator: "" });
  };

  onPlusMinusPress = () => {
    this.calc.negate();
    this.setState({ display: this.calc.getMainDisplay() });
  };

  onEqualsPress = () => {
    this.calc.equalsPressed();
    this.setState({ display: this.calc.getMainDisplay() });
    this.setState({ operator: "" });
  };

  onOperatorPress = (operator, symbol) => {
    this.calc.addBinaryOperator(operator);
    this.setState({ operator: symbol });
  };

  onUnaryOperatorPress = (operator) => {
    this.calc.addUnaryOperator(operator);
    this.setState({ display: this.calc.getMainDisplay() });
    this.setState({ operator: "" });
  };

  onBackspacePress = () => {
    this.calc.backspace();
    this.setState({ display: this.calc.getMainDisplay() });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.display}>
          <Screen display={this.state.display} operator={this.state.operator} />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonRow}>
            <Button
              onPress={() => {
                this.onClearPress();
              }}
              title="C"
              backgroundColor={colors.other}
            />
            <Button
              onPress={() => {
                this.onPlusMinusPress();
              }}
              title="+/-"
              backgroundColor={colors.other}
            />
            <Button
              onPress={() => {
                this.onUnaryOperatorPress(this.oc.PercentOperator);
              }}
              title="%"
              backgroundColor={colors.other}
            />
            <Button
              onPress={() => {
                this.onOperatorPress(this.oc.DivisionOperator, "/");
              }}
              title="/"
              backgroundColor={colors.operators}
            />
          </View>
          <View style={styles.buttonRow}>
            <Button
              onPress={() => {
                this.onDigitPress("7");
              }}
              title="7"
              backgroundColor={colors.digits}
            />
            <Button
              onPress={() => {
                this.onDigitPress("8");
              }}
              title="8"
              backgroundColor={colors.digits}
            />
            <Button
              onPress={() => {
                this.onDigitPress("9");
              }}
              title="9"
              backgroundColor={colors.digits}
            />
            <Button
              onPress={() => {
                this.onOperatorPress(this.oc.MultiplicationOperator, "x");
              }}
              title="x"
              backgroundColor={colors.operators}
            />
          </View>
          <View style={styles.buttonRow}>
            <Button
              onPress={() => {
                this.onDigitPress("4");
              }}
              title="4"
              backgroundColor={colors.digits}
            />
            <Button
              onPress={() => {
                this.onDigitPress("5");
              }}
              title="5"
              backgroundColor={colors.digits}
            />
            <Button
              onPress={() => {
                this.onDigitPress("6");
              }}
              title="6"
              backgroundColor={colors.digits}
            />
            <Button
              onPress={() => {
                this.onOperatorPress(this.oc.SubtractionOperator, "-");
              }}
              title="-"
              backgroundColor={colors.operators}
            />
          </View>
          <View style={styles.buttonRow}>
            <Button
              onPress={() => {
                this.onDigitPress("1");
              }}
              title="1"
              backgroundColor={colors.digits}
            />
            <Button
              onPress={() => {
                this.onDigitPress("2");
              }}
              title="2"
              backgroundColor={colors.digits}
            />
            <Button
              onPress={() => {
                this.onDigitPress("3");
              }}
              title="3"
              backgroundColor={colors.digits}
            />
            <Button
              onPress={() => {
                this.onOperatorPress(this.oc.AdditionOperator, "+");
              }}
              title="+"
              backgroundColor={colors.operators}
            />
          </View>
          <View style={styles.buttonRow}>
            <Button
              onPress={() => {
                this.onBackspacePress();
              }}
              title={<Feather name="delete" size={24} />}
              backgroundColor={colors.digits}
            />
            <Button
              onPress={() => {
                this.onDigitPress("0");
              }}
              title="0"
              backgroundColor={colors.digits}
            />

            <Button
              title="."
              onPress={() => {
                this.onDigitPress(".");
              }}
              backgroundColor={colors.digits}
            />
            <Button
              onPress={() => {
                this.onEqualsPress();
              }}
              title="="
              backgroundColor={colors.operators}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  display: {
    flex: 1,
    justifyContent: "flex-end",
  },
  buttonContainer: {
    paddingBottom: 20,
  },
});
