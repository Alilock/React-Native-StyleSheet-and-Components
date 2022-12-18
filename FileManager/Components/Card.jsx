import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const Card = () => {
  return (
    <View>
      <LinearGradient colors={["#9d7afb", "#7748fa"]} style={style.card}>
        <View style={{ width: "50%", justifyContent: "center" }}>
          <Image
            source={require("../assets/google-cloud-icon.png")}
            style={style.card.image}
          />
        </View>
        <View style={style.text}>
          <Text style={style.card.text.title}>Unlimited Storage</Text>
          <Text style={style.card.text.price}>$30/year</Text>
          <Text style={style.card.text.date}>Offer till May 26</Text>
          <LinearGradient
            colors={["#fcd444", "#fd9a24"]}
            style={style.card.text.button}
          >
            <Pressable>
              <Text style={style.card.text.button.buttonTitle}>Upgrade</Text>
            </Pressable>
          </LinearGradient>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Card;

const style = StyleSheet.create({
  card: {
    paddingVertical: 20,
    borderRadius: 35,
    flexDirection: "row",
    alignItems: "center",

    image: {
      transform: [{ rotate: "340deg" }],
      width: 150,
      height: 150,
    },
    text: {
      flex: 1,
      title: {
        color: "white",
        fontSize: 18,
        fontWeight: "200",
      },
      price: {
        fontSize: 30,
        fontWeight: "900",
        color: "white",
        lineHeight: 40,
      },
      date: {
        fontSize: 15,
        color: "white",
      },
      button: {
        width: 110,
        borderRadius: 20,
        alignItems: "center",
        paddingVertical: 7,
        marginTop: 10,
        buttonTitle: {
          color: "white",
          fontSize: 17,
          fontWeight: "600",
        },
      },
    },
  },
});
