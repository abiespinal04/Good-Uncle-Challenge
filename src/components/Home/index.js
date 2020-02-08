import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import data from '../../api/data.json';
import {customTruncate} from '../../utils';
import SubTotal from '../SubTotal';

class Home extends Component {
  state = {
    mains: [],
  };
  componentDidMount() {
    this.setState({mains: data.digestData.mains});
  }

  handleItemPress = item => {
    const {navigation} = this.props;
    navigation.navigate('ItemScreen', {itemData: item, title: item.name});
  };
  render() {
    const {mains} = this.state;
    const {navigation} = this.props;

    return (
      <View>
        <SubTotal navigation={navigation} />
        <FlatList
          data={mains}
          renderItem={({item}) => (
            <View>
              <TouchableOpacity
                onPress={() => this.handleItemPress(item)}
                style={styles.buttonStyle}>
                <Text style={styles.productName}>
                  {customTruncate(item.name, 20)}
                </Text>
                <Text style={styles.productDescription}>
                  {customTruncate(item.description, 150)}
                </Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: 'black',
    marginVertical: 3,
    height: 100,
    marginHorizontal: 3,
  },
  productName: {
    color: '#f0f0f0',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 10,
  },
  productDescription: {
    color: '#f0f0f0',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default Home;
