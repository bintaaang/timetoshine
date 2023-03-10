import { useNavigation } from '@react-navigation/core'
import React, {useEffect, useState} from 'react'
import { StyleSheet, Text,  View , Pressable, FlatList, TouchableHighlight, ScrollView, TouchableOpacity, Alert} from 'react-native'
import 'firebase/firestore';
import firebase from '../database/firebase'

const LandingU = () => {
  const [datakereta, setDataKereta] = useState([]);

  const BeliT = () => {
    
    Alert.alert(
      "Yakinn Beli Tiket ni Bang?",
      "Apa abang yakin ?",
      [
        {
          text: "Batal",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Beli",
          onPress: async () => {
            console.log("Sukses Beli");
            Alert.alert("Sukses Beli!");
        }
        }
      ],
      { cancelable: false }
    );
  }

  useEffect(() => {
    //const unsubscribe = 
      firebase
      .firestore()
      .collection('datakereta')
      .get()
      .then((querySnapshot) => {
        const updatedDataKereta = [];
        querySnapshot.forEach((doc) => {
          updatedDataKereta.push({
            id: doc.id,
            jamb: doc.data().jamb,
            jamt: doc.data().jamt,
            kodek: doc.data().kodek,
            lokasia: doc.data().lokasia,
            lokasit: doc.data().lokasit,
            namak: doc.data().namak
          });
        });
        setDataKereta(updatedDataKereta);
      });
    //return () => unsubscribe();
  }, []);

  return (
    <View>
      <ScrollView>
      {datakereta.map((dataker) => (
      <TouchableHighlight key={dataker.key} underlayColor='#dddddd'>
        <View style={styles.container}>
          <Text>ID: {dataker.id}</Text>
          <Text>Jam Berangkat: {dataker.jamb}</Text>
          <Text>Jam Tiba: {dataker.jamt}</Text>
          <Text>Kode Kereta: {dataker.kodek}</Text>
          <Text>Lokasi Awal: {dataker.lokasia}</Text>
          <Text>Lokasi Tujuan: {dataker.lokasit}</Text>
          <Text>Nama Kereta: {dataker.namak}</Text>
          <TouchableOpacity
          onPress={() => { BeliT(); }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Beli</Text>
        </TouchableOpacity>
        </View>
        </TouchableHighlight>
      ))}
      </ScrollView>
    </View>
  );
}

export default LandingU

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e5e5e5',
    padding: 15,
    borderRadius: 15,
    margin: 5,
    marginHorizontal: 10,
  },
   innerContainer: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  itemHeading: {
    fontWeight: 'bold',
  },
  itemText: {
    fontWeight: '300',
  },
  button: {
    backgroundColor: '#0782F9',
    width: '50%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  }
})
