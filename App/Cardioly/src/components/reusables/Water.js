// Import libraries for making a component
import React from 'react';
import {  View, } from 'react-native';


// Make a component
const Water = () => {

  const {  viewStyle } = styles;

  
  return (
    <View 
    style={viewStyle}>
  
       
    </View>
  );
};

const styles = {
  viewStyle: {
    justifyContent: 'center',
    height: 10,
    marginVertical: 25,
    flex: 1,
  flexDirection: 'row',
  },


};

// Make the component available to other parts of the app
export { Water };
