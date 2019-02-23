import React,{Component} from 'react';
import {Text,View} from 'react-native';
import FoodConfirmComponent from './FoodConfirmComponent';


const temp=[
 {description:"apple"},
 {description:"banana"}, 
 {description:"grapes"}, 
 {description:"apple"}, 
 {description:"apple"}, 
 {description:"apple"}, 
 {description:"apple"}, 
 {description:"apple"}, 
 {description:"apple"}, 
 {description:"apple"}, 
]

class ConfirmFoodScreen extends Component
{
  constructor(props)
  {
    super(props);

    this.state={

    }
  }

  


     

    renderFoodComponents()
    {
      //return temp.map(((Item)=>
      return this.props.foodItems.map(((Item)=>
    {
      return(
        <View>
        <FoodConfirmComponent foodDescription={Item.description} imagePath={this.props.imagePath} mealType={this.props.mealType}/>
        </View>
      )
    }))
  }



  


  render()
  {

    return(
      <View style={{paddingLeft:10,paddingRight:10}}>
      <Text style={{fontSize:20}}>
      What was it ?
      </Text>
     {this.renderFoodComponents()}
      </View> 
    )


  }


}




export default ConfirmFoodScreen;