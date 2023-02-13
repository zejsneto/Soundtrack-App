import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import Feather from "react-native-vector-icons/Feather";

import { Login,Cadastro } from "./src/pages/Login";
//import { Register } from "./src/pages/Register";


import { Titulos } from "./src/pages/Titulos";

import {  PiratasDoCaribe  } from "./src/pages/PiratasDoCaribe";
import {  IndianaJones } from "./src/pages/IndianaJones";
import {  StarWars } from "./src/pages/StarWars";

import {  GoWRagnarok  } from "./src/pages/GoWRagnarok";
import {  Skyrim } from "./src/pages/Skyrim";
import {  Cuphead } from "./src/pages/Cuphead";

import {  GameOfThrones  } from "./src/pages/GameOfThrones";
import {  StrangerThings } from "./src/pages/StrangerThings";
import {  TheWalkingDead } from "./src/pages/TheWalkingDead";


class Nav1 extends React.Component {
  constructor(props) {
    super(props);
    this.nav = createStackNavigator();
  }
  render() {
    return (
      <this.nav.Navigator>
        <Navegacao.Screen name="Login" component={Login} />
        <Navegacao.Screen name="Títulos" component={Titulos} />

        <Navegacao.Screen name="Piratas do Caribe" component={PiratasDoCaribe}/>
        <Navegacao.Screen name="Indiana Jones" component={IndianaJones} />
        <Navegacao.Screen name="Star Wars" component={StarWars} />

        <Navegacao.Screen name="God of War: Ragnarok" component={GoWRagnarok} />
        <Navegacao.Screen name="TES V: Skyrim" component={Skyrim} />
        <Navegacao.Screen name="Cuphead" component={Cuphead} />

        <Navegacao.Screen name="Game of Thrones" component={GameOfThrones} />
        <Navegacao.Screen name="Stranger Things" component={StrangerThings} />
        <Navegacao.Screen name="The Walking Dead" component={TheWalkingDead} />
      </this.nav.Navigator>
    );
  }
}

const Navegacao = createBottomTabNavigator();
class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Navegacao.Navigator>
          <Navegacao.Screen name="MySoundtracks - Login" component={Nav1} />
          <Navegacao.Screen name="MySoundtracks - Registro" component={Cadastro} />
        </Navegacao.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
