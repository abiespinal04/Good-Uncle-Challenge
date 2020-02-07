import React, { Component } from 'react';
import { Text, View, StyleSheet} from 'react-native';


const Title = () => {
    return ( 
        <View style={styles.container}>
            <Text style={styles.titleText}>
                Good Uncle Challenge
            </Text>
        </View>
     );
}
 
const styles = StyleSheet.create({
    container:{
        width:"90%",
        height:60,
        backgroundColor:"#f0f0f0",
        justifyContent:'center',
        marginBottom:40,
        borderRadius:20
    },
    titleText:{
        fontWeight:'bold',
        fontSize:30,
        textAlign:'center'
    }
})

export default Title;