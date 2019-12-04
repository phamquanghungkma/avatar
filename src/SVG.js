import React, {Component} from 'react';
import {
  Container,
  Header,
  Body,
  Text,
  Left,
  Right,
  Drawer,
  View,
  Title,
} from 'native-base';
import {StyleSheet} from 'react-native';
import BasicFlatList from '../Contact/BasicFlatList';
import HorizontalFlatList from '../Contact/HorizontalFlatList'
import flatlistData from '../../../data/flatlistData'
export default class ListFriend extends Component {
  state = { 
    listFriend: flatlistData,
    listChat:flatlistData
  };
  static navigationOptions = ({navigation}) => ({
    // title: 'Message of ${navigation.state.params.username}'
  });
  renderListFriend(state) {
    if (state == '') {
      return <Text>This is list feiend</Text>
    } 
    if(state != "") {
      return <HorizontalFlatList ></HorizontalFlatList>
    }
  }

  render() {
    // const {params} = this.props.navigation.state;
    console.log('value :', this.state.listFriend);
    return (
      <Container>
        <View style={styles.container}>
          <Header style={styles.styleHeader}>
            <View
              style={{
                alignItems: 'flex-start',
                justifyContent: 'center',
                flex: 0.15,
              }}>
               {/* <Icon name="menu" type="AntDesign" style={styles.iconLogin}>

               </Icon> */}
              {/* <Icon name="rocket" color="#eee" size={30} /> */}
            </View>

            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flex: 0.7,
              }}>
              <Text>Messages</Text>
            </View>

            <View
              style={{
                alignItems: 'flex-end',
                justifyContent: 'center',
                flex: 0.15,
              }}>
              {/* <Icon name="plus" type="AntDesign" style={styles.iconLogin} /> */}
            </View>
          </Header>

          <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={styles.viewbody1}>
              <View style={{backgroundColor: 'orangered', flex: 2}}>
                <Text style={{margin:5}}>Friends</Text>
              </View>
              <View style={{backgroundColor: 'white', flex: 8}}>
                {this.renderListFriend(this.state.listFriend)}
                {/* <Text style={{margin: 10}}>You don't have friend</Text> */}
              </View>
            </View>

            <View style={styles.viewbody2}>
              <View style={{backgroundColor: 'orangered', flex: 0.5}}>
                <Text style={{margin: 3}}>Messages</Text>
              </View>
              <View style={{backgroundColor: 'white', flex: 9.5}}>
                 <BasicFlatList></BasicFlatList>
              </View>
           
            </View>
          </View>
        </View>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  styleHeader: {
    backgroundColor: 'lightgreen',
    flexDirection: 'row',
  },
  textHeader: {
    color: 'white',
    fontSize: 18,
    justifyContent: 'center',
  },
  viewbody1: {
    backgroundColor: 'blue',
    flex: 1.75,
    flexDirection: 'column',
  },
  viewbody2: {
    backgroundColor: 'green',
    flex: 8.25,
    flexDirection:'column'
  },
});
