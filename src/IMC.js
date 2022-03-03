/*
* @bainloko
* DDM II
* 18/01/2022
*/

import * as React from 'react';
import { View, StatusBar, Text, TextInput, Pressable, StyleSheet } from 'react-native';

export default class App extends React.Component {
  state = {
    peso: 0.0,
    altura: 0.0,
    resultadoIMC: 0.0
  }

  atualizaPeso = (number) => {
    this.setState({peso: number});
  }
  
  atualizaAltura = (number) => {
    this.setState({altura: number});
  }
  
  roundAccurately(number, decimalPlaces){
    decimalPlaces = 3;
    return Number(Math.round(number + "e" + decimalPlaces) + "e-" + decimalPlaces); //code courtesy of Jack Moore https://www.jacklmoore.com/notes/rounding-in-javascript/ - in this case, I'll set the decimal places to a constant three, which is fine for me' applications. thanks m8 HUAHUEAHUAEUH
  }

  formula(){
    this.state.resultadoIMC = this.roundAccurately((parseFloat(this.state.peso) / (parseFloat(this.state.altura) * parseFloat(this.state.altura))), 3);

    if (this.state.resultadoIMC < 18.5){
      document.getElementById("resultado").innerHTML = ("Seu IMC é " + this.state.resultadoIMC + ".\nVocê está com o peso abaixo\ndo normal. Procure um médico\nassim que possível!");
    } else if (this.state.resultadoIMC > 24.9){
      document.getElementById("resultado").innerHTML = ("Seu IMC é " + this.state.resultadoIMC + ".\nVocê está com o peso acima\ndo normal. Procure um médico\nassim que possível!");
    } else {
      document.getElementById("resultado").innerHTML = ("Seu IMC é " + this.state.resultadoIMC + ".\nVocê está com o peso dentro\ndo normal. Continue assim!");
    }
  }

  render(){
    return(
      <View style={meuEstilo.container}>
        <StatusBar />
          <Text style={meuEstilo.textoInicial}><span>Calculadora do IMC para Adultos</span></Text>
          <TextInput style={meuEstilo.inputExemplo} underlineColorAndroid="transparent" placeholder="Digite o peso (em Kg)" autoCapitalize="none" onChangeText={this.atualizaPeso} keyboardType="numeric" />
          <TextInput style={meuEstilo.inputExemplo2} underlineColorAndroid="transparent" placeholder="Digite a altura (em M)" autoCapitalize="none" onChangeText={this.atualizaAltura} keyboardType="numeric" /> 
          <Text style={meuEstilo.textoResultado}><span id="resultado"></span></Text>
          <Text style={meuEstilo.textoHr}><hr /></Text>
          <Pressable style={meuEstilo.botaoExemplo} onPress={()=>this.formula(this.state.peso, this.state.altura, this.state.resultadoIMC)}>
            <Text style={meuEstilo.fonteExemplo}>Calcular</Text>
          </Pressable>
      </View>
    );
  }
}

const meuEstilo = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textoInicial: {
        marginBottom: 10,
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 21,
        letterSpacing: 0.25,
    },

    inputExemplo: {
        marginTop: 5,
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        borderRadius: 4,
        elevation: 3,
    },

    inputExemplo2: {
        marginTop: 5,
        marginBottom: 10,
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        borderRadius: 4,
        elevation: 3,
    },

    textoResultado: {
        paddingVertical: 3,
        color: 'black',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
    },

    textoHr: {
        width: 200,
    },

    botaoExemplo: {
        backgroundColor: 'black',
        marginTop: 5,
        paddingVertical: 12,
        width: 110,
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