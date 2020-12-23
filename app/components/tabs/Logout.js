import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text, ImageBackground,  } from 'react-native';
import * as firebase from 'firebase';

export default class HomeScreen extends React.Component {
  state = {
    
    email: '',
    displayName: '',
  }

  componentDidMount() {
    const {email, displayName} = firebase.auth().currentUser

    this.setState({email, displayName})
  }
  
  signOutUser = () => {
    firebase.auth().signOut();
  }

  render () {
    return(
      <ImageBackground source={require('../Regist1.jpeg')}  style={styles.image}>
        <View style={styles.container}>
          <Text style={{fontSize: 30, color: '#000000', fontStyle: 'italic',}}>Come back soon {this.state.displayName}</Text>

          <TouchableOpacity style={{marginTop: 32}} onPress={this.signOutUser}>
            <Text style={styles.text}>Log out</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    
  },
  text: {
    color: '#000000',
    fontStyle: 'italic',
    fontSize: 18
  },
  image: {
    alignSelf: 'center',
    resizeMode: 'cover',
    width: '100%',
    height: '100%'
  },
})