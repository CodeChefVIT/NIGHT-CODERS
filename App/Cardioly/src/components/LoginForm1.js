import React,{Component} from 'react';
import {Input} from './reusables/Input';
import {View,Text,AsyncStorage, TouchableWithoutFeedback} from 'react-native';
import {Header} from './reusables/Header';
import {Button} from './reusables/Button';
import {Spinner} from './reusables/Spinner';
import {Actions}  from 'react-native-router-flux';
import ErrorMessage from './reusables/errormessage';


export default class LoginForm extends Component
{
  
  constructor()
  {
    super();
    
    this.state=
    {
      username:"",
      password:"",
      isLoading:false,
      error:false

    }
  }

  renderLoadingOrLogin()
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

        <Button onPress={this.onLogIn.bind(this)} >
        SIGN IN
        </Button>
      )

    }

  }


  displayErrorMessage()
  {
    if(this.state.error)
    {
      return(<ErrorMessage message={"Invalid Credentials"} />);
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

  
  showResponse()
  {
    this.setState(
    {
      isLoading:false,
    })
  }

  onLogIn()
  {
    const credentialsObject={
      username:this.state.username,
      password:this.state.password,
  }



  this.setState({
    isLoading:true,
    error:false
  })

    fetch('https://visionapu.herokuapp.com/login',{
    method:'post',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(credentialsObject) })
    .then(response=>response.json())
    .then((response) =>
      {

            this.setState(
              {
                isLoading:false
              })

            if(response.error)
          { 
            this.setState({error:true})
          }

          else
          {
            AsyncStorage.setItem('token',response.token);
            console.log(response.token);
            Actions.main();
          }
      })
  }

  onRegister()
  {
    Actions.register();
  }



  render()
  {
    return(
      
      
      <View style={styles.loginFormPage}>
         <Header headerText="SIGN IN"/>
          <View style={styles.loginForm}>

          <View style={styles.username}>
            <Input label="USERNAME"
            value={this.state.username} 
            onChangeText={this.onChangeUserName.bind(this)} 
            placeholder="myemail@gmail.com"
            secureTextEntry={false} />
          </View>
          
          <View style={styles.password}>
            <Input label="PASSWORD"
            value={this.state.password} 
            onChangeText={this.onChangePassword.bind(this)} 
            placeholder="***"
            secureTextEntry={true} />
          </View>
      
          {this.displayErrorMessage()}
          
          <View style={styles.loginButton}>
            {this.renderLoadingOrLogin()}
          </View>
          <View style={styles.signUp}> 
          <TouchableWithoutFeedback
                 onPress={this.onRegister.bind(this)} >
                <Text> Not a member?  <Text style={{color: '#bc05d3'}}>SIGN UP</Text>
                </Text>
          </TouchableWithoutFeedback>
          </View>
          </View>
      </View>
    )
  }
}

const styles = {
  loginFormPage: {
    flex: 1,
    backgroundColor: '#ffffff',

  },
  loginForm: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  username: {
    borderWidth: 1,
    padding: 5,
    marginVertical: 2,
    marginHorizontal: 15,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: 'grey',
    borderRadius: 20,
    // position: 'relative',
  },
  password: {
    borderWidth: 1,
    padding: 5,
    marginVertical: 2,
    marginHorizontal: 15,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: 'grey',
    borderRadius: 20,
    // position: 'relative',
  },
  loginButton: {
    padding: 5,
    marginVertical: 2,
    marginHorizontal: 15,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  signUp: {
    marginTop: 20,
    paddingTop: 5,
    marginVertical: 2,
    marginHorizontal: 15,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: 'row',
  },
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
  },
  splashStyle: {
    flexDirection: 'column',
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
},
heading:{
    color: '#bc05d3',
    fontSize: 40,        
},
};



