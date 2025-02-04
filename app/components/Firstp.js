import React, { Component } from 'react'; 

import { StyleSheet, Platform, Image, ImageBackground, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import Login_signup from './Login_signup';
export default class Firstp extends Component
{
  constructor(){
    super();  
    this.state={  
    isVisible : true,  
    }
  }
   Hide_Splash_Screen=()=>{
    this.setState({
      isVisible : false
    });
  }
  
  static navigationOptions = {
    headerShown: false,
    headerLeft: null,
    gesturesEnabled: false,
  };

  componentDidMount(){  
    var that = this;  
    setTimeout(function(){  
      that.props.navigation.replace('Login_signup');  
    }, 3000);  
   }  
 
  render()
  {  

    let Splash_Screen = (  
      <View style={styles.SplashScreen_RootView}>
        <View style={styles.SplashScreen_ChildView}>  
          <Image source={require('./regist.jpeg')}  style={styles.image}>
          </Image>
        </View>
      </View> 
    )  
    return(  
      <View style = { styles.MainContainer } > 
        <ImageBackground source={require('./regist.jpeg')} style={styles.images}>  
        </ImageBackground>
        {(this.state.isVisible === true) ? Splash_Screen : null}
      </View>  
    );  
  }
}
const styles = StyleSheet.create(  
{  
  MainContainer:  
  {  
    flex: 1,  
    justifyContent: 'center',  
    alignItems: 'center',  
    //paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0  
  },
  SplashScreen_RootView:  
  {  
    justifyContent: 'center',  
    flex:1,  
    margin: 10,  
    position: 'absolute',  
    width: '100%',  
    height: '100%',  
  },
  SplashScreen_ChildView:  
  {  
      justifyContent: 'center',  
      alignItems: 'center',  
      backgroundColor: '#fff',  
      flex:1,  
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    width: '100%',
    height: '100%',
    justifyContent: "center",
  },
  regform: {
    alignSelf: 'stretch',
  },
  texts: {
    fontSize: 14,
    color: '#000000',
  },
  header: {
    fontSize: 36,
    color: '#000000',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#59cbbd',
    borderBottomWidth: 1,
  },
  TextInput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: '#fff',
    borderBottomColor: '#59cbbd',
    borderBottomWidth: 1,
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#59cbbd',
    marginTop: 30,
  },
  btntext: {
    color: '#fff',
    fontWeight: 'bold',
  },
  images: {
    width: '100%',
    resizeMode: "cover",
    justifyContent: "center"
  }
});