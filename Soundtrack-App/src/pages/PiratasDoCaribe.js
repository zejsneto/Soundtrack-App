import React from "react";
import { Text, View, Image, Animated, Easing, Dimensions, ScrollView } from "react-native";
import Button from "../components/button";
import {Audio} from 'expo-av';

export class PiratasDoCaribe extends React.Component {
  constructor(props){
    super(props);
    this.som = new Audio.Sound();
    this.som.loadAsync(require('../../assets/sounds/soundPiratas.m4a'));
    this.state={
      valor: new Animated.Value(0),
      dimensao: Dimensions.get("window")
    }
  }
  
  animacaoESom(){
    this.tocar();
    this.animacao(Easing.linear);
  }

  tocar(){
    this.som.setPositionAsync(0);
    this.som.playAsync(); 
  }

  animacao(movimento){
    this.state.valor.setValue(0);
    Animated.timing(
      this.state.valor,
      {
        toValue: this.state.dimensao.width-50,
        duration: 30000,
        easing: movimento
      }
    ).start();
  }

  voltar() {
    this.som.stopAsync();
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View>
        <Image style={{justifyContent: 'center', alignSelf: 'center'}} source={require('../../assets/img/imgPiratas.jpg')}></Image>
        <Text> </Text>        
        <Text style={{fontWeight: 'bold', fontSize: 16}}> Descrição: </Text>
        <Text>O pirata Jack Sparrow tem seu navio saqueado e roubado pelo capitão Barbossa e sua tripulação.</Text>
        <Text> </Text>
        <Text style={{fontWeight: 'bold', fontSize: 16}}> Ano de lançamento:</Text>
        <Text> 2003 </Text>
        <Text>  </Text>
        <Text style={{fontWeight: 'bold', fontSize: 16}}> Diretor: </Text>
        <Text> Gore Verbinski </Text>
        <Text>  </Text>

        <Animated.View style={
          {
            width: 35,
            height: 35,
            backgroundColor: 'red',
            marginLeft: this.state.valor,
            borderRadius: '50%'
          }
        }/>

        <Button style={{color:'blue'}} onPress={() => this.animacaoESom()} text={"Play"} />

        <Button onPress={() => this.voltar()} text={"Voltar"} />
      </View>
    );
  }
}
