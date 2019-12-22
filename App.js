import React from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = "007ced0339fb4d90ae6241289212a5b8";

export default class extends React.Component {
  state = {
    isLoading : true
  }
  getWeather = async(latitude, longitude) => {
    const {data} = await axios.get(`api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`);
    this.setstate({isLoading : false, temp : data.main.temp})
  }; //`${}` called template strings es6
  getLocation= async () => {
    try {
      await Location.requestPermissionsAsync();
      const {coords : {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Cant't find you.", "So sad");
    }
  };
  componentDidMount(){
    this.getLocation();
  };
  render(){
    const {isLoading, temp} = this.state;
    return isLoading ? <Loading /> : <Weather temp = {Math.round(temp)}/>;
  } 
}