import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

const Header = () => {
  return (
    <>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Image source={require("../assets/icons/icons8-circled-menu-24.png")} />
        <Image source={require("../assets/icons/icons8-search-24.png")} />
      </View>
      <View style={{ marginVertical: 30 }}>
        <Text style={{ color: "#9293a6", fontWeight: "700", fontSize: 24 }}>
          Hi Ali!
        </Text>
        <Text style={{ color: "#3e4361", fontWeight: "900", fontSize: 30 }}>
          Manage Your File
        </Text>
      </View>
    </>
  );
};

export default Header;
