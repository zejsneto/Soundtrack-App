import React from "react";
import { Text, View, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Input from "../components/input";

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      pass: "",
    };
  }
  async storeData() {
    const jsonData = JSON.stringify({
      user: this.state.user,
      pass: this.state.pass,
    });
    console.warn(jsonData);
    await AsyncStorage.clear();
    await AsyncStorage.setItem("@userData", jsonData);
    console.log(await AsyncStorage.getItem("@userData"));
  }

  setUser(valor) {
    this.setState({ user: valor });
  }

  setPass(valor) {
    this.setState({ pass: valor });
  }

  render() {
    return (
      <View>
        <Text>Usuario</Text>
        <Input
          placeholder={"Digite o usuario"}
          setValor={(valor) => this.setUser(valor)}
        />
        <Text>Senha</Text>
        <Input
          placeholder={"Digite a senha"}
          setValor={(valor) => this.setPass(valor)}
        />
        <Button title="Confirmar Cadastro" onPress={() => this.storeData()} />
      </View>
    );
  }
}
