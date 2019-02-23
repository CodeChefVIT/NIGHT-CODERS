

import React, {Component} from 'react';
import { Text, View,AsyncStorage} from 'react-native';
import Router from './src/components/router';
import Profile from './src/components/profile';
import ImagePicker from './src/components/ImagePicker';
import Testing from './src/components/testing';


export default class App extends Component {
  
  render() {
    return (
      <Router/>
      // <ImagePicker style={styles.container}/>
      //<Testing/>
      // <Profile/>
    );
  }
}

const styles ={
  container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
  },
  welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
  instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
  },
};