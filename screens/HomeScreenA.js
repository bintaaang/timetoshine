import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../database/firebase'

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
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleCrud}
        style={styles.button}
      >
        <Text style={styles.buttonText}>CRUD</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleView}
        style={styles.button}
      >
        <Text style={styles.buttonText}>VIEW Kereta</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreenA

const styles = StyleSheet.create({
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
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})
