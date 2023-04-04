import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const data = [
  { id: 1, title: 'one' },
  { id: 2, title: 'two' },
  { id: 3, title: 'three' },
  { id: 4, title: 'four' },
  { id: 5, title: 'five' },
  { id: 6, title: 'six' },
  { id: 7, title: 'seven' },
  { id: 8, title: 'eight' },
  { id: 9, title: 'nine' },
  { id: 10, title: 'ten' },
  { id: 11, title: 'eleven' },
  { id: 12, title: 'twelve' },
  { id: 13, title: 'thirteen' },
  { id: 14, title: 'fourteen' },
  { id: 15, title: 'fifteen' },  
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
      numColumns={3}
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