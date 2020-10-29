import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text,  } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class PauseScreen extends React.Component {

  render () {
    return(
      <View>
        <Text style={{alignSelf: 'center', }}>Press button to stop recording!</Text>
      </View>
    )
  }
}