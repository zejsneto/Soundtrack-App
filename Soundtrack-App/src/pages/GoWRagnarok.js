import React from "react";
import { Text, View, Image, Animated, Easing, Dimensions, ScrollView } from "react-native";
import Button from "../components/button";
import {Audio} from 'expo-av';

export class GoWRagnarok extends React.Component {
  constructor(props){
    super(props);
    this.som = new Audio.Sound();
    this.som.loadAsync(require('../../assets/sounds/soundGoW.m4a'));
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
        <Image style={{justifyContent: 'center', alignSelf: 'center'}} source={require('../../assets/img/imgGoW.jpg')}></Image>
        <Text> </Text>        
        <Text style={{fontWeight: 'bold', fontSize: 16}}> Descrição: </Text>
        <Text>God of War Ragnarök é um jogo eletrônico de ação-aventura desenvolvido pela Santa Monica Studio e publicado pela Sony Interactive Entertainment.</Text>
        <Text> </Text>
        <Text style={{fontWeight: 'bold', fontSize: 16}}> Ano de lançamento:</Text>
        <Text> 2022 </Text>
        <Text>  </Text>
        <Text style={{fontWeight: 'bold', fontSize: 16}}> Desenvolvedora: </Text>
        <Text> Santa Monica Studio </Text>
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
