import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import data from '../../api/data.json';
import {customTruncate} from '../../utils';
import SubTotal from '../SubTotal';

class Home extends Component {
  state = {
    mains: [],
  };
  componentDidMount() {
    console.log('[data]', data);
    this.setState({mains: data.digestData.mains});
  }

  handleItemPress = (item) => {
    const {navigation} = this.props;
    navigation.navigate('ItemScreen', {itemData:item, title:item.name})
  }
  render() {
    const {mains} = this.state;
    const {navigation} = this.props;
    
    return (
      <View>
        <SubTotal navigation={navigation}/>
        <FlatList 
        data ={mains}
        renderItem={({item}) => (
         
            <View>
                <TouchableOpacity
                onPress={() => this.handleItemPress(item)}
                style={{backgroundColor:'black', marginVertical:3, height:100, marginHorizontal:3}}
                >
                <Text style={{color:'#f0f0f0', textAlign:'center', fontWeight:"bold", fontSize:25, marginBottom:10}}>
                    {item.name}
                </Text>
                <Text style={{color:'#f0f0f0', textAlign:'center',  marginBottom:10}}>
                {customTruncate(item.description,180 )}
                </Text>
                </TouchableOpacity>
            </View>
        )} 
        keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

export default Home;
