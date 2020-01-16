import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet, StatusBar} from 'react-native'; // statusbar폰 맨위 상태표시창
import {MaterialCommunityIcons} from '@expo/vector-icons';  //choose this! MaterialCommunityIcons
import {LinearGradient} from 'expo-linear-gradient';

const weatherOptions = {
    Haze : {
        iconName : "weather-hail",
        gradient : ['#4c669f','#3b5998']
    },
    Thunderstorm: {
        iconName : "weather-hail",
        gradient : ['#4c669f','#3b5998']
    },
    Drizzle: {
        iconName : "weather-hail",
        gradient : ['#4c669f','#3b5998']
    },
    Rain: {
        iconName : "weather-hail",
        gradient : ['#4c669f','#3b5998']
    },
    Snow: {
        iconName : "weather-hail",
        gradient : ['#4c669f','#3b5998']
    },
    Atmosphere: {
        iconName : "weather-hail",
        gradient : ['#4c669f','#3b5998']
    },
    Clear: {
        iconName : "weather-hail",
        gradient : ['#4c669f','#3b5998']
    },
    Clouds: {
        iconName : "weather-hail",
        gradient : ['#4c669f','#3b5998']
    }
}

export default function Weather({temp, condition}){
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
            <MaterialCommunityIcons size={96} name={weatherOptions[condition].iconName} color="white" />
            <Text style={styles.temp}>{temp}℃</Text>
            </View>
            <View style={styles.halfContainer} />
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp : PropTypes.number.isRequired,
    condition : PropTypes.oneOf(["Thunderstorm","Drizzle","Rain","Snow", "Atmosphere","Clear","Clouds"]).isRequired
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
    temp :{
        fontSize : 42,
        color : "white"
    },
    halfContainer : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    }
});