import * as ExpoReferenceLib from "expo-reference-lib";
import { useState } from "react";
import { StyleSheet, Button, View, TextInput } from "react-native";

export default function App() {
  const [text, setText] = useState("");

  const press = () => {
    ExpoReferenceLib.presentReferenceLibraryAsync(text);
    setTimeout(() => {
      ExpoReferenceLib.dismissReferenceLibraryAsync(); // IOS only
    }, 5000);
  };

  return (
    <View style={styles.container}>
      <TextInput value={text} onChangeText={setText} style={styles.input} />
      <Button title="Look Up" onPress={press} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "80%",
    height: 30,
    borderWidth: 1,
  },
});
