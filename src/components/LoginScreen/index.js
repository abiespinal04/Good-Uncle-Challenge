import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  ScrollView,
  Dimensions,
  Animated,
  StyleSheet
} from 'react-native';

import {connect} from 'react-redux';

const {width, height} = Dimensions.get('screen');
const AnimatedTouchableOpacity = Animated.createAnimatedComponent(
  TouchableOpacity,
);

class LoginScreen extends Component {
  state = {
    modalVisible: true,
    animatedArrow: new Animated.Value(0),
    phoneNumber: '',
    password: '',
    error: false,
  };

  componentDidMount() {
    const {animatedArrow} = this.state;
    console.log('[hs]', this.props.userInfo);
    Animated.loop(
      Animated.sequence([
        Animated.delay(1000),
        Animated.timing(animatedArrow, {
          toValue: 1,
          duration: 800,
        }),
      ]),
    ).start();
  }

  handleNextPage = () => {
    this.listView.scrollTo({x: width * 1, animated: true});
  };

  handleSubmit = () => {
    const {phoneNumber, password} = this.state;
    const {navigation, userInfo} = this.props;
    console.log(navigation);
    /*Essentially the submit button for login would make an API call to verify if the phone number is in a database
    however in this case since i'm not communicating with a database, I first register the user and store the data in a reducer,
    if the password and number from this state matches the one in the reducer from the registration screen,
    then it will navigate you to the hom screen.
    */

    if (phoneNumber.trim() === '' || password.trim() === '') {
      this.setState({error: true});
    }
    if (
      phoneNumber.toLowerCase() === userInfo.phoneNumber.toLowerCase() &&
      password.toLowerCase() === userInfo.password.toLowerCase()
      &&
      phoneNumber.trim() !== ''
      && password.trim() !== ''
    ) {
      this.setState(
        {modalVisible: !this.state.modalVisible, phoneNumber: '', password: ''},
        () => {
          navigation.navigate('Home');
        },
      );
    }
  };

  render() {
    const {animatedArrow} = this.state;
    const interpolatedArrow = animatedArrow.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 40],
    });

    const arrowStyle = {
      transform: [
        {
          translateX: interpolatedArrow,
        },
      ],
    };
    return (
      <View>
        <Text>LoginScreen</Text>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={styles.modalContainer}>
            <View
              style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
              <ScrollView
                pagingEnabled={true}
                ref={ref => (this.listView = ref)}
                style={{
                  backgroundColor: 'black',
                  position: 'absolute',
                  top: 100,
                  zIndex: 1,
                  height: 150,
                  width: '100%',
                }}
                contentContainerStyle={{alignItems: 'center'}}
                horizontal={true}>
                <View
                  style={{
                    width,
                    height: 100,
                    backgroundColor: '#f0f0f0',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View style={{flexDirection: 'column', width: 200}}>
                    <Text style={{marginBottom: 10}}>Enter</Text>
                    <TextInput
                      placeholder="phone number"
                      keyboardType="numeric"
                      maxLength={10}
                      onChangeText={value =>
                        this.setState({phoneNumber: value})
                      }
                    />
                  </View>
                  <AnimatedTouchableOpacity
                    onPress={this.handleNextPage}
                    style={[
                      //   arrowStyle,
                      {
                        backgroundColor: 'black',
                        width: 40,
                        height: 40,
                        alignSelf: 'flex-end',
                        marginRight: 45,
                        justifyContent: 'center',
                        borderRadius: 20,
                      },
                    ]}>
                    <Text
                      style={{
                        fontSize: 20,
                        textAlign: 'center',
                        color: '#f0f0f0',
                      }}>
                      >
                    </Text>
                  </AnimatedTouchableOpacity>
                </View>
                <View
                  style={{
                    width,
                    height: 100,
                    backgroundColor: '#f0f0f0',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View style={{flexDirection: 'column', width: 200}}>
                    <Text style={{marginBottom: 10}}>Enter</Text>
                    <TextInput
                      placeholder="password"
                      onChangeText={value => this.setState({password: value})}
                    />
                  </View>
                  {this.state.error ? (
                    <Text
                      style={{
                        color: 'red',
                        fontSize: 10,
                        position: 'absolute',
                        top: 70,
                        alignSelf: 'center',
                      }}>
                      Don't leave any empty fields...
                    </Text>
                  ) : null}
                  <AnimatedTouchableOpacity
                    onPress={this.handleSubmit}
                    style={[
                      {
                        backgroundColor: 'black',
                        width: 40,
                        height: 40,
                        alignSelf: 'flex-end',
                        marginRight: 45,
                        justifyContent: 'center',
                        borderRadius: 20,
                      },
                    ]}>
                    <Text
                      style={{
                        fontSize: 15,
                        textAlign: 'center',
                        color: '#f0f0f0',
                      }}>
                      >
                    </Text>
                    {/* {this.state.error ? <Text style={{color:'red', fontSize:100}}>Don't leave any empty fields...</Text> : null} */}
                  </AnimatedTouchableOpacity>
                </View>
              </ScrollView>
              <TouchableOpacity
                style={{marginTop: 40}}
                onPress={() => this.props.navigation.navigate('UserAuth')}>
                <Text> Go Back </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  userInfo: state.userInfo,
});

const styles = StyleSheet.create({
  modalContainer:{
    marginTop:22
  }
})

export default connect(mapStateToProps, null)(LoginScreen);
