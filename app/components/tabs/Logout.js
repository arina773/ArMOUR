import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text,  } from 'react-native';
import * as firebase from 'firebase';

export default class HomeScreen extends React.Component {
  state = {
    user:{
    email: '',
    displayName: '',
  }}

  componentDidMount() {
    const {email, displayName} = firebase.auth().currentUser

    this.setState({email, displayName})
  }
  
  signOutUser = () => {
    firebase.auth().signOut();
  }

  render () {
    return(
      <View style={styles.container}>
        <Text style={{fontSize: 30, color: '#594a50', fontStyle: 'italic',}}>Come back soon {this.state.user.displayName}</Text>

        <TouchableOpacity style={{marginTop: 32}} onPress={this.signOutUser}>
          <Text style={styles.text}>Log out</Text>
        </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fcedfc',
    
  },
  text: {
    color: '#856f77',
    fontStyle: 'italic',
    fontSize: 18
  }
})