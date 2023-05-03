import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TokenContextProvider } from "./src/contexts/TokenContext";
import Page from "./src/pages/Page";

export default function App() {
  const token = "ABC123";

  return (
    <TokenContextProvider token={token}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Page />
      </View>
    </TokenContextProvider>
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
