import React from 'react';
import { View, Text, Button } from 'react-native';

const ListScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>List Screen</Text>
      <Button
        title="Go to Detail"
        onPress={() => navigation.navigate('Home', { itemId: 1, otherParam: 'anything' })}
      />
    </View>
  );
};

export default ListScreen;
