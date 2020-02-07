import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('screen');

class UserInfo extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <TextInput  style={styles.textInputStyle} placeholderTextColor="black" placeholder="email" />
        <TextInput  style={styles.textInputStyle} placeholderTextColor="black" placeholder="password"  secureTextEntry={true}/>
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: width * 0.8,
    height: 200,
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    marginVertical:10,
    borderRadius:20
  },
  textInputStyle: {
      width: width * 0.75,
      height:40,
    borderColor:'black',
    borderRadius:20,
    borderWidth:0.5,
    marginVertical:10,
    textAlign:'center'
  },
});

export default UserInfo;
