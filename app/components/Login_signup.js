import React from 'react';
import { StyleSheet, View, Button, Image, Text, ImageBackground, TouchableOpacity } from 'react-native';
export default class Login_signup extends React.Component {
    static navigationOptions = {
        headerShown: false,
        headerLeft: null,
        gesturesEnabled: false,
    };
    render() {
        const { navigate } = this.props.navigation;
        return (  
             
            <ImageBackground source={require('./lands.jpeg')}  style={styles.image}>
                <View style={styles.container}></View> 
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.replace('Registration')}>
                        <Text style={styles.btntext}>Sign up</Text>
                    </TouchableOpacity>                   
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.replace('Log_in')}>
                        <Text style={styles.btntext}>Login</Text>
                    </TouchableOpacity>  
                </View>
                
            </ImageBackground>
            
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,  
        width: null,
        height: null,
       // backgroundColor: '#f9e3e5',
        justifyContent: 'flex-end'
    },
    buttonContainer:{       
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '15%',
    },
    text: {
        fontSize: 40,
        fontStyle: 'italic',
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#fff'
    },
    button: {
        padding: 15,
        backgroundColor: '#fff',  
        marginHorizontal: '5%',
        borderRadius: 10,
        width: '40%',
        height: '28%', 
        alignItems: 'center',
        justifyContent: 'center'
    },
    btntext: {
        fontWeight: 'bold',
        color: '#000000'
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        width: '100%',
        height: '100%',
        justifyContent: "center",
      },
});
