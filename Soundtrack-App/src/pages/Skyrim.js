import React from "react";
import { Text, View, Image, Animated, Easing, Dimensions, ScrollView } from "react-native";
import Button from "../components/button";
import {Audio} from 'expo-av';

export class Skyrim extends React.Component {
  constructor(props){
    super(props);
    this.som = new Audio.Sound();
    this.som.loadAsync(require('../../assets/sounds/soundSkyrim.m4a'));
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
        <Image style={{justifyContent: 'center', alignSelf: 'center'}} source={require('../../assets/img/imgSkyrim.jpg')}></Image>
        <Text> </Text>        
        <Text style={{fontWeight: 'bold', fontSize: 16}}> Descrição: </Text>
        <Text>The Elder Scrolls V: Skyrim é um jogo eletrônico de RPG de ação desenvolvido pela Bethesda Game Studios e publicado pela Bethesda Softworks.</Text>
        <Text> </Text>
        <Text style={{fontWeight: 'bold', fontSize: 16}}> Ano de lançamento:</Text>
        <Text> 2011 </Text>
        <Text>  </Text>
        <Text style={{fontWeight: 'bold', fontSize: 16}}> Desenvolvedora: </Text>
        <Text> Bethesda Game Studios </Text>
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
