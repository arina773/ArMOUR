import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import * as firebase from 'firebase';

export default class SideMenu extends Component {
  state = {
    email: '',
    displayName: '',
  }

  componentDidMount() {
    const {email, displayName} = firebase.auth().currentUser

    this.setState({email, displayName})
  }
  
  constructor() {
    super();
    

    //Setting up the Main Top Large Image of the Custom Sidebar
   
    //Array of the sidebar navigation option with icon and screen to navigate
    //This screens can be any screen defined in Drawer Navigator in App.js
    //You can find the Icons from here https://material.io/tools/icons/
    this.items = [
      {
        navOptionThumb: 'play-circle-filled',
        navOptionName: 'Start',
        screenToNavigate: 'NavScreen1',
      },
      {
        navOptionThumb: 'contacts',
        navOptionName: 'Conntacts',
        screenToNavigate: 'NavScreen2',
      },
      {
        navOptionThumb: 'info',
        navOptionName: 'About Us',
        screenToNavigate: 'NavScreen3',
      },
      {
        navOptionThumb: 'directions-run',
        navOptionName: 'Log out',
        screenToNavigate: 'NavScreen4',
      },
    ];
  }
  render() {
    return (
      <View style={styles.sideMenuContainer}>
        <Text style={{fontSize: 20}}>{this.state.displayName}</Text>
        {/*Divider between Top Image and Sidebar Option*/}
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: '#e2e2e2',
            marginTop: 15,
          }}
        />
        {/*Setting up Navigation Options from option array using loop*/}
        <View style={{ width: '100%' }}>
          {this.items.map((item, key) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: global.currentScreenIndex === key ? '#e0dbdb' : '#ffffff',
              }}
              key={key}>
              <View style={{ marginRight: 10, marginLeft: 20 }}>
                <Icon name={item.navOptionThumb} size={25} color="#808080" />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  color: global.currentScreenIndex === key ? 'red' : 'black',
                }}
                onPress={() => {
                  global.currentScreenIndex = key;
                  this.props.navigation.navigate(item.screenToNavigate);
                }}>
                {item.navOptionName}
              </Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
  },
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 150,
    height: 150,
    marginTop: 20,
    borderRadius: 150 / 2,
  },
});