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

    // Simulando sucesso no login
    setLoggedIn(true);
  };

  return (
    <View style={styles.container}>
      {!loggedIn ? (
        <>
          <Text>FUTSTATS</Text>

          <Ionicons
            name="football"
            size={100}
            style={styles.logo_fut}
            color="white"
          />

          <TextInput
            style={styles.input}
            placeholder="Nome de usuário"
            onChangeText={setUsername}
            value={username}
          />

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
          <Button title="Logout" onPress={() => setLoggedIn(false)} />
          <Text>FUTSTATS</Text>

          <View style={styles.playerContainer}>
            <View style={styles.playerBox}>
              <Text>HAALAND</Text>
            </View>
            <View style={styles.playerBox}>
              <Text>MBAPPE</Text>
            </View>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statsBox}><Text>aaaa</Text></View>
            <View style={styles.statsBox}><Text>aaaa</Text></View>
            <View style={styles.statsBox}><Text>aaaa</Text></View>
            <View style={styles.statsBox}><Text>aaaa</Text></View>
            <View style={styles.statsBox}><Text>aaaa</Text></View>
            <View style={styles.statsBox}><Text>aaaa</Text></View>
            <View style={styles.statsBox}><Text>aaaa</Text></View>
            <View style={styles.statsBox}><Text>aaaa</Text></View>
            <View style={styles.statsBox}><Text>aaaa</Text></View>
            <View style={styles.statsBox}><Text>aaaa</Text></View>
            <View style={styles.statsBox}><Text>aaaa</Text></View>
            <View style={styles.statsBox}><Text>aaaa</Text></View>
          </View>
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
    backgroundColor: "#063508",
  },
  logo_fut: {
    paddingBottom: 100,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 4,
    paddingLeft: 40,
    marginBottom: 16,
    backgroundColor: "#85DE5C",
  },
  loggedInContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  
  playerContainer: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
  },
  playerBox: {
    marginHorizontal: 30,
    backgroundColor: "#85DE5C",
    height: 110,
    width: 140,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  statsContainer: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
  },
  statsBox: {
    marginHorizontal: 30,
    backgroundColor: "#85DE5C",
    height: 110,
    width: 140,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 10
  },
});

export default Login;
