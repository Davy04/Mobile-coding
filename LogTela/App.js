import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert} from "react-native";

export default function App() {
  const [usuario, setUsuario] = useState("RogerioCruzeiro");
  const [senha, setSenha] = useState("12345");
  return (
    <View style={styles.container}>
      <View style={styles.boxusuario}>
        <Text>Digite o Usuário:</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder="ex: RogerioCruzeiro"
        onChangeText={setUsuario}
      />
      <Text>
        Usuário: {usuario}
      </Text>  
      </View>

      <View style={styles.boxsenha}>
      <Text> Digite a Senha:</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="ex: 12345"
        onChangeText={setSenha}
      />

      <Text>
        Senha: {senha}
      </Text>

      <View style={styles.button}>
     <Button
     title="ENTRAR"
     onPress={() => Alert.alert('Parabéns! Você logou com sucesso!')}
     />

      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#AFF4C6",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

  },
  input: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#777",
    padding: 5,
    margin: 10,
    width: 200,
  },

  boxusuario: {
    flex: 1,
    backgroundColor: "#AFF4C6",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 320,
  },
  boxsenha: {
    flex: 1,
    backgroundColor: "#AFF4C6",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 320,
  },
  button: {
    backgroundColor: '#D9D9D9',
    color: 'white',
    marginTop: 20
  }

});
