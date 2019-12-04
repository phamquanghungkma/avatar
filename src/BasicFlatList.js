import React, {Component} from 'react';
import {
  AppRegistry,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import flatlistData from '../data/flatlistData';

class FlatListItem extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          //'white'
          backgroundColor:
            this.props.index % 2 == 0 ? 'mediumseagreen' : 'tomato',
        }}>
        <Image
          source={{uri: this.props.item.avatar}}
          style={{
            width: 60,
            height: 60,
            margin: 5,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
          }}></Image>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
          }}>
          <Text style={styles.flatItemName}>{this.props.item.name}</Text>
          <Text style={styles.flatListItem}>{this.props.item.content}</Text>
        </View>
      </View>
    );
  }
}

export default class BasicFlatList extends Component {
  state = {};
  render() {
    return (
      <View style={{flex: 1, marginTop: 35}}>
        <FlatList
          data={flatlistData}
          renderItem={({item}) => {
            //console.log(`${JSON.stringify(item)}`);
            return;
            <FlatListItem item={item}></FlatListItem>;
          }}></FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flatListItem: {
    color: 'darkgray',
    padding: 5,
    fontSize: 17,
  },
  flatItemName: {
    color: 'black',
    padding: 5,
    fontSize: 16,
  },
});
