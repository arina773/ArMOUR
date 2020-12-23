import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  View, ImageBackground
} from 'react-native';
import {Icon} from 'react-native-elements';
import TagInput from 'react-native-tags-input';
const mainColor = '#fcedfc';
export default class ContactsTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: {
        tag: '',
        tagsArray: []
      },
      tagsColor: mainColor,
      tagsText: '#000000',
    };
  }
  updateTagState = (state) => {
      this.setState({
        tags: state
      })
    };
  render() {
    return (
      <ImageBackground source={require('../Regist1.jpeg')} style={styles.image}>
        <View style={styles.container}>
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
        </View>
      </ImageBackground>
    );
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
  image: {
    alignSelf: 'center',
    resizeMode: 'cover',
    width: '100%',
    height: '100%'
  },
});