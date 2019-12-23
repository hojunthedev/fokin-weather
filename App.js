import React from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = "4de2b5b882017390c6ffc645594a3227";

export default class extends React.Component {
  state = {
    isLoading : true
  }
  
  getWeather = async(lat, lon) => {
    const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`).catch(function (error) {
      console.log(error.response);
 });
    this.setstate({isLoading : false, temp : data.main.temp});
  } //`${}` called template strings es6
  
  getLocation= async () => {
    try {
      await Location.requestPermissionsAsync();
      const {coords : {lat, lon}} = await Location.getCurrentPositionAsync();
      this.getWeather(lat, lon);
    } catch (error) {
      Alert.alert("Cant't find you.", "So sad");
    }
  }
  
  componentDidMount(){
    this.getLocation();
  }

  render(){
    const {isLoading, temp} = this.state;
    return isLoading ? <Loading /> : <Weather temp = {Math.round(temp)}/>;
  } 
}