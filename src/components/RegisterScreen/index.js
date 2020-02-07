import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import Landing from '../Landing';

import {userRegister} from '../../redux/actions/userAuthAction';
import {connect} from 'react-redux';

class RegisterScreen extends Component {
  state = {
      password: '',
      phoneNumber: '',
  };

  handleSubmit = () => {
    const {userRegister, navigation} = this.props;
    const {password, phoneNumber} = this.state;
    const userData = {
      password,
      phoneNumber,
    };
    if( password.trim() !== '' && phoneNumber.trim() !== ''){
      userRegister(userData);
      navigation.navigate('Login')
    }
    else{
      this.setState({error:true})
    }
  };

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   //  const { password, phoneNumber} = this.state;
  //   if (nextProps.userInfo.password !== prevState.password) {
  //       console.log('[hs]', nextProps.userInfo.password)
  //     return {
  //       password: nextProps.userInfo.password,
  //       phoneNumber: nextProps.userInfo.phoneNumber,
  //     };
  //   }

  //   return null;
  // }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            height: 200,
            backgroundColor: 'black',
            marginHorizontal: 10,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: '#f0f0f0',
              fontSize: 20,
              letterSpacing: 2,
              marginTop: 10,
            }}>
            Good uncle registration
          </Text>
          <TextInput
            placeholderTextColor="#f0f0f0"
            placeholder="Phone number"
            keyboardType='numeric'
            maxLength={10}
            style={styles.textInputStyle}
            onChangeText={values => this.setState({phoneNumber:values})}
          />
          <TextInput
            placeholderTextColor="#f0f0f0"
            placeholder="password"
            style={styles.textInputStyle}
            onChangeText={values => this.setState({password:values})}
          />
          <TouchableOpacity
            onPress={this.handleSubmit}
            style={styles.submitButton}>
            <Text style={{textAlign: 'center'}}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    marginTop:10
  },
  textInputStyle: {
    width: 200,
    height: 40,
    borderColor: 'white',
    borderRadius: 20,
    borderWidth: 0.5,
    marginVertical: 10,
    textAlign: 'center',
    color: '#f0f0f0',
  },
  submitButton: {
    backgroundColor: '#f0f0f0',
    width: 100,
    height: 50,
    marginBottom:10,
    borderRadius: 20,
    justifyContent: 'center',
  },
});

const mapSteToProps = state => ({
  userInfo: state.userInfo,
});

export default connect(mapSteToProps, {userRegister})(RegisterScreen);
