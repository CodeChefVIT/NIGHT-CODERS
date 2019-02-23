import React,{Component} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import ImagePicker from 'react-native-image-picker';
 
class MealComponent extends Component
{
  constructor(props)
  {
    super(props);
  }



      renderDisableOrActive()

      {
        if(this.props.uploaded)
      {
        return(
            <View style={[Styles.MealComponent,{backgroundColor:'grey'}]}>
          <Text style={[Styles.MealComponentLeft,Styles.RightText]}>
            {this.props.mealType}
            </Text>
            <Text style={[Styles.MealComponentRight,Styles.RightText]}>
            -
            </Text>
            </View>
        )
      }

      else
      {
        return(

              <View style={[Styles.MealComponent]}>
              <Text style={[Styles.MealComponentLeft,Styles.RightText]}>
              {this.props.mealType}
              </Text>
              <TouchableOpacity style={Styles.MealComponentRight} onPress={this.onAddFoodClick.bind(this)} >
              <Text style={Styles.RightText}>
              +
              </Text>
              </TouchableOpacity>
              </View>
        )
      }

    }

    onAddFoodClick()
    {

      const options = {
        noData: true,
      }
      ImagePicker.showImagePicker(options,response => {
        //ImagePicker.launchImageLibrary(options,response =>{
        if (response.uri) {
          Actions.uploadscreen({photo:response,mealType:this.props.mealType});
        }
      })
    }

    render()
    {
      return(
          <View>
          {this.renderDisableOrActive()}
          </View>
        )
    }

}


export default MealComponent;



    const Styles={

        MealComponent:{
          flexDirection:'row',
          padding:10,
          backgroundColor:'#bc05d3',
        

      },

        MealComponentLeft:{
          flex:10,
          fontSize:20
      },
        MealComponentRight:{
          flex:1,
          backgroundColor:'black',
          fontSize:30
      },
      RightText:
      {
          fontSize:20,
          textAlign:'center',
          color:'white'

      }
  }