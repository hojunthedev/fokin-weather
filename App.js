import React from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios';

const API_KEY = "007ced0339fb4d90ae6241289212a5b8";

export default class extends React.Component {
  state = {
    isLoading : true
  }
  getWeather = async(latitude, longitude) => {
    const {data} = await axios.get(`api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}`);
    console.log(data);
  } //`${}` called template strings es6
  getLocation= async () => {
    try {
      await Location.requestPermissionsAsync();
      const {coords : {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      this.setState({isLoading : false})
    } catch (error) {
      Alert.alert("Cant't find you.", "So sad");
    }
  };
  componentDidMount(){
    this.getLocation();
  };
  render(){
    const {isLoading} = this.state;
    return isLoading ?<Loading /> : null;
  } 
}