import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  // Função de login
  const handleLogin = () => {
    // Lógica de validação de login aqui

    // Simulando sucesso no login.
    setLoggedIn(true);
  };

  return (
    <View style={styles.container}>
      <Ionicons
        name="football"
        size={100}
        style={styles.logo_fut}
        color="black"
      />
      <Text>aaaaaaaa</Text>

      {!loggedIn ? (
        <>
          <Ionicons name="ios-person" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Nome de usuário"
            onChangeText={setUsername}
            value={username}
          />
          <AntDesign name="lock" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry
            onChangeText={setPassword}
            value={password}
          />
          <Button title="Login" onPress={handleLogin} />
        </>
      ) : (
        <View style={styles.loggedInContainer}>
          <Ionicons name="ios-checkmark-circle" size={64} color="green" />
          <Button title="Logout" onPress={() => setLoggedIn(false)} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  logo_fut: {
    paddingBottom: 100,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 4,
    paddingLeft: 40,
    marginBottom: 16,
  },
  loggedInContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Login;
