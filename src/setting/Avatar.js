import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {pick} from '../../api/pick';

type Props = {
  children: any,
  onPress: any,
};

export default class Avatar extends React.PureComponent<Props> {
  state = {
    source: null,
  };
  onPress = () => {
    pick(source => {
      console.log('uri', source.uri);
      this.setState({source: source}, () => {
        console.log('state', this.state.source);
      });
    });
  };
  render() {
    const {onPress = () => {}, children} = this.props;
    return (
      <TouchableOpacity
        onPress={this.onPress}
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          borderWidth: 2,
          borderColor: '#b71c1c',
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            position: 'absolute',
            backgroundColor: 'red',
            width: 35,
            height: 35,
            borderRadius: 18,
            right: 0,
            bottom: 0,
            borderColor: 'white',
            borderWidth: 3,
          }}
        />
        <Image source={this.state.source} style={{width: 100, height: 100}} />
      </TouchableOpacity>
    );
  }
}
