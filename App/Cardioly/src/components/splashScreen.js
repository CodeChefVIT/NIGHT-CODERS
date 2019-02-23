import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import {Button} from './reusables/Button';

import { Actions } from 'react-native-router-flux';


const state = {
    
}

export default class splashScreen extends Component {

    constructor()
    {
      super();
      
    this.state={delay: 2500};
    }

    componentDidMount(){
        setTimeout(()=>{
            AsyncStorage.getItem('token')
            .then((value)=>{
              if(value)
              {
                Actions.main();
              }
              else{
                  Actions.splashNew();
                  this.setState({delay: 50});
              }
              })
        },this.state.delay);
    }
      

        logIn(){
            Actions.login();
        }

                
                render()
                {
                    return (
                        <View style={styles.splashStyle}>
                             <Text style={styles.heading}>
                    Cardioly
                </Text>
                <View  style={styles.loginButton}>
                
        </View>
                        </View>
                    );
                }
            }

            const styles = {
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
                // loginButton: {
                //     padding: 5,
                //     marginVertical: 2,
                //     marginHorizontal: 15,
                //     backgroundColor: '#fff',
                //     justifyContent: 'center',
                //     flexDirection: 'row',
                //   },
            };
            