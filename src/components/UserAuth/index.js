
import React from 'react';
import { SafeAreaView, StyleSheet} from 'react-native';

import Landing from '../Landing';
import Title from '../Title';

const UserAuth = ({navigation}) => {
    return ( 
      <SafeAreaView style={styles.container}>
        <Title />
        <Landing navigation={navigation}/>
    </SafeAreaView>
     );
}
 


const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
});

export default UserAuth;