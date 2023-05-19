import { StyleSheet, Text, View } from 'react-native';

import * as ExpoReferenceLib from 'expo-reference-lib';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoReferenceLib.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
