import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const data = [
  { id: 1, title: '' },
  { id: 2, title: '' },
  { id: 3, title: '' },
  { id: 4, title: '' },
  { id: 5, title: '' },
  { id: 6, title: '' },
  { id: 9, title: ""},
  { id: 9, title: ""},
  { id: 9, title: ""},
  
  
  
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
    padding: 30,
    marginVertical: 8,
    marginHorizontal: 8,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
