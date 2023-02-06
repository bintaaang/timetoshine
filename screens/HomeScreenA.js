import React from "react";
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const { width } = Dimensions.get("screen");
import { useNavigation } from '@react-navigation/core'
import { auth } from '../database/firebase'
import COLORS from "../src/consts/colors";

const HomeScreenA = () => {

  const navigation = useNavigation()

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }
  const handleCrud = () => {
    auth
        navigation.replace("Crud")
  }

  const handleView = () => {
    auth
        navigation.replace("Fetch")
  }
  

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar translucent backgroundColor={COLORS.primary} />
      <View style={style.header}>
      </View>

      <ScrollView>
        <View
          style={{
            backgroundColor: COLORS.primary,
            height: 120,
            paddingHorizontal: 20,
          }}
        >
          <View>
            <Text
              style={{ color: '#fff', fontWeight: "bold", fontSize: 23 }}
            >
              Home Page Admin!
            </Text>
            <Text
              style={{ color: COLORS.white, fontWeight: "bold", fontSize: 23 }}
            >
              KERETAKU
            </Text>
            <Text style={{ color: COLORS.white, fontWeight: "bold", fontSize: 18 }}
            >Welcome : {auth.currentUser?.email}
            </Text>
          </View>
        </View>
        <View>
          <Text style={style.sectionTitle}>Recommended</Text>
        </View>
   <View style={style.container}>
      <TouchableOpacity
        onPress={handleSignOut}
        style={style.button}
      >
        <Text style={style.buttonText}>Sign out</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleCrud}
        style={style.button}
      >
        <Text style={style.buttonText}>Add Kereta</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Fetch')}
        style={style.button}
      >
        <Text style={style.buttonText}>Data Kereta</Text>
      </TouchableOpacity>
    </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  header: {
    paddingVertical: 30,
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.primary,
  },
  categories: {
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconContainer: {
    height: 60,
    width: 60,
    backgroundColor: COLORS.secondary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  sectionTitle: {
    marginVertical: 20,
    marginHorizontal: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  cardImage: {
    height: 220,
    width: width / 2,
    marginRight: 20,
    padding: 10,
    overflow: "hidden",
    borderRadius: 10,
    // backgroundColor:COLORS.red
  },
  rmCardImage: {
    width: width - 40,
    height: 200,
    overflow: "hidden",
    marginRight: 20,
    padding: 10,
    borderRadius: 10,
  },
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
   button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
    height: 70
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
export default HomeScreenA;
