import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import pick from '../../api/pick';

type Props = {
  children: any,
  onPress: any,
};

export default class Avatar extends React.PureComponent<Props> {
  constructor(props) {
    super(props);
    this.state = {
      avatarSource: null,
    };
  }

  show() {
    pick(source => this.setState({avatarSource: source}));
  }

  render() {
    const {onPress = () => {}, children} = this.props;
    let img =
      this.state.avatarSource == null ? (
        <Image
          source={require('../images/addt.png')}
          style={{height: 100, width: 100}}
        />
      ) : (
        <Image
          source={this.state.avatarSource}
          style={{height: 80, width: 80, borderRadius: 40}}
        />
      );
    return (
      <View
        style={{
          width: 120,
          height: 120,
          borderRadius: 60,
          borderWidth: 2,
          borderColor: '#b71c1c',
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={this.show.bind(this)}
          style={{
            position: 'absolute',
            backgroundColor: 'red',
            width: 35,
            height: 35,
            borderRadius: 18,
            right: 0,
            bottom: 0,
            borderColor: 'blue',
            borderWidth: 3,
          }}>
          </TouchableOpacity>
        {children}
      </View>
    );
  }
}
