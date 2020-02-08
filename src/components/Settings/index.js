import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import SubTotal from '../SubTotal';


class Settings extends Component {
    render() { 
        const {navigation} = this.props;
        return ( 
            <View style={styles.container}>
                <SubTotal navigation={navigation}/>
                <TouchableOpacity 
                style={styles.logoutButton}
                onPress={() => navigation.navigate('UserAuth')}
                
                >
                    <Text
                    style={styles.buttonText}
                    >
                        Logout
                    </Text>
                </TouchableOpacity>
            </View>
         );
    }
}

const styles = StyleSheet.create({
   container:{
       flex:1,
       justifyContent:'center',
       alignItems:'center'
   },
    logoutButton:{
        width:100,
        height:40,
        borderRadius:20
    },
    buttonText:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:20
    }
})
 
export default Settings;