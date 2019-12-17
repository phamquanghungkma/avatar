import React from 'react';
import {View, Text, TextInput, Image,TextView,StyleSheet,TouchableOpacity} from 'react-native';
import Background from './Background';
import {Item,Input} from 'native-base'
import Avatar from './Avatar';

export default class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'Huynhha12798',
      emailName:'Huynhha1279@gmail.com',
      email:''
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Background />
        <View
          style={{
            justifyContent: 'space-around',
            alignItems: 'center',
            flex: 1,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              // paddingHorizontal: 10,
              width: '80%',
              height: '70%',
              borderRadius: 30,
              borderColor: 'white',
              borderWidth: 0.5,
              alignItems:'center',
              // justifyContent:'center',
              flexDirection:'column'
            }}>
            <Text style={styles.nameText} >
                {this.state.name}
            </Text>
                        
            <View style={{ flexDirection:'row',paddingTop:20}}>
                <Text 
                  style = {styles.textInputContainer}
                  keyboardType = 'email-address'>
                 {this.state.name}
               </Text>
                <Text 
                  style = {styles.textInputContainer}
                  keyboardType = 'email-address'>
               {this.state.email}
              </Text>
            </View>

            <View>
                  <TextInput
                     value={this.state.email}
                    placeholder="Old Password"
                    placeholderTextColor="gray"
                    style={{ color: "gray",height:50,width:300,backgroundColor:'blue' }}
                    onChangeText={email => this.setState({ email })}
                  />
                </View>
                <Item style={{ paddingTop:20 }}>
                  <Input
                    value={this.state.email}
                    placeholder="New Password"
                    placeholderTextColor="gray"
                    style={{ color: "gray",height:50,width:300,backgroundColor:'blue' }}
                    onChangeText={email => this.setState({ email })}
                  />
                </Item>
                <Item style={{ paddingTop:20 }}>
                  <Input
                     value={this.state.email}
                    placeholder="Confirm Password"
                    placeholderTextColor="gray"
                    style={{ color: "gray",height:50,width:300,backgroundColor:'blue' }}
                    onChangeText={email => this.setState({ email })}
                  />
                </Item>
                <TouchableOpacity 
                    
                   style={{ marginTop: 20 }}>
                 <View style={styles.buttonChange}>
                <Text >
                  Changes Password
              </Text>
              </View>
            </TouchableOpacity>
            
            

            
            

          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            width: '100%',
            top: '8%',
          }}>
          <View style={{alignItems: 'center'}}>
            <Avatar></Avatar>
            <View></View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop:100
  },
  textInputContainer:{
    width:300,
    height:50,
    backgroundColor:'#fffff0',
    marginTop:20,
    paddingLeft:20,
    flex: 0.5,
    fontSize: 16,
  },
  textInputC:{
    width:300,
    height:50,
    backgroundColor:'#fffff0',
    paddingLeft:20,
    flex: 0.5,
    fontSize: 16,
  },
  buttonChange: {
    width: 300,
    height: 50,
    borderRadius: 6,
    backgroundColor: '#FF9933',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50
  },
});
