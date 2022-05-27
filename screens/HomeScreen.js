import { TouchableOpacity, StyleSheet, Text, View, TextInput } from 'react-native'
import React, {useState} from 'react'

import { getDatabase, ref, set, update} from "firebase/database"
import { auth} from '../firebase'
import {  useNavigation } from '@react-navigation/native'


const HomeScreen = () => {
  const [walletID, setWalletID] = useState('')
  const [email, setEmail] = useState('')
  const navigation = useNavigation()
  const db = getDatabase()

  const handleWalletID = () => {
    
    if(walletID!= ''){
      var today = Math.round((new Date()).getTime() / 1000);
      setEmail(auth.currentUser?.email)
      update(ref(db, 'users/' + 'b'), {
      user_id: 'b',
      num_steps : 5,
      update_time: today,
      wallet_id: walletID,
    }).then(()=>{
      alert("wallet ID updated Successfully");
    }).catch((error) => {
      alert(error);
    });
    }
    

  }
  const handleSignOut = () =>{
    auth.signOut()
    .then(()=> {
      navigation.replace("Login")
    })
    .catch(error =>alert(error.message))
  }
  return (
    <View style = {styles.container}>
      <Text>Email : {auth.currentUser?.email}</Text>
      <View style={styles.inputContainer}>
        <TextInput
        placeholder="Wallet Address"
        value={walletID}
        onChangeText={text => setWalletID(text)}
        style={styles.input}
        />


      </View>
      <TouchableOpacity
      onPress = {handleWalletID}
      style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>

      </TouchableOpacity>
      <TouchableOpacity
      onPress = {handleSignOut}
      style={styles.button}>
        <Text style={styles.buttonText}>Sign Out</Text>

      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container :{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button :{
    backgroundColor: "#0782F9",
    width : '60%',
    padding :15,
    borderRadius:10,
    // alignItems:'center',
    
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 17,
    textAlign:'center',
  },
  inputContainer:{
    width:'80%',
    marginTop: 40,
  },
  input:{
    backgroundColor:'white',
    paddingHorizontal: 15,
    paddingVertical:10,
    borderRadius:10,
    marginTop:5,
  },
})

