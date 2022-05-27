import { StyleSheet, Text, View, Dimensions,Image, TouchableOpacity } from 'react-native'
import React, {useState, useEffect,Component} from 'react'
import { useNavigation } from '@react-navigation/native';
import * as GoogleSignIn from 'expo-google-sign-in';
import Expo from 'expo';


const { width, height } = Dimensions.get('window');

class WelcomeScreen extends Component {
  
  // navigation = useNavigation()

  // const [loggedIn, setloggedIn] = useState(false);
  // const [userInfo, setuserInfo] = useState('');



  state = { user: null };

  componentDidMount() {
    this.initAsync();
  }

  initAsync = async () => {
    await GoogleSignIn.initAsync({
      // You may ommit the clientId when the firebase `googleServicesFile` is configured
      clientId: '<YOUR_IOS_CLIENT_ID>',
    });
    this._syncUserWithStateAsync();
  };

  _syncUserWithStateAsync = async () => {
    const user = await GoogleSignIn.signInSilentlyAsync();
    this.setState({ user });
  };

  signOutAsync = async () => {
    await GoogleSignIn.signOutAsync();
    this.setState({ user: null });
  };

  signInAsync = async () => {
    try {
      await GoogleSignIn.askForPlayServicesAsync();
      const { type, user } = await GoogleSignIn.signInAsync();
      if (type === 'success') {
        this._syncUserWithStateAsync();
      }
    } catch ({ message }) {
      alert('login: Error:' + message);
    }
  };

  onPress = () => {
    if (this.state.user) {
      this.signOutAsync();
    } else {
      this.signInAsync();
    }
  };
  

  render(){
    return (
      <View
          style={{
            flex: 1,
            
            justifyContent: 'flex-end',
            alignItems:'center'
          }}
        >
          <View style={{backgroundColor: 'white', ...StyleSheet.absoluteFill }}>
            <Image
              source={require('../assets/bg.png')}
              style={{ flex: 1, height: null, width: null }}
            />
          </View>
          <View style={{ height: height / 4, justifyContent: 'center',width:'60%', }}>
            <TouchableOpacity
              onPress={this.onPress}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.onPress}
              style={[styles.button, styles.buttonOutline]}
              >
                <Text style={styles.buttonOutlineText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
}

export default WelcomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width:"80%"
  },
  button: {
    
    // height: 55,
    marginHorizontal: 6,
    borderRadius: 10,
    justifyContent: 'center',
    marginVertical: 5,
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
  },
  buttonText:{
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center'
  },
  buttonOutline:{
    alignItems:"center",
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
    
  },
});