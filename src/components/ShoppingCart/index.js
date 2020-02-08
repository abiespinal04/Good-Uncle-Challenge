import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {deleteItem} from '../../redux/actions/itemActions';
import SubTotal from '../SubTotal';

class ShoppingCart extends Component {
  state = {
    item: [],
  };
  componentDidMount() {
    const {payload} = this.props.item;
    this.setState({item: payload});
  }

  componentDidUpdate(prevProps) {
    if (prevProps.item.payload !== this.props.item.payload) {
      this.setState({item: this.props.item.payload});
    }
  }

  handleDeleteItem = itemData => {
    const {item} = this.state;
    const {deleteItem} = this.props;
    const indexOf = item.indexOf(itemData);
    const newItemList = item.filter((item, index) => index !== indexOf);
    const data = {
      newItemList,
      item,
    };
    deleteItem(data);
  };
  render() {
    const {item} = this.state;
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <SubTotal navigation={navigation} />
        {item.length > 0 ? (
          <FlatList
            style={{marginTop: 80}}
            data={item}
            renderItem={({item}) => (
              <View style={styles.subContainer}>
                <Text style={styles.productName}>{item.name}</Text>
                <TouchableOpacity
                  onPress={() => this.handleDeleteItem(item)}
                  style={{flex: 1, margin: 10}}>
                  <Text style={styles.deleteButton}>Delete</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        ) : (
          <Image
            style={styles.emptyImage}
            source={require('../../assets/cart.png')}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1},
  subContainer: {
    flexDirection: 'row',
    backgroundColor: 'black',
    height: 100,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 20,
  },
  productName: {flex: 5, color: '#f0f0f0', margin: 10},
  deleteButton: {color: '#f0f0f0'},
  emptyImage: {resizeMode: 'contain', width: '90%', alignSelf: 'center'},
});

const mapStateToProps = state => ({
  item: state.item,
});

export default connect(mapStateToProps, {deleteItem})(ShoppingCart);
