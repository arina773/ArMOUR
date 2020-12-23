import React from 'react';
import { Button, StyleSheet, View, Text, ImageBackground,  } from 'react-native';
import PlayScreen from './tabs/PlayScreen'

export default class Info extends React.Component {
 
  render () {
    return(
      <ImageBackground source={require('./Regist1.jpeg')}  style={styles.image}>
        <View style={styles.container}>
          <Button title='1' onPress = {() => this.props.navigation.navigate('PlayScreen')}></Button>
          <Button title='2'></Button>
          <Button title='3'></Button>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 5,
  },
  textb: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'flex-start',
    marginTop: 15,
  
  },
  textc: {
    color: '#2e2e2e',
    fontStyle: 'italic',
    fontSize: 18,
    alignSelf: 'flex-start',
    
  },
  text: {
    color: '#2e2e2e',
    fontStyle: 'italic',
    fontSize: 18,
    alignSelf: 'center',
   
  },
  image: {
    alignSelf: 'center',
    resizeMode: 'cover',
    width: '100%',
    height: '100%'
  },
})