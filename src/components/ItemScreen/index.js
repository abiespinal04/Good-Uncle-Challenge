import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {addItem} from '../../redux/actions/itemActions'
import {connect} from 'react-redux';
import Subtotal from '../SubTotal';
import {customTruncate} from '../../utils'



class ItemScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
          title: customTruncate(navigation.getParam('title'), 20)
        }
      };
    state = { 
        itemData:{}
     }

    componentDidMount(){
        const { navigation } = this.props;
        const itemData = navigation.getParam('itemData');
        console.log('[item]', itemData.productOptions);
        this.setState({itemData})
    }

    handleAddToCart = () => {
        const { navigation, addItem } = this.props;
        const { itemData} = this.state;
        addItem(itemData);
        navigation.goBack()
    }
    render() { 
        const { itemData } = this.state;
        const { navigation, addItem } = this.props;
        return ( 
            <View style={{flex:1, backgroundColor:'black'}}>
                <Subtotal navigation={navigation}/>
                <View style={{backgroundColor:'#f0f0f0', marginHorizontal:10, marginTop:40, borderRadius:20}}>
                <Text style={{marginTop:20, marginHorizontal:10}}>
                    {itemData.name}
                </Text>
                <View  style={{marginTop:20, marginHorizontal:10}}>
                <Text>
                    {itemData.description}
                </Text>
                <Text style={{fontSize:20, fontWeight:'bold'}}>
                   Price:  { itemData.productOptions && itemData.productOptions[0].price}
                </Text>
                <View>
                </View>
                </View>
                </View>
                    <TouchableOpacity
                    onPress={this.handleAddToCart}
                    style={{width:100, height:40, justifyContent:'center', backgroundColor:"#f0f0f0", borderRadius:20, marginTop:40, alignSelf:'center'}}
                    >
                        <Text style={{color:"black", textAlign:'center'}}>
                            Add To Cart
                        </Text>
                    </TouchableOpacity>
            </View>
         );
    }
}
 

export default connect(null, {addItem})(ItemScreen);