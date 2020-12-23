import React from 'react';
import { Button, StyleSheet, View, Text, ImageBackground,  } from 'react-native';

export default class Info extends React.Component {
 
  render () {
    return(
      <ImageBackground source={require('../Regist1.jpeg')}  style={styles.image}>
        <View style={styles.container}>
        <Text style={styles.textb}>OUR TEAM</Text>
        <Text style={styles.text}>  ArMOUR is group of creative individuals, who are working on making you more safe and secure in your cities.</Text>
        <Text style={styles.textb}>WHAT WE BRING TO THE TABLE?</Text>
        <Text style={styles.textc}>-Webpage where you can learn more about our team</Text>
        <Text style={styles.textc}>-Educational videos on how to protect yourself, if needed.</Text>
        <Text style={styles.textc}>-App which reports your location automatically</Text>
        <Text style={styles.textb}>CONNECT WITH US</Text>
        <Text style={styles.textc}>Instagram - </Text>
        <Text style={styles.textc}>https://www.instagram.com/arm.ourr</Text>
        <Text style={styles.textc}>Webpage -</Text>
        <Text style={styles.textc}>optimistic-kowalevski-3685f9.netlify.app</Text>
        <Text style={styles.textc}>Email - </Text>
        <Text style={styles.textc}>armour.american.councils@gmail.com</Text>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 5,
  },
  textb: {
    color: '#000000',
    fontSize: 20,
    alignSelf: 'flex-start',
    marginTop: 15
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