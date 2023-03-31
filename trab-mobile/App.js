import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

export default function App() {


  function CaixaDeTextoComMensagem() {
    const [texto, setTexto] = useState('');
  
    function handleChange(event) {
      setTexto(event.target.value);
    }
  
    return (
      <div>
        <input type="text" value={texto} onChange={handleChange} />
        {texto === 'Ligado' && <p>A caixa está ligada!</p>}
      </div>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'left',
  },
});
