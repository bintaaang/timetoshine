import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import COLORS from "../src/consts/colors";

const OnBoard = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground
        style={{ flex: 1 }}
        source={require("../src/assets/location1.jpeg")}
      >
        <View style={style.details}>
          <Text
            style={{ color: COLORS.white, fontSize: 35, fontWeight: "bold" }}
          >
            KERETAKU
          </Text>
          <Text
            style={{ color: COLORS.white, fontSize: 35, fontWeight: "bold" }}
          >
            Abad Kekosongan
          </Text>
          <Text
            style={{
              color: COLORS.white,

              lineHeight: 25,
              marginTop: 15,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <View style={style.btn}>
              <Text>Lanjut</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
const style = StyleSheet.create({
  details: {
    height: "50%",
    bottom: 0,
    position: "absolute",
    paddingHorizontal: 40,
  },
  btn: {
    backgroundColor: COLORS.white,
    height: 50,
    width: 120,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
  },
});
export default OnBoard;
