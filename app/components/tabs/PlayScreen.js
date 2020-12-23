import React from "react";
import {Button, Alert, Dimensions, ImageBackground,
  StyleSheet, Text,
  View,
} from "react-native";
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import {Icon} from 'react-native-elements';
import * as firebase from 'firebase';

 
import TagInput from 'react-native-tags-input';
const mainColor = '#fcedfc';

export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        tags: {
          tag: '',
          tagsArray: [],
        },
        email: '',
        displayName: '',
        location: null, 
        lat:null,
        long: null,
        
        name: {
          email: '',
          displayName: '',
        },
        tagsColor: mainColor,
        tagsText: '#000000',
      };
    }

    /*state = {
      location: null, 
      lat:null,
      long: null,
    };  */
    updateTagState = (state) => {
      this.setState({
        tags: state
      })
    };
 
    componentDidMount = () => {
      this.getLocationAsync();
      const {email, displayName} = firebase.auth().currentUser
      this.setState({email, displayName})
    };
    

    getLocationAsync = async () => {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== 'granted') {
        this.setState({
          errorMessage: 'Permission to access location was denied',
        });
      }
  
      let location = await Location.getCurrentPositionAsync({accuracy:Location.Accuracy.Highest});
      const { latitude , longitude } = location.coords
      this.setState({ location, latitude, longitude});
  
    };

    sendEmail = () => {
      {console.log(this.state.tags)};
      {console.log(this.state.tags.tagsArray )};
      fetch('https://armour-server.herokuapp.com/email', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.state.displayName,
          email:  this.state.tags.tagsArray.join(),
          location: this.state.location,
          lat: this.state.lat,
          long: this.state.longitude, 
          tags: this.state.tags,
       
        })
      })
    }

  render() {
    return(
      <ImageBackground source={require('../Regist1.jpeg')} style={styles.image}>
       
        <TagInput
          updateState={this.updateTagState}
          tags={this.state.tags}
          placeholder="Email you want to send your location"                            
          label='Your contacts'
          labelStyle={{color: '#91747f', marginLeft: 20, fontSize: 20}}
          leftElement={<Icon name={'contacts'} type={'material-community'} color={'#ab8995'}/>}
          leftElementContainerStyle={{marginLeft: 10}}
          containerStyle={{width: (Dimensions.get('window').width)}}
          inputContainerStyle={[styles.textInput, {backgroundColor: this.state.tagsColor}]}
          inputStyle={{color: this.state.tagsText}}
          onFocus={() => this.setState({tagsColor: '#fff', tagsText: '#ab8995'})}
          onBlur={() => this.setState({tagsColor: mainColor, tagsText: '#fff'})}
          autoCorrect={false}
          tagStyle={styles.tag}
          tagTextStyle={styles.tagText}
          keysForTag={' '}/>
      
        <Button
          title="Press me"
          onPress={this.sendEmail}
        />
        <Text></Text>
        
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
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderWidth: 1,
    marginTop: 5,
    borderRadius: 5,
    padding: 3,
  },
  tag: {
      backgroundColor: '#ab8995',

    },
  tagText: {
      color: mainColor
    },
  text: {
    color: '#856f77',
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