import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground } from 'react-native'
import RadioForm,  { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button'

const keywords =[
    { label:"go armour", value:0},
    { label:"armour go", value:1},
    { label:"help", value:2},
    { label:"stanger go", value:3},
    { label:"hey shield", value:3},
]

export default class KeyTab extends Component{
    render(){
        return(
            <ImageBackground source={require('../Regist1.jpeg')} style={styles.image}>
                <View style={styles.container}>
                    <Text style={styles.text}>Please choose the Keyword</Text>
                    <RadioForm
                        radio_props={keywords}
                        initial={0} 
                        onPress={()=>this.value}
                        //buttonSize={40} 
                        buttonOuterSize={50}
                        buttonColor={'#9e868f'}
                        
                        selectedButtonColor={'#ab8995'}
                        selectedLabelColor={'#000000'}
                        labelStyle={{fontSize:15, color: '#ab8995'}}  
                    /> 
                </View>
            </ImageBackground>
        );
    }

};
const styles = StyleSheet.create({
    container: {
        flex: 1,
       // backgroundColor: '#fcedfc',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    text: {
        color: '#000000',
        fontSize: 30,
        fontWeight: '900',
        fontStyle: 'italic',
        marginBottom: '25%'
    },
    image: {
        alignSelf: 'center',
    resizeMode: 'cover',
    width: '100%',
    height: '100%'
    }
})