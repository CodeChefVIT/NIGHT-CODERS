import React,{Component} from 'react';
import {Input} from './reusables/Input';
import {View,Text, TouchableWithoutFeedback} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import {Header} from './reusables/Header';
import {Button} from './reusables/Button';
import {Spinner} from './reusables/Spinner';
import {Actions}  from 'react-native-router-flux';
import ErrorMessage from './reusables/errormessage';


export default class RegisterForm extends Component
{
  constructor()
  {
    super();
    
    this.state=
    {
      username:"",
      password:"",
      name:"",
      dob:"",
      height:"",
      weight:"",
      isLoading:"",
      error:false
    }
  }

  renderLoadingOrRegisterButton()
  {
    if(this.state.isLoading===true)
    {
      return(
        <Spinner/>
      )
    }



    else
    {
      return(

        <Button onPress={this.onRegister.bind(this)} >
        Register
        </Button>
      )

    }

  }


  displayErrorMessage()
  {
    if(this.state.error)
    {
      return(<ErrorMessage message={"Something Went wrong! Try Again"} />);
    }

    return;
  }


  onChangeUserName(value)
  {

    this.setState(
    {
      username:value
    }
  )
  }

  onChangePassword(value)
  {

    this.setState(
    {
      password:value
    })

  }

  onChangeName(value)
  {

    this.setState(
    {
      name:value
    })

  }


  onChangeDob(value)
  {

    this.setState(
    {
      dob:value
    })

  }

  onChangeHeight(value)
  {

    this.setState(
    {
      height:value
    })

  }

  onChangeWeight(value)
  {

    this.setState(
    {
      weight:value
    })

  }









 

  onRegister()
  {
    const credentialsObject={
      username:this.state.username,
      password:this.state.password,
      name:this.state.name,
      dob:this.state.dob,
      height:this.state.height,
      weight:this.state.weight
  }

  this.setState({
    isLoading:true,

  })




    fetch('https://visionapu.herokuapp.com/register',{
    method:'post',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(credentialsObject) })
    .then(response=>response.json())
    .then( (response) =>
    {
        this.setState({
            isLoading:false
          })
        if(response.error)
        {this.setState({error:true})}
        else
        {Actions.auth();}
      }
    )

  }
  
  
  


  render()
  {
    return(
      <View style={styles.registerFormPage}>
      <Header headerText="REGISTER"/>
      <KeyboardAwareScrollView
      style={{ backgroundColor: '#fff' }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      style={styles.registerForm}
      scrollEnabled={false}>
      
      <View style={{ flexDirection: 'row', flex: 1, alignContent:'stretch'}}>
      <View style={styles.profilePic}>
            <Text>pp</Text>
      </View>
      </View>

      <View style={styles.userdata}>
      <Input label="FULL NAME"
      value={this.state.name} 
      onChangeText={this.onChangeName.bind(this)} 
      placeholder="Name"
      secureTextEntry={false} />
      </View>


      <View style={styles.userdata}>
      <Input label="EMAIL"
      value={this.state.username} 
      onChangeText={this.onChangeUserName.bind(this)} 
      placeholder="myemail@gmail.com"
      secureTextEntry={false} />
      </View>

      <View style={styles.userdata}>
      <Input label="PASSWORD"
      value={this.state.password} 
      onChangeText={this.onChangePassword.bind(this)} 
      placeholder="*****"
      secureTextEntry={true} />
      </View>

      <View style={styles.userdata}>
      <Input label="DOB"
      value={this.state.dob} 
      onChangeText={this.onChangeDob.bind(this)} 
      placeholder="dd/mm/yyyy"
      secureTextEntry={false} />
      </View>


      <View style={styles.phydata}>
      <View style={styles.userdata}>
      <Input label="HEIGHT (cm)"
      value={this.state.height} 
      onChangeText={this.onChangeHeight.bind(this)} 
      placeholder="eg:180"
      secureTextEntry={false} />
      </View>



      <View style={styles.userdata}>
      <Input label="WEIGHT (Kgs)"
      value={this.state.weight} 
      onChangeText={this.onChangeWeight.bind(this)} 
      placeholder="62"
      secureTextEntry={false} />
      </View>
      </View>
      {this.displayErrorMessage()}

      <View style={styles.registerButton}>
      {this.renderLoadingOrRegisterButton()}
      </View>
      <View style={styles.signIn}> 
          <TouchableWithoutFeedback
                 onPress={Actions.login} >
                <Text> Already a member?  <Text style={{color: '#bc05d3'}}>SIGN IN</Text>
                </Text>
          </TouchableWithoutFeedback>
          </View>
         
      </KeyboardAwareScrollView>
      </View>
      
    )

    
  }
}

const styles = {
  registerFormPage: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
  },
  registerForm: {
    
  },
  userdata: {
    borderBottomWidth: 1,
    padding: 2,
    marginVertical: 5,
    marginHorizontal: 15,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    borderColor: '#ccc',
    borderRadius: 2,
    flex: 1
  },
  profilePic:{
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#ccc',
    alignContent: 'center',
    minHeight: 50,
    maxWidth: 50,
    flex: 1
  },
  phydata: {
    flexDirection: 'row',
  },
  registerButton: {
    padding: 5,
    marginTop: 4,
    marginHorizontal: 15,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItem: 'flex-end'
  },
  signIn: {
    marginTop: 15,
    paddingTop: 5,
    marginBotton: 4,
    marginVertical: 2,
    marginHorizontal: 15,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
  },
};




