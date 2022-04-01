/*
* @bainloko
* DDM II
* 23/02/2022, 02/03/2022, 29/03/2022, 31/03/2022
*/

import * as React from 'react';
import { StyleSheet, Text, Button, View, Dimensions, AppRegistry } from 'react-native';
import 'react-native-gesture-handler'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as Mapa from './src/Mapa';

function HomeScreen({ navigation }) {
  return (
    <View style={meuEstilo.container}>
      <View style={meuEstilo.botaoExemplo}>
        <Button
          onPress={() => navigation.navigate('Bagé')}
          title="Ir para Bagé"
        />
      </View>

      <View style={meuEstilo.botaoExemplo}>
        <Button
          onPress={() => navigation.navigate('Brasília')}
          title="Ir para Brasília"
        />
      </View>

      <View style={meuEstilo.botaoExemplo}>
        <Button
          onPress={() => navigation.navigate('La Coruña')}
          title="Ir para La Coruña"
        />
      </View>
      
      <View style={meuEstilo.botaoExemplo}>
        <Button
          onPress={() => navigation.navigate('Moscou')}
          title="Ir para Moscou"
        />
      </View>
    </View>
  );
}

function Bage({ navigation }) {
  return (
    <View style={meuEstilo.container}>
      <Mapa.default latitude={-31.33231} longitude={-54.07262} />
    </View>
  );
}

function Brasilia({ navigation }) {
  return (
    <View style={meuEstilo.container}>
      <Mapa.default latitude={-15.79884} longitude={-47.86683} />
    </View>
  );
}

function Coruna({ navigation }) {
  return (
    <View style={meuEstilo.container}>
      <Mapa.default latitude={43.38630} longitude={-8.40647} />
    </View>
  );
}

function Moscou({ navigation }) {
  return (
    <View style={meuEstilo.container}>
      <Mapa.default latitude={55.75409} longitude={37.62039} />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Text style={meuEstilo.fonteExemplo}>Navigation Drawer com MapView - Avaliação 2 @bainloko</Text>
      <Drawer.Navigator initialRouteName="Home"> 
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Bagé" component={Bage} />
        <Drawer.Screen name="Brasília" component={Brasilia} />
        <Drawer.Screen name="La Coruña" component={Coruna} />
        <Drawer.Screen name="Moscou" component={Moscou} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const meuEstilo = StyleSheet.create({
  container: {
    backgroundColor: "#ecf0f1",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  botaoExemplo: {
    marginTop: 10,
    width: 180,
    borderRadius: 4,
    elevation: 3,
  },

  fonteExemplo: {
    marginTop: 50,
    marginBottom: 5,
    fontSize: 14,
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    color: "black",
  },
});

AppRegistry.registerComponent('main', () => App);