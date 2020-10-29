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
            <View style={styles.container}> 
                <Image source={require('./LS.jpeg')}  style={styles.image}/>
                <Text style={styles.text}>Be safe with us!</Text> 
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.replace('Registration')}>
                        <Text style={styles.btntext}>Sign up</Text>
                    </TouchableOpacity>                   
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.replace('Log_in')}>
                        <Text style={styles.btntext}>Login</Text>
                    </TouchableOpacity>  
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,  
        width: null,
        height: null,
        backgroundColor: '#f9e3e5',
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
        alignSelf: 'center'
    },
    button: {
        padding: 15,
        backgroundColor: '#59cbbd',  
        marginHorizontal: '5%',
        borderRadius: 10,
        width: '40%',
        height: '28%', 
        alignItems: 'center',
        justifyContent: 'center'
    },
    btntext: {
        fontWeight: 'bold',
        color: '#fff'
    },
    image: {
        alignSelf: 'center',
        resizeMode: 'center'
    }
});
