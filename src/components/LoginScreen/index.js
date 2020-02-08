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
  StyleSheet,
  Platform,
} from 'react-native';

import {connect} from 'react-redux';

const {width} = Dimensions.get('screen');
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
    invalidLogin: false,
  };

  componentDidMount() {
    const {animatedArrow} = this.state;
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
    /*Essentially the submit button for login would make an API call to verify if the phone number is in a database
    however in this case since i'm not communicating with a database, I first register the user and store the data in a reducer,
    if the password and number from this state matches the one in the reducer from the registration screen,
    then it will navigate you to the hom screen.
    */
    if (phoneNumber.trim() === '' || password.trim() === '') {
      this.setState({error: true});
      return;
    }

    if (
      phoneNumber.toLowerCase() !== userInfo.phoneNumber.toLowerCase() ||
      password.toLowerCase() !== userInfo.password.toLowerCase()
    ) {
      this.setState({invalidLogin: true});
    }
    if (
      phoneNumber.toLowerCase() === userInfo.phoneNumber.toLowerCase() &&
      password.toLowerCase() === userInfo.password.toLowerCase() &&
      phoneNumber.trim() !== '' &&
      password.trim() !== ''
    ) {
      this.setState(
        {
          modalVisible: !this.state.modalVisible,
          phoneNumber: '',
          password: '',
        },
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
      outputRange: [0, 30],
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
            <View style={styles.modalSubContainer}>
              <ScrollView
                pagingEnabled={true}
                ref={ref => (this.listView = ref)}
                style={styles.scrollViewStyle}
                contentContainerStyle={{alignItems: 'center'}}
                horizontal={true}>
                <TouchableOpacity
                  style={{marginTop: Platform.OS === 'android' ? 0 : 10}}
                  onPress={() => this.props.navigation.navigate('UserAuth')}>
                  <Text style={styles.goBackText}> Go Back </Text>
                </TouchableOpacity>
                <View style={styles.infoContainer}>
                  <View style={{flexDirection: 'column', width: 200,  marginTop: Platform.OS === 'android' ? 30 : 0}}>
                    <Text
                      style={{
                        marginBottom: Platform.OS === 'android' ? 0 : 0,
                      }}>
                      Enter
                    </Text>
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
                    style={[arrowStyle, styles.arrowButton]}>
                    <Text style={styles.arrowText}>></Text>
                  </AnimatedTouchableOpacity>
                </View>
                <View style={styles.infoContainer}>
                <View style={{flexDirection: 'column', width: 200,  marginTop: Platform.OS === 'android' ? 30 : 0}}>
                    <Text style={{paddingTop: Platform.OS === 'ios' ? 10 : 10,}}>Enter</Text>
                    <TextInput
                      placeholder="password"
                      onChangeText={value => this.setState({password: value})}
                    />
                  </View>
                  {this.state.error ? (
                    <Text style={styles.errorMessage}>
                      Don't leave any empty fields...
                    </Text>
                  ) : null}
                  {this.state.invalidLogin ? (
                    <Text style={styles.errorMessage}>Invalid Login</Text>
                  ) : null}
                  <AnimatedTouchableOpacity
                    onPress={this.handleSubmit}
                    style={styles.arrowButton}>
                    <Text style={styles.arrowText}>></Text>
                  </AnimatedTouchableOpacity>
                </View>
              </ScrollView>
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
  modalContainer: {
    marginTop: 22,
  },
  modalSubContainer: {width: '100%', height: '100%', backgroundColor: 'white'},
  scrollViewStyle: {
    backgroundColor: 'black',
    position: 'absolute',
    top: 100,
    zIndex: 1,
    height: 150,
    width: '100%',
  },
  goBackText: {color: 'white'},
  infoContainer: {
    width,
    height: 100,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowButton: {
    backgroundColor: 'black',
    width: 40,
    height: 20,
    alignSelf: 'flex-end',
    marginRight: 95,
    marginBottom:40,
    justifyContent: 'center',
    borderRadius: 20,
  },
  arrowText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#f0f0f0',
  },
  errorMessage: {
    color: 'red',
    fontSize: 10,
    position: 'absolute',
    top: 70,
    left: 40,
    alignSelf: 'center',
  },
});

export default connect(mapStateToProps, null)(LoginScreen);
