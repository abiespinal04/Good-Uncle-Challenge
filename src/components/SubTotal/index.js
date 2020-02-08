import React, {Component} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

class SubTotal extends Component {
  state = {
    subTotal: '',
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.subTotal !== prevState.subTotal) {
      return {
        subTotal: nextProps.subTotal,
      };
    }

    return null;
  }

  render() {
    const {subTotal} = this.state;
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('ShoppingCart')}
        style={styles.subTotalButton}>
        <Text style={{textAlign: 'center'}}>{subTotal}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  subTotalButton: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'white',
    zIndex: 1,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 4},
    shadowRadius: 10,
    shadowOpacity: 0.4,
  },
});

const mapStateToProps = state => ({
  subTotal: state.item.subTotal,
});

export default connect(mapStateToProps, null)(SubTotal);
