import React,{Component} from 'react';
import {Text,View} from 'react-native';
import MealComponent from './mealComponent';

class LogScreen extends Component
{
  constructor()
  {
    super();
        this.state={

        }
  }


  
    render()
    {
        return(
            <View style={styles.LogScreen}>
            <MealComponent mealType={"Breakfast"} uploaded={true}/>
            <MealComponent mealType={"Lunch"} uploaded={false}/>
            <MealComponent mealType={"Snacks"} uploaded={false}/>
            <MealComponent mealType={"Dinner"} uploaded={false}/>

            </View>
        )
    }
  }


export default LogScreen;


const styles={

  LogScreen:{
    flex:1,
    justifyContent:'space-around'
  }


}