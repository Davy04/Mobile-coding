import { useState } from 'react';
import { Button,StyleSheet, Text, View, TextInput, Alert } from 'react-native';

export default function App() {
  const { setemail} =useState('blablabla@hotmail.com');
  const clicarbotao = ()=>{ 
  setemail ('blablabla@hotmail.com')
  }
  return (
    <View style={styles.container}>
      <Text>Digite seu e-mail </Text>
      <TextInput
      multiline
        style={ styles.input}
        placeholder= "Ex: blablabla@hotmail.com"
        onChangeText={setemail}
        />
      
        <Text>Digite sua senha: </Text>
        <TextInput
      keyboardType="numeric"
        style= {styles.input}
        placeholder= "***********"
          />
          <Text>
            APERTE EM LOGIN PARA SE CONECTAR!!!
          </Text>
          <Button title="Login"
          onPress= {() => Alert.alert('Vôce se conectou')}  
         />
         
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8B0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
input: {
  borderWidth: 1,
  borderColor: '#FFD700',
  padding : 8,
  margin: 10,
  width : 200,
  }
});
