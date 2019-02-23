import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from './reusables/Button';

export default class splashScreenNew extends Component {
    render() {
        return (
            <View style={styles.splashStyle}>
                <Text style={styles.heading}>
                    Cardioly
        </Text>
                <View style={styles.startButton}>
                    <Button onPress={Actions.login.bind(this)} >
                        GET STARTED
        </Button>
                </View>
            </View>
        )
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
    heading: {
        color: '#bc05d3',
        fontSize: 40,
    },
    startButton: {
        padding: 5,
        marginTop: 4,
        marginHorizontal: 15,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItem: 'flex-end'
      },
}