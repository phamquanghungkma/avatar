import React, { Component } from 'react';
import { Text,View,TouchableOpacity,Image } from 'react-native';
import pick from '../api/pick'
// More info on all the options is below in the API Reference... just some common use cases shown here

export default class Picker extends Component {
  constructor(props){
    super(props);
    this.state ={
      avatarSource : null
    }
  }
  show(){
    pick(source =>this.setState({avatarSource: source})); 
  }
  render() {
    let img = this.state.avatarSource == null? <Image source={require('../src/images/iconAdds.png')} style={{ height:180,width:180,borderRadius:40}}/>: <Image source={this.state.avatarSource}
      style={{ height:80,width:80,borderRadius:40}}
    />
    return (
      <View style={{ flex:1,backgroundColor:'white',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
         <View sytle={{ backgroundColor:'red',flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
          
          <TouchableOpacity onPress={this.show.bind(this)} style={{ justifyContent:'center',alignItems:'center',height:200,width:200 }}>
                    {img}
          </TouchableOpacity>
          <Image source={require('../src/images/iconAdd.png')} style={{ height:180,width:180,borderRadius:40}}></Image>
        </View>
      </View>
    );
  }


}


/**
 * The first arg is the options object for customization (it can also be null or omitted for default options),
 * The second arg is the callback which sends object: response (more info in the API Reference)
 */
