import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('screen');

class SignUp extends Component {
  state = {};
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Register')}
          style={styles.signupButton}>
          <Text style={styles.signupText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  signupButton: {
    width: 80,
    height: 60,
    backgroundColor: 'black',
    justifyContent: 'center',
    borderRadius: 20,
  },
  signupText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default SignUp;
