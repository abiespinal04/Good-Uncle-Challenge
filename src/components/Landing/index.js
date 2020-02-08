import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';

import LoginButton from '../LoginButton';
import SignUp from '../SignUp';

const {width} = Dimensions.get('screen');

class Landing extends Component {
  state = {};
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <LoginButton navigation={navigation} />
          <SignUp navigation={navigation} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 350,
    width: width * 0.9,
    backgroundColor: '#f0f0f0',
    flexDirection: 'column',
    borderRadius: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default Landing;
