import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Page from "./src/pages/Page";

export default function App() {
  const token = "ABC123";

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text>App.tsx {token}</Text>

      <Page token={token} />
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
});
