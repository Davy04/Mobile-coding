import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import DetailScreen from '../screens/DetailScreen';
import ListScreen from '../screens/ListScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="List" component={ListScreen} />
      {/* <Stack.Screen name="Detail" component={DetailScreen} /> */}
    </Stack.Navigator>
  );
};

export default StackNavigator;
