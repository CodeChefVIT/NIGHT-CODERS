import React,{Component} from 'react';
import {Text,alert,AsyncStorage,View,} from 'react-native';
import DisplayField  from './reusables/DisplayField';
import {Spinner} from './reusables/Spinner';
import {Button} from './reusables/Button';
import {AppHeader} from './reusables/AppHeader';
import {Dashboard} from './reusables/dashboard';
import {PinkBoxTop} from './reusables/pinkBoxTop';
import {PinkBoxBottom} from './reusables/pinkBoxBottom';
import {WhiteBox} from './reusables/WhiteBox';
import {Actions, Reducer} from 'react-native-router-flux';

class Profile extends Component
{
    constructor()
    {
      super();


      
      this.state={
        isLoading:true,
        UserDetails:{}
      }
    }



  renderDataOrSpinner()
      {
        if(this.state.isLoading)
        {
          return(

            <View style={styles.loading}>
            <Spinner/>
            <Text style={styles.loadingText}>Loading User Details</Text>
            </View>


          )
        }

        // <DisplayField label={"Name"} value={this.state.UserDetails.name}/>
        // <DisplayField label={"Username"} value={this.state.UserDetails.username}/>
        // <DisplayField label={"DOB"} value={this.state.UserDetails.DOB}/>
        // <DisplayField label={"Height"} value={this.state.UserDetails.height}/>
        // <DisplayField label={"Weight"} value={this.state.UserDetails.weight}/>

        else
        {
          return(
                <View style={{flex:1, padding: 25}}>
                <PinkBoxTop  userHeight={this.state.UserDetails.height}
                userWeight={this.state.UserDetails.weight}
                userBmi={'123'}
                riskLevel={'Low'}/>
                <View style={{flexDirection:'row',flex:1,justifyContent:'center'}}>
                {/* <TouchableOpacity onPress={this.onLogClick.bind(this)} >
              <Text style={{fontSize:30,backgroundColor:'#bc05d3',textAlign:'center',
              marginTop:10,padding:20}}>
              +
              </Text>
              </TouchableOpacity> */}
              <WhiteBox/>
              </View>
                <PinkBoxBottom />
                
                </View>
        )
      }
    }


  componentDidMount()
  {
    AsyncStorage.getItem('token')
    .then((token)=>{
      fetch('https://visionapu.herokuapp.com/curuser',{
    method:'get',
    headers:{'Accept':'application/json',
    'Authorization':'JWT '+token}
    })
    .then(response=>response.json())
    .then((response) =>
      {
        this.setState(
          {
            isLoading:false,
            UserDetails:response
          })
      })
    })
}

render()
  {
    return(
      <View style={styles.profile}>
        <AppHeader headerText={this.state.UserDetails.name}/>

                  
      {this.renderDataOrSpinner()}
      <Dashboard headerText={this.state.UserDetails.narrme}/>
      </View>
     
    )
  }}


export default Profile;

const styles={
  profile: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loading:{
    flexDirection: 'column',
    flex: 1,
    justifyContent:'flex-start',
    alignItems: 'center',
    zIndex: 1,
    backgroundColor: 'transparent'
  },
  loadingText:
  {
    flex: 3,
    justifyContent: 'flex-start',
    fontSize:20,
    fontWeight:'400'

  }
};

