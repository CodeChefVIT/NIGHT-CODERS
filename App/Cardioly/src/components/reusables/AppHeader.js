// Import libraries for making a component
import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import {Actions} from 'react-native-router-flux';
import {AsyncStorage} from 'react-native';



// Make a component
const AppHeader = (props) => {


  onLogOut=()=>
  {
    //delete the token first and then navigate to login screen
    AsyncStorage.removeItem('token');
    Actions.auth();
  }

  return (
    <View style={styles.viewStyle}>
    <View style={styles.usericon}>
      <Image style={{}} source={require('.//../../../images/usericon.png')}/>
     </View>
     <View style={styles.usertext}>
          <Text style={styles.morning}>Good Morning!</Text>
      <Text style={styles.username}>{props.headerText}</Text>
      </View>
       <TouchableOpacity style={styles.logoutButton} onPress={this.onLogOut.bind(this)}>
            <Text>Logout</Text>
       </TouchableOpacity>
    </View>
  );
};

const styles = {
  viewStyle: {
      flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 60,
    // paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  usericon: {
      flex: 1,
      height: 60,
      width: 60,
      padding: 5,
  },
  usertext: {
      flex: 4,
  },
  morning: {
      fontSize: 18,
  },
  username: {
    fontSize: 25
  },
  logoutButton:{
    flex: 1,
  },
};

// Make the component available to other parts of the app
export { AppHeader };
