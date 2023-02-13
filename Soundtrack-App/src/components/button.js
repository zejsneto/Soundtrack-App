import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import stylesButton from "../styles/stylesButton";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.onPress()}
        style={stylesButton.button}
      >
        <Text>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

export default Button;
