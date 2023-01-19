import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import BeliTiket from './screens/BeliTiket';
import LandingU from './screens/LandingU';
import LoginScreenA from './screens/LoginScreenA';
import LoginScreenU from './screens/LoginScreenU';
import HomeScreenA from './screens/HomeScreenA';
import HomeScreenU from './screens/HomeScreenU';
import Peta from './screens/Peta';
import ListPeta from './screens/ListPeta';
import Crud from './screens/Crud';
import Fetch from './screens/Fetch';
import Splash from './screens/Splash';
import OnBoard from './screens/OnBoard';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Splah" component={Splash} />
        <Stack.Screen options={{ headerShown: false }} name="OnBoard" component={OnBoard} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="HomeA" component={HomeScreenA} />
        <Stack.Screen name="LandingU" component={LandingU} />
        <Stack.Screen name="LoginA" component={LoginScreenA} />
        <Stack.Screen name="Beli" component={BeliTiket} />
        <Stack.Screen name="LoginU" component={LoginScreenU} />
        <Stack.Screen name="HomeU" component={HomeScreenU} />
        <Stack.Screen name="Peta" component={Peta} />
        <Stack.Screen name="ListPeta" component={ListPeta} />
        <Stack.Screen name="Crud" component={Crud} />
        <Stack.Screen name="Fetch" component={Fetch} />
      </Stack.Navigator>
    </NavigationContainer>
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
