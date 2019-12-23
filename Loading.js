import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Loading(){
    return (
        <View style={style.container}>
            <Text style={style.text}>외않됀데?</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container : {
        backgroundColor : "black",//"#FDF6AA",
        flex : 1,
        justifyContent : "flex-end",
        paddingHorizontal : 30,
        paddingVertical : 100
    },
    text : {
        color : "#2c2c2c",
        fontSize : 30
    }
});
