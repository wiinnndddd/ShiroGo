import { TouchableOpacity, StyleSheet, Text, View, TextInput, SafeAreaView, ScrollView } from 'react-native'
import  { Button, Card, Title, Paragraph} from 'react-native-paper'
import React, {useState} from 'react'

import StartFireBase from '../firebase'
import {set, ref} from "firebase/database"
import { firebase, Auth, database} from '../firebase'
import {  useNavigation } from '@react-navigation/native'
import runner from "../assets/about.png"


const HomeScreen = () => {
  const [walletID, setWalletID] = useState('')
  const [email, setEmail] = useState('')
  const navigation = useNavigation()
  const db = StartFireBase()

  const handleWalletID = () => {
    
    if(walletID!= ''){
      var today = Math.round((new Date()).getTime() / 1000);
      // setEmail(auth.currentUser?.email)
      set(ref(db, 'users/' + 'b'), {
      user_id: 'c',
      num_steps : 5,
      update_time: today,
      wallet_id: walletID,
      }).then(()=>{
        alert("wallet ID updated Successfully");
      }).catch((error) => {
        alert(error);
      });
      // database()
      // .ref('/users/123')
      // .set({
      //   user_id: 'c',
      //   num_steps : 5,
      //   update_time: today,
      //   wallet_id: walletID,
      // })
      // .then(() => console.log('Data set.'));
    }
    

  }
  // const handleSignOut = () =>{
  //   auth.signOut()
  //   .then(()=> {
  //     navigation.replace("Login")
  //   })
  //   .catch(error =>alert(error.message))
  // }
  return (
    <View style={styles.container}>
      <ScrollView
      showsVerticalScrollIndicator={false} 
      style={styles.scrollView}>
        {/* <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. */}
          <View style={styles.inputContainer}>
            <TextInput
            placeholder="Wallet Address"
            value={walletID}
            onChangeText={text => setWalletID(text)}
            style={styles.input}
            />


          
            <TouchableOpacity
              onPress = {handleWalletID}
              style={styles.button}>
                <Text style={styles.buttonText}>Submit</Text>

            </TouchableOpacity>

            <Card style= {styles.card}>
              <Card.Title title="Fitness Tracker" subtitle="No of steps today - 10000" />
              <Card.Content>
                <Title>Crypto Earned</Title>
                <Text>10 Sol</Text>
              </Card.Content>
              <Card.Cover source={runner} style={{backgroundColor:"blue"}}/>
              {/* <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
              </Card.Actions> */}
            </Card>
          </View>
          
      </ScrollView>
    </View>
    // <View style = {styles.container}>
    //   <Text>Email : {auth.currentUser?.email}</Text>
    //   <View style={styles.inputContainer}>
    //     <TextInput
    //     placeholder="Wallet Address"
    //     value={walletID}
    //     onChangeText={text => setWalletID(text)}
    //     style={styles.input}
    //     />


    //   </View>
      
    // </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container :{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#83EEFF',
  },
  button :{
    // backgroundColor: "#0782F9",
    backgroundColor: '#004EFF',
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
    width:'100%',
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input:{
    width: '100%',
    backgroundColor:'white',
    paddingHorizontal: 15,
    paddingVertical:10,
    borderRadius:10,
    marginTop:5,
  },
  scrollView: {
    backgroundColor: '#83EEFF',
    marginHorizontal: 20,
    width:"80%",
  },
  text: {
    fontSize: 42,
  },
  card :{
    marginVertical:100,
    width:"100%"
  }
})

