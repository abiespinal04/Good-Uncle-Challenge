import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {addItem} from '../../redux/actions/itemActions';
import {connect} from 'react-redux';
import Subtotal from '../SubTotal';
import {customTruncate} from '../../utils';

class ItemScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: customTruncate(navigation.getParam('title'), 20),
    };
  };
  state = {
    itemData: {},
  };

  componentDidMount() {
    const {navigation} = this.props;
    const itemData = navigation.getParam('itemData');
    this.setState({itemData});
  }

  handleAddToCart = () => {
    const {navigation, addItem} = this.props;
    const {itemData} = this.state;
    addItem(itemData);
    navigation.goBack();
  };
  render() {
    const {itemData} = this.state;
    const {navigation, addItem} = this.props;
    return (
      <View style={styles.container}>
        <Subtotal navigation={navigation} />
        <View style={styles.subContainer}>
          <Text style={styles.productName}>{itemData.name}</Text>
          <View style={styles.productName}>
            <Text>{itemData.description}</Text>
            <Text style={styles.priceTag}>
              Price:{' '}
              {itemData.productOptions && itemData.productOptions[0].price}
            </Text>
            <View></View>
          </View>
        </View>
        <TouchableOpacity
          onPress={this.handleAddToCart}
          style={styles.addCartButton}>
          <Text style={styles.addToCartText}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'black'},
  subContainer: {
    backgroundColor: '#f0f0f0',
    marginHorizontal: 10,
    marginTop: 40,
    borderRadius: 20,
  },
  productName: {marginTop: 20, marginHorizontal: 10},
  priceTag: {fontSize: 20, fontWeight: 'bold'},
  addCartButton: {
    width: 100,
    height: 40,
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    marginTop: 40,
    alignSelf: 'center',
  },
  addToCartText: {color: 'black', textAlign: 'center'},
});

export default connect(null, {addItem})(ItemScreen);
