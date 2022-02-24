/*
* @bainloko
* DDM I
* 22/10/2021 e 31/10/2021
*/

import * as React from 'react';
import { View, StatusBar, Pressable, Text, StyleSheet } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {
  const falar = () => {
    var thingToSay = 'Olá, pessoas da informática!';
    Speech.speak(thingToSay, { language: "pt-BR" });
  };

  return (
    <View style={estilos.container}>
      <StatusBar />
      <Pressable style={estilos.botaoExemplo} onPress={falar}>
        <Text style={estilos.fonteExemplo}>Clique aqui para escutar o TTS do aplicativo!</Text>
      </Pressable>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },

  botaoExemplo: {
    backgroundColor: 'black',
    marginTop: 5,
    paddingVertical: 12,
    width: 300,
    textAlign: 'center',
    borderRadius: 4,
    elevation: 3,
  },

  fonteExemplo: {
    color: 'white',
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
  },
});