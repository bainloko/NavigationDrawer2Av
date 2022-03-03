/*
* @bainloko
* DDM I
* 05/10/2021
*/

import * as React from 'react';
import { View, StatusBar, Text, TextInput, Pressable, StyleSheet } from 'react-native';

export default class App extends React.Component {
  state = {
    valor1: 0.0,
    valor2: 0.0,
    resultado: 0.0
  }

  atualizaValor1 = (number) => {
    this.setState({valor1: number})
  }

  atualizaValor2 = (number) => {
    this.setState({valor2: number})
  }
  
  roundAccurately(number, decimalPlaces){
    decimalPlaces = 3;
    return Number(Math.round(number + "e" + decimalPlaces) + "e-" + decimalPlaces); //code courtesy of Jack Moore https://www.jacklmoore.com/notes/rounding-in-javascript/ - in this case, I'll set the decimal places to a constant three, which is fine for me' applications. thanks m8 HUAHUEAHUAEUH
  } //code courtesy of Jack Moore https://www.jacklmoore.com/notes/rounding-in-javascript/ - in this case, I'll set the decimal places to a constant three, which is fine for me' applications. thanks m8 HUAHUEAHUAEUH

  somar(){
    this.state.resultado = parseFloat(this.state.valor1) + parseFloat(this.state.valor2);
    document.getElementById("resultado").innerHTML = ("O resultado desta soma é " + this.roundAccurately(this.state.resultado, 3));
  }

  subtrair(){
    this.state.resultado = parseFloat(this.state.valor1) - parseFloat(this.state.valor2);
    document.getElementById("resultado").innerHTML = ("O resultado desta subtração é " + this.roundAccurately(this.state.resultado, 3));
  }

  multiplicar(){
    this.state.resultado = parseFloat(this.state.valor1) * parseFloat(this.state.valor2);
    document.getElementById("resultado").innerHTML = ("O resultado desta multiplicação é " + this.roundAccurately(this.state.resultado, 3));
  }

  dividir(){
    this.state.resultado = parseFloat(this.state.valor1) / parseFloat(this.state.valor2);
    document.getElementById("resultado").innerHTML = ("O resultado desta divisão é " + this.roundAccurately(this.state.resultado, 3));
  }
  
  render(){
    return(
      <View style={meuEstilo.container}>
        <StatusBar />
        <Text style={meuEstilo.textoInicial}><span>Operações Matemáticas...</span></Text>
        <TextInput style={meuEstilo.inputExemplo} underlineColorAndroid="transparent" placeholder="Digite o primeiro valor" autoCapitalize="none" onChangeText={this.atualizaValor1} keyboardType="numeric" />
        <TextInput style={meuEstilo.inputExemplo2} underlineColorAndroid="transparent" placeholder="Digite o segundo valor" autoCapitalize="none" onChangeText={this.atualizaValor2} keyboardType="numeric" /> 
        <Text style={meuEstilo.textoResultado}><span id="resultado"></span></Text>
        <Text style={meuEstilo.textoHr}><hr /></Text>
        <Pressable style={meuEstilo.botaoExemplo} onPress={()=>this.somar(this.state.valor1, this.state.valor2, this.state.resultado)}>
          <Text style={meuEstilo.fonteExemplo}>Somar</Text>
        </Pressable>
        <Pressable style={meuEstilo.botaoExemplo} onPress={()=>this.subtrair(this.state.valor1, this.state.valor2, this.state.resultado)}>
          <Text style={meuEstilo.fonteExemplo}>Subtrair</Text>
        </Pressable>
        <Pressable style={meuEstilo.botaoExemplo} onPress={()=>this.multiplicar(this.state.valor1, this.state.valor2, this.state.resultado)}>
          <Text style={meuEstilo.fonteExemplo}>Multiplicar</Text>
        </Pressable>
        <Pressable style={meuEstilo.botaoExemplo} onPress={()=>this.dividir(this.state.valor1, this.state.valor2, this.state.resultado)}>
          <Text style={meuEstilo.fonteExemplo}>Dividir</Text>
        </Pressable>
      </View>
    );
  }
}

/** 
* como fazer as operações (funções) fora da classe? R = importar arquivo com as funções e chamá-las em qualquer lugar do código. "import funcaoA from './funcaoA'"
* como verificar erros na entrada de dados? (letras, caracteres especiais no lugar dos números...) - como inserir try catch? R = TypeScript... muito complicado
* como colocar os botões um ao lado do outro? como fazer uma interface de app de verdade? R = ideias (https://www.instamobile.io/react-native-tutorials/best-free-react-native-app-templates-2018/) behance ou aguardar próximas aulas
*/

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