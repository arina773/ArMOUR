import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Image, ImageBackground, Dimensions } from 'react-native';
import * as firebase from 'firebase';
import UserPermissions from './untitled/UserPermissions';
import * as ImagePicker from 'expo-image-picker';
import {Ionicons} from '@expo/vector-icons';
//import Fire from './Fire';
export default class Registration extends React.Component {
  static navigationOptions = {
    headerShown: false,
    headerLeft: null,
    gesturesEnabled: false,
  };
  state = { 
    name: '',
    email: '',
    password: '',
   /*avatar: null,*/
    errorMessage: null,
  };
  /*handlePickAvatar = async () => {
    UserPermissions.getCameraPermission();

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3]
    });
 
    if (!result.cancelled) {
      this.setState ({ avatar: result.uri });
    }
  };
  <View style={{position: "absolute", alignItems: "center", width: '100%', flexDirection: "column", marginBottom: 20}}>
            <Text style={styles.greeting}>{`Hello \nSign up to get started`}</Text>
            <TouchableOpacity style={styles.avatarPlaceholder} onPress={this.handlePickAvatar}>
              <Image source={{uri: this.state.avatar}} style={styles.avatar}/>
              <Ionicons
                name='ios-add'
                size={40}
                color='#fff'
                style={{marginTop: 6, marginLeft: 2}}
              ></Ionicons>
            </TouchableOpacity>
          </View> */

  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(userCredentials => {
        return userCredentials.user.updateProfile({
          displayName: this.state.name
        });
      })
      .catch(error => this.setState({ errorMessage: error.message }));
     /* Fire.shared.createUser(this.state.user)*/
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground source={require('./Regist1.jpeg')}  style={styles.image}>
        <View style={styles.container}> 

          
          <Text style={styles.greeting}>Create an account</Text>
          <View style={styles.errorMessage}>
            {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
          </View>

          <View style={styles.form}>

            <View>
              <TextInput 
              style={styles.TextInput} 
              placeholder='Full Name'
              onChangeText={name => this.setState({name})}
              value={this.state.name}
              underlineColorAndroid={'transparent'} />
            </View>

            <View>
              <TextInput 
              style={styles.TextInput} 
              placeholder='Email or Username'
              onChangeText={email => this.setState({  email  } )}
              value={this.state.email}
              underlineColorAndroid={'transparent'} />
            </View>

            <View>
              <TextInput 
              style={styles.TextInput} 
              placeholder='Password'
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
              secureTextEntry={true} underlineColorAndroid={'transparent'} />
            </View>
          </View>

          <TouchableOpacity 
            style={styles.button}
            onPress={this.handleSignUp/*() => this.props.navigation.replace('Home')*/}>
            <Text style={styles.btntext}>Sign in</Text>
          </TouchableOpacity>  

          <TouchableOpacity onPress={() => this.props.navigation.replace('Log_in')}>
            <Text style={styles.texts}>
              Already have an account? <Text style={styles.btntext2}>Login</Text>
            </Text>
          </TouchableOpacity>

        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly'
   
  },
  regform: {
    alignSelf: 'center',
  },
  header: {
    fontSize: 36,
    color: '#000000',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
  },
  texts: {
    fontSize: 14,
    color: '#000000',
    alignSelf: 'center'
  },
  TextInput: {
    height: 40,
    marginBottom: 30,
    color: '#000000',
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
  },
  button: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#d971a8',
    borderRadius: 4,
    justifyContent: 'center',
    height: '5%',
    width: '30%',
    marginBottom: '5%'
  },
  btntext: {
    color: '#000000',
    fontWeight: '500',
  },
  btntext2: {
    color: '#000000',
    fontStyle: 'italic',
  },
  form: {
    marginBottom: 48,
    marginHorizontal: 30,
  },
  greeting: {
    marginTop: 28,
    fontSize: 30,
    fontWeight: '400',
    alignSelf: 'center',
    color: '#000000'
  }, 
  errorMessage: {
 
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
    color: '#b30000',
  },
  error: {
    color: '#E9446A',
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'center',
  },
  image: {
    alignSelf: 'center',
    resizeMode: 'cover',
    width: '100%',
    height: '100%'
  }
});