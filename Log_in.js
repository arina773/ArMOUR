import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Image, ImageBackground, Dimensions } from 'react-native';
import * as firebase from 'firebase';
export default class Log_in extends React.Component {

  static navigationOptions = {
    headerShown: false,
    headerLeft: null,
    gesturesEnabled: false,
  };
  state ={
    email: '',
    password: '',
    errorMessage: null,
  };
  handleLogin = () => {
    const {email, password} = this.state

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => this.setState({errorMessage: error.message}));
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground source={require('./l.png')}  style={styles.image}>
        <View style={styles.container}> 
          <Text style={styles.greeting}>{`Welcome\n Back`}</Text>
          
          <View style={styles.errorMessage}>
            {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
          </View>

          <View style={styles.form}>
            <View>
              <TextInput 
              style={styles.TextInput} 
              placeholder='Email or Username'
              onChangeText={email => this.setState({email})}
              value={this.state.email}
              underlineColorAndroid={'transparent'} />
            </View>

            <View>
              <TextInput 
              style={styles.TextInput} 
              placeholder='Password'
              onChangeText={password => this.setState({password})}
              value={this.state.password}
              secureTextEntry={true} underlineColorAndroid={'transparent'} />
            </View>
          </View>

          <TouchableOpacity 
            style={styles.button}
            onPress={this.handleLogin/*() => this.props.navigation.replace('Home')*/}>
            <Text style={styles.btntext}>Login</Text>
          </TouchableOpacity>  

          <TouchableOpacity onPress={() => this.props.navigation.replace('Registration')}>
            <Text style={styles.texts}>
              Don`t have an account? <Text style={styles.btntext2}>Sign up</Text>
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
    color: '#fff',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#fff',
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
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
  },
  button: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#a83248',
    borderRadius: 4,
    justifyContent: 'center',
    height: '5%',
    width: '30%',
    marginBottom: '5%'
  },
  btntext: {
    color: '#fff',
    fontWeight: '500',
  },
  btntext2: {
    color: '#285226',
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
    color: '#fff'
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
    alignSelf: 'flex-start',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
}
});