import React,{Component} from 'react';
import {View, Text, Dimensions} from 'react-native';

export default class Background extends Component {
  state = {  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          position: 'absolute',
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}>
        <View style={{flex: 1, backgroundColor: 'red', width: '100%'}} />
        <View style={{flex: 3, backgroundColor: 'white', width: '100%'}} />
      </View>
      
    );
  }
}