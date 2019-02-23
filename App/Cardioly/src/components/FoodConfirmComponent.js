import React from 'react';
import {Text,View,TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';




const FoodConfirmComponent=({foodDescription,imagePath,mealType})=>
{

  onConfirmingFood=()=>
  {
    Actions.foodinformationscreen({foodItem:foodDescription,imagePath:imagePath,mealType:mealType});
  }

  return(
   <View >
   <TouchableOpacity style={styles.FoodConfirmComponent} onPress={onConfirmingFood.bind(this)} >
   <Text style={styles.TextStyle}>
   {foodDescription}
   </Text>
   </TouchableOpacity>
   </View>
  )

}


styles={
  FoodConfirmComponent:{
  
    flexDirection:'row',
    justifyContent:'center',
    padding:10,
    marginTop:8,
    //marginBottom:5,
    backgroundColor:'#bc05d3',
    marginleft:10,
    //marginRight:5,
    justifyContent:'space-around',
    borderRadius:15
  },
  TextStyle:{
    fontSize:20,
    color:'white'
  }

}


export default FoodConfirmComponent;
