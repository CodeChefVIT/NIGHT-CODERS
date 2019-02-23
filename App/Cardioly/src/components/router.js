import React,{Component}from 'react';
import {AsyncStorage} from 'react-native';
import {Router,Scene,Actions} from 'react-native-router-flux';
import LoginForm from './LoginForm1';
import RegisterForm from './RegisterForm';
import splashScreen from './splashScreen';

import Profile from './profile';

import LogScreen from './LogScreen';
import splashScreenNew from './splashScreenNew';
import ImagePicker from './ImagePicker';
import ComfirmFoodScreen from './ConfirmFoodScreen';
import ConfirmFoodScreen from './ConfirmFoodScreen';
import FoodInformation from './FoodInformation';


export default class  RouterComponent extends Component
{

  componentDidMount()
  {
    // AsyncStorage.getItem('token')
    // .then((value)=>{
    //   if(!value)
    //   {
    //     Actions.login();
    //   }
      

    // })

  }


  onLogOut()
  {
    //delete the token first and then navigate to login screen
    AsyncStorage.removeItem('token');
    Actions.auth();
  }




  render()
  {
    

  return(
    <Router>
      <Scene key="root" hideNavBar>
          <Scene key="auth">

              <Scene key="splash" component={splashScreen} hideNavBar="true" />
              <Scene key="splashNew" component={splashScreenNew} hideNavBar="true" />
              <Scene key="login" component={LoginForm} title={"Login"} hideNavBar="true" />
              <Scene key="register" component={RegisterForm} title={"Register"} hideNavBar="true"/> 
          </Scene>  
          <Scene key="main">

            <Scene key="profile"
            component={Profile} 
            title={"UserProfile"}
            hideNavBar="true"/> 
            <Scene key="logscreen"
            component={LogScreen} 
            title={"Log Screen"}
            rightTitle="Logout"
            onRight={this.onLogOut.bind(this)}/> 
            <Scene key="uploadscreen"
            component={ImagePicker} 
            title={"Image Uploader"}
            rightTitle="Logout"
            onRight={this.onLogOut.bind(this)}/> 
            <Scene key="confirmfoodscreen"
            component={ConfirmFoodScreen} 
            title={"Confirm Food"}
            rightTitle="Logout"
            onRight={this.onLogOut.bind(this)}/> 
            <Scene key="foodinformationscreen"
            component={FoodInformation} 
            title={"Your Food Details"}
            rightTitle="Logout"
            onRight={this.onLogOut.bind(this)}  /> 
            </Scene>
      </Scene>
    </Router>
  )
}
}

