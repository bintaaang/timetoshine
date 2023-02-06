import { useNavigation } from '@react-navigation/core'
import React, { useState} from 'react'
import { StyleSheet, ScrollView, Text, TouchableOpacity, View, Alert, KeyboardAvoidingView, TextInput} from 'react-native'
import { auth } from '../database/firebase'
import 'firebase/firestore';
import firebase from '../database/firebase';
const Crud = () => {
  const [jamb, setJamB] = useState('');
  const [jamt, seJamT] = useState('');
  const [kodek, setKodeK] = useState('');
  const [lokasia, setLokasiA] = useState('');
  const [lokasit, setLokasiT] = useState('');
  const [namak, setNamak] = useState ('');

  const navigation = useNavigation()

  const handleCrud = () => {
    const db = firebase.firestore();
    db.collection('datakereta')
    .add({
      jamb,
      jamt,
      kodek,
      lokasia,
      lokasit,
      namak,
      })
      .then(() => {
          //jika login berhasil maka masuk halaman login
          Alert.alert("Lokasi Berhasil Disimpan")
          navigation.replace("HomeA")
      })
      //jika gagal add data akan muncul error
      .catch((error) => {
          setError(error.message);
    })
  }

  return (
    <View>
      <ScrollView>
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Jam Berangkat"
          value={jamb}
          onChangeText={text => setJamB(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Jam Tiba"
          value={jamt}
          onChangeText={text => seJamT(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Kode Kereta"
          value={kodek}
          onChangeText={text => setKodeK(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Lokasi Awal"
          value={lokasia}
          onChangeText={text => setLokasiA(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Lokasi Tiba"
          value={lokasit}
          onChangeText={text => setLokasiT(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Nama Kereta"
          value={namak}
          onChangeText={text => setNamak(text)}
          style={styles.input}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleCrud}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Simpan</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
    </ScrollView>
    </View>
  )
}

export default Crud

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
})
