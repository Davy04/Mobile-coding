import { StyleSheet, Text, View } from 'react-native';

export function Header(props) {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
  },
});