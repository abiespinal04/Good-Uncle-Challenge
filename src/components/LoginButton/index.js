import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


class Login extends Component {
    state = {  }
    render() { 
        const {navigation} = this.props;
        return ( 
            <View>
                <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                 style={styles.loginButton}>
                <Text style={styles.loginText}>
                Login
                </Text>
                </TouchableOpacity>
            </View>
         );
    }
}

const styles = StyleSheet.create({

    loginButton:{
        width:80,
        height:60,
        backgroundColor:'black',
        justifyContent:'center',
        borderRadius:20
    },
    loginText:{
        color:'white',
        textAlign:'center'
    }

})
 
export default Login;