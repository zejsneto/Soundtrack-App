import React from "react";
import { TextInput } from "react-native";
import stylesInput from "../styles/stylesInput";

class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TextInput
        style={stylesInput.input}
        placeholder={this.props.placeholder}
        onChangeText={(text) => this.props.setValor(text)}
        textAlign="center"
      />
    );
  }
}

export default Input;
