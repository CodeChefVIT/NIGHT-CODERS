// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Make a component
const PinkBoxBottom = () => {

  const { textStyle, viewStyle, hwb,hwbContenth, hwbContentwb, rl } = styles;


  
  return (
    <LinearGradient 
    
  locations={[0.5,1]}
    colors={['#ef0c70', '#cf05ef']} 
    style={viewStyle}>


    </LinearGradient>
  );
};

const styles = {
  viewStyle: {
    //  backgroundColor: 'pink',
    justifyContent: 'flex-start',
    height: 200,
    flex: 1,
    elevation: 10,
    borderWidth: .2,
    borderColor: '#ddd',
    shadowColor: '#000',
  shadowOffset: {width: 1, height: 1},
  shadowOpacity: 0.8,
  shadowRadius: 2,
  },
  textStyle: {
    fontSize: 20
  },

};

// Make the component available to other parts of the app
export { PinkBoxBottom };
