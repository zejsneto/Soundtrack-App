import React from 'react';
import { View, Text, Button, TextInput, AsyncStorage} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export class Login extends React.Component{
  constructor(props) {
    super(props);
    this.usuario = '';
    this.senha = '';
  }
  ler() {
    console.log('ler');
    AsyncStorage.getItem(this.usuario, (erro, valor) => {
      if (erro == undefined && valor != null) {
        if (this.senha == valor) {
          this.props.navigation.navigate("Títulos")
        } else {
          alert('Senha incorreta');
        }
      } else {
        alert('Usuário não encontrado!');
      }
    });
  }

  render(){
    return(
      <View>
        <Text style={{ fontSize: 20 }}>Usuário: </Text>
        <TextInput
          placeholder="digite o usuário"
          style={{ fontSize: 20 }}
          onChangeText={(texto) => (this.usuario = texto)}></TextInput>
        <Text style={{ fontSize: 20 }}>Senha: </Text>
        <TextInput
          placeholder="digite a senha"
          style={{ fontSize: 20 }}
          secureTextEntry={true}
          onChangeText={(texto) => (this.senha = texto)}></TextInput>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
        <Button title="Login" onPress={() => this.ler()} />
      </View>
    )
  }
}


export class Cadastro extends React.Component {
  constructor(props) {
    super(props);
    this.usuario = '';
    this.senha = '';
  }

  gravar() {
    AsyncStorage.setItem(this.usuario, this.senha, (erro) => {
      console.log('entrou no async');
      if (erro == undefined) {
        alert('Gravado com sucesso!');
      } else {
        alert('Erro! Não gravado');
      }
    });
  }

  render() {
    return (
      <View
      style={{display: 'flex', 
                  flexDirection:'column', 
                  justifyContent: 'cente', height: '100%',
                  backgroundColor: "rgba(255,255,255,0.8)"}}>
        <Text style={{ fontSize: 20 }}>Cadastro Usuário: </Text>
        <TextInput
          style={{ fontSize: 20 }}
          onChangeText={(texto) => (this.usuario = texto)}></TextInput>
        <Text style={{ fontSize: 20 }}>Cadastro Senha: </Text>
        <TextInput
          style={{ fontSize: 20 }}
          onChangeText={(texto) => (this.senha = texto)}></TextInput>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
        <Button title="Cadastro" onPress={() => this.gravar()} />
      </View>
    );
  }
}
