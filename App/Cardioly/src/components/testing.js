import React,{Component} from 'react';
import {Button} from './reusables/Button';
import { Input } from './reusables/Input';
import {View,TouchableOpacity,Text,AsyncStorage} from 'react-native';


export default class Testing extends Component
{
  constructor()
  {
    super();
    
    this.state=
    {
      text:""
    }
  }

  onChangeText(value)
  {
    this.setState(
      {
        text:value  
      }
    )

  }

  sendData()
  {
    console.log("Hello");


      fetch('https://visionapu.herokuapp.com/foodsearch',{
    method:'post',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({foodname:"Rice"})
    })
    .then(response=>response.json())
    .then((response) =>
      {
        console.log(response);
      })
    }


  render()
  {

    return(
      <View style={{flex:1,backgroundColor:'white',justifyContent:'space-around'}}>
      <Input label="value"
            value={this.state.text} 
            onChangeText={this.onChangeText.bind(this)} 
            placeholder="text"
            secureTextEntry={false} />
      <TouchableOpacity style={styles.buttonStyle} onPress={this.sendData.bind(this)} >
      <Text>
      Send
      </Text>
      </TouchableOpacity>
      </View>
    )
  }
}


const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

