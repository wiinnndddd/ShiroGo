// import { TouchableOpacity, StyleSheet, Text, View, TextInput } from 'react-native'
// import React, {useState, useEffect} from 'react'


// import {  useNavigation } from '@react-navigation/native'
// import { Pedometer } from 'expo-sensors'
// import StartFireBase from '../firebase'
// import {set, ref} from "firebase/database"


// const SettingsScreen = () => {
//   const [walletID, setWalletID] = useState('')
//   const [email, setEmail] = useState('')
//   const [stepCount, setStepCount] = useState(0)
//   const navigation = useNavigation()
//   const db = getDatabase()


//   const [PedometerAvailability, setPedometerAvailability] = useState("");

  

//   const subscribe = () => {
//     const subscription = Pedometer.watchStepCount((result)=>{
//       this.setStepCount(result)
//     })


//     Pedometer.isAvailableAsync().then(
//       (result) => {
//         setPedometerAvailability(String(result))
//       } ,
//       (error) => {
//         setPedometerAvailability(error)
//       }
//     )
//   }



//   const handleWalletID = () => {
    
//     if(walletID!= ''){
//       var today = Math.round((new Date()).getTime() / 1000);
//       setEmail(auth.currentUser?.email)
//       update(ref(db, 'users/' + 'b'), {
//       user_id: 'b',
//       num_steps : 5,
//       update_time: today,
//       wallet_id: walletID,
//     }).then(()=>{
//       alert("wallet ID updated Successfully");
//     }).catch((error) => {
//       alert(error);
//     });
//     }
    

//   }
//   const handleSignOut = () =>{
//     auth.signOut()
//     .then(()=> {
//       navigation.replace("Login")
//     })
//     .catch(error =>alert(error.message))
//   }
//   return (
//     <View style = {styles.container}>
//       <View
//         style={styles.stepContainer}>
//           <Text>Is pedometer : {PedometerAvailability}</Text>

//       </View>
//       <View
//         style={styles.stepContainer}>
//           <Text>Step Count : {stepCount}</Text>

//       </View>
//       <Text>Email : {auth.currentUser?.email}</Text>
//       <View style={styles.inputContainer}>
//         <TextInput
//         placeholder="Wallet Address"
//         value={walletID}
//         onChangeText={text => setWalletID(text)}
//         style={styles.input}
//         />


//       </View>
//       <TouchableOpacity
//       onPress = {handleWalletID}
//       style={styles.button}>
//         <Text style={styles.buttonText}>Submit</Text>

//       </TouchableOpacity>
//       <TouchableOpacity
//       onPress = {handleSignOut}
//       style={styles.button}>
//         <Text style={styles.buttonText}>Sign Out</Text>

//       </TouchableOpacity>
//     </View>
//   )
// }

// export default SettingsScreen

// const styles = StyleSheet.create({
//   container :{
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   button :{
//     backgroundColor: "#0782F9",
//     width : '60%',
//     padding :15,
//     borderRadius:10,
//     // alignItems:'center',
    
//     marginTop: 40,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: '700',
//     fontSize: 17,
//     textAlign:'center',
//   },
//   inputContainer:{
//     width:'80%',
//     marginTop: 150,

//   },
//   input:{
//     backgroundColor:'white',
//     paddingHorizontal: 15,
//     paddingVertical:10,
//     borderRadius:10,
//     marginTop:5,
//   },

//   buttonContainer:{
//     width:'60%',
//     justifyContent:'center',
//     // alignItems: 'center',
//     marginTop:50,    
//   },
//   button:{
//     backgroundColor: '#0782F9',
//     width: '100%',
//     padding: 15,
//     borderRadius: 10,
//     // alignItem: 'center',
    
//   },
//   buttonText:{
//     color: 'white',
//     fontWeight: '700',
//     fontSize: 16,
//     textAlign: 'center'
//   },
//   buttonOutline:{
//     backgroundColor: 'white',
//     marginTop: 5,
//     borderColor: '#0782F9',
//     borderWidth: 2,
    
//   },
//   buttonOutlineText:{
//     color: '#0782F9',
//     fontWeight: '700',
//     fontSize: 16,
//     textAlign: 'center'
//   },
// })

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SettingsScreen = () => {
  return (
    <View>
      <Text>SettingsScreen</Text>
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({})