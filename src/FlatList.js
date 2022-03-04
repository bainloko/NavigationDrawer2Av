/*
* @bainloko, code courtesy of docs.expo.dev
* DDM II
* 14/02/2022
*/

import React, { useState } from 'react';
import { FlatList, StatusBar, StyleSheet, Text, View, TouchableOpacity, } from 'react-native';

const DATA = [
  {
    id: '00001-3',
    title: 'Pai',
  },
  {
    id: '00002-2',
    title: 'Mãe',
  },
  {
    id: '00003-1',
    title: 'Irmão',
  },
  {
    id: '00004-0',
    title: 'Irmã',
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.itemList, backgroundColor]}>
    <Text style={[styles.titleList, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

export default function App() {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id, alert('Você clicou no(a) ' + item.title))}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <View style={styles.containerList}>
      <StatusBar />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerList: {
    margin: StatusBar.currentHeight || 0,
  },

  itemList: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  titleList: {
    fontSize: 32,
  },
});