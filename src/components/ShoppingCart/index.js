import React, {Component} from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import {connect} from 'react-redux';
import {deleteItem} from '../../redux/actions/itemActions';
import SubTotal from '../SubTotal';

class ShoppingCart extends Component {
  state = {
    item: [],
  };
  componentDidMount() {
    const {payload} = this.props.item;
    console.log('[item_]', this.props.item);
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
    const data={
        newItemList,
        item
    }
    deleteItem(data);
  };
  render() {
    const {item} = this.state;
    const {navigation} = this.props;
    return (
      <View style={{flex: 1}}>
              <SubTotal navigation={navigation}/>
        {item.length > 0 ? (
          <FlatList
          style={{marginTop:80}}
            data={item}
            renderItem={({item}) => (
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: 'black',
                  height: 100,
                  marginHorizontal: 10,
                  marginVertical: 5,
                  borderRadius: 20,
                }}>
                <Text style={{flex: 5, color: '#f0f0f0', margin: 10}}>
                  {item.name}
                </Text>
                <TouchableOpacity
                  onPress={() => this.handleDeleteItem(item)}
                  style={{flex: 1, margin: 10}}>
                  <Text style={{color: '#f0f0f0'}}>Delete</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        ) : (
          <Image 
          style={{resizeMode:'contain', width:"90%", alignSelf:'center'}}
          source={require('../../assets/cart.png')} />
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item,
});

export default connect(mapStateToProps, {deleteItem})(ShoppingCart);
