import React from "react";
import { Text, View } from "react-native";
import Button from "../components/button";

export class Titulos extends React.Component {
  constructor(props) {
    super(props);
  }
  goToPiratas() {
    this.props.navigation.navigate("Piratas do Caribe");
  }
  goToIndiana() {
    this.props.navigation.navigate("Indiana Jones");
  }
  goToStarWars() {
    this.props.navigation.navigate("Star Wars");
  }
  goToGoW() {
    this.props.navigation.navigate("God of War: Ragnarok");
  }
  goToSkyrim() {
    this.props.navigation.navigate("TES V: Skyrim");
  }
  goToCuphead() {
    this.props.navigation.navigate("Cuphead");
  }
  goToGoT() {
    this.props.navigation.navigate("Game of Thrones");
  }
  goToStranger() {
    this.props.navigation.navigate("Stranger Things");
  }
  goToTWD() {
    this.props.navigation.navigate("The Walking Dead");
  }

  render() {
    return (
      <View style={{display: 'flex', height: "100%", justifyContent: ''}}>
        <Text style={{fontWeight: 'bold', fontSize: 30, textAlign: 'center'}}>MySoundtracks</Text>
        <Text> </Text>  
        <Text> </Text>  
        <Text style={{fontWeight: 'bold', fontSize: 20, marginLeft: 5, alignSelf: 'center'}}>FILMES</Text>
        <Text> </Text>        
        <Button style={{marginLeft: 5}} onPress={() => this.goToPiratas()} text={"Piratas do Caribe"} />
        <Text> </Text>   
        <Button style={{marginLeft: 5}} onPress={() => this.goToIndiana()} text={"Indiana Jones"} />
        <Text> </Text>           
        <Button style={{marginLeft: 5}} onPress={() => this.goToStarWars()} text={"Star Wars"} />
        <Text> </Text>  
        <Text style={{fontWeight: 'bold', fontSize: 20, marginLeft: 5, alignSelf: 'center'}}>JOGOS</Text>
        <Text> </Text>           
        <Button style={{marginLeft: 5}} onPress={() => this.goToGoW()} text={"God of War: Ragnarok"} />
        <Text> </Text>           
        <Button style={{marginLeft: 5}} onPress={() => this.goToSkyrim()} text={"TES V: Skyrim"} />
        <Text> </Text>           
        <Button style={{marginLeft: 5}} onPress={() => this.goToCuphead()} text={"Cuphead"} />
        <Text> </Text>  
        <Text style={{fontWeight: 'bold', fontSize: 20, marginLeft: 5, alignSelf: 'center'}}>SÉRIES</Text>
        <Text> </Text>           
        <Button style={{marginLeft: 5}} onPress={() => this.goToGoT()} text={"Game of Thrones"} />
        <Text> </Text>           
        <Button style={{marginLeft: 5}} onPress={() => this.goToStranger()} text={"Stranger Things"} />
        <Text> </Text>           
        <Button style={{marginLeft: 5}} onPress={() => this.goToTWD()} text={"The Walking Dead"} />
      </View>
    );
  }
}
