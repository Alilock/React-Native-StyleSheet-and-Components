import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Components/Header";
import Card from "./Components/Card";
import File from "./Components/File";

export default function App() {
  return (
    <View style={styles.pageWrapper}>
      <View style={{ flex: 1 }}>
        <Header />
        <Card />
      </View>
      <View style={{ flex: 1 }}>
        <File />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageWrapper: {
    paddingTop: 60,
    paddingHorizontal: 20,
    flex: 1,
  },
});
