import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.redView}></View>
      <View style={styles.blueView}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'black',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  text : {
    color : 'white',
    fontSize : 50,
  },
  redView:{
    flex : 1,
    backgroundColor:'red'
  },
  blueView:{
    flex : 1,
    backgroundColor:'blue'
  }
});
