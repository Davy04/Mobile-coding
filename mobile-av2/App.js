import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './src/components/TabNavigator';
import { Header } from './src/components/Header';
import { Lista } from './src/components/Lista';


export default function App() {
  return (
    <NavigationContainer>
    <TabNavigator/>
  </NavigationContainer>   

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
  },
});
