/*
 * @bainloko
 * DDM II
 * 15/03/2022, 29/03/2022, 31/03/2022
 */

import { React, useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapView from "react-native-maps";

function roundAccurately(number, decimalPlaces) {
  return Number(
    Math.round(number + "e" + decimalPlaces) + "e-" + decimalPlaces
  ); //code courtesy of Jack Moore https://www.jacklmoore.com/notes/rounding-in-javascript/ - in this case, I'll set the decimal places to a constant three, which is fine for me' applications. thanks m8 HUAHUEAHUAEUH
}

export default function App(props) {
  var [latLng, setLatLng] = useState([props.latitude, props.longitude]);
  var [descricao, setDescricao] = useState("Esta é a descrição do Marcador!");

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={"google"}
        mapType={"hybrid"}
        loadingEnabled={true}
        fitToMap={false}
        initialRegion={{
          latitude: latLng[0],
          longitude: latLng[1],
          latitudeDelta: 0.0,
          longitudeDelta: 0.0,
        }}
      >
        <MapView.Marker
          title={"Este é o título padrão do Marcador!"}
          description={descricao}
          draggable
          coordinate={{ latitude: latLng[0], longitude: latLng[1] }}
          initialRegion={{
            latitude: latLng[0],
            longitude: latLng[1],
            latitudeDelta: 0.0,
            longitudeDelta: 0.0,
          }}
          onPress={(event) => {
            setDescricao(
              "Você está na coordenada " + latLng[0] + ", " + latLng[1] + "!"
            );
            setLatLng([
              roundAccurately(event.nativeEvent.coordinate.latitude, 5),
              roundAccurately(event.nativeEvent.coordinate.longitude, 5),
            ]);
          }}
          onDragEnd={(event) => {
            setDescricao(
              "Você está na coordenada " + latLng[0] + ", " + latLng[1] + "!"
            );
            setLatLng([
              roundAccurately(event.nativeEvent.coordinate.latitude, 5),
              roundAccurately(event.nativeEvent.coordinate.longitude, 5),
            ]);
          }}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  map: {
    marginTop: -40,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 50,
  },
});