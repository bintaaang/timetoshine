import { useNavigation } from '@react-navigation/core'
import React, {useEffect, useState, useCallback} from 'react'
import { StyleSheet, Text,  View , Pressable, FlatList, ScrollView, TouchableHighlight, TouchableOpacity, Alert} from 'react-native'
import 'firebase/firestore';
import firebase from '../database/firebase'

const Fetch = () => {
  const navigation = useNavigation()
  const [datakereta, setDataKereta] = useState([]);

  const deleteDoc = async (idBuku) => {
    const firestore = firebase.firestore();
    try {
        await firestore.collection("datakereta").doc(idBuku).delete();
        console.log("Document successfully deleted!");
    } catch (error) {
        console.error("Error removing document: ", error);
    }
}
  const deletedata = useCallback((dataker) => {
    
    Alert.alert(
      "Hapus User",
      "Yakin menghapus akun anda ?",
      [
        {
          text: "Batal",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Hapus",
          onPress: async () => {
            await deleteDoc(dataker.id)
            console.log("User Deleted");
            Alert.alert("User Dihapus!");
            navigation.replace("HomeA");
        }
        }
      ],
      { cancelable: false }
    );
  })

  useEffect(() => {
    //const unsubscribe = 
    firebase.firestore().collection('datakereta').get().then((querySnapshot) => {
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
          onPress={() => navigation.navigate('LoginA')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => { deletedata(dataker); }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
      </TouchableHighlight>
    ))}
    </ScrollView>
  </View>
  );
}

export default Fetch

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
  containerx: {
    position: 'absolute',
    width: '55',
    height: '30',
    background: '#E1C9C9',
  },   
  button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
})