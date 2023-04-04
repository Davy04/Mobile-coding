import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const data = [
  { id: 1, title: '0' },
  { id: 2, title: '1' },
  { id: 3, title: '2' },
  { id: 4, title: '3' },
  { id: 5, title: '4' },
  { id: 6, title: '5' },
  { id: 7, title: '6' },
  { id: 8, title: '7' },
  { id: 9, title: '8' },
  { id: 9, title: '9' },
];

const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Text>{item.title}</Text>
  </View>
);

const App = () => {
  return (
    <FlatList
      data={data}
      numColumns={2}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  item: {
    backgroundColor: '#00FF00',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 8,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
