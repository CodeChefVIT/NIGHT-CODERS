// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Make a component
const PinkBoxTop = (props) => {
  var risk = 90.33;
  var riskColor = '#8bef0c';
  const { textStyle, viewStyle, hwb,hwbContenth, hwbContentwb, rl } = styles;

  if(props.riskLevel==='Mid'){
  risk = 170.66;
  riskColor = 'yellow';
}

  if(props.riskLevel==='High'){
  risk = 290;
  riskColor = 'red';
}
  
  return (
    <LinearGradient 
    start={{x: 1.0, y: 0.1}} end={{x: 0.1, y: 1.0}}
  locations={[0.5,1]}
    colors={['#ef0c70', '#cf05ef']} 
    style={viewStyle}>
      <View style={hwb}>
          <View style={hwbContenth}>
            <Text style={{flex:1, fontSize: 15, color:'white'}}>Height</Text>
                <Text style={{flex: 2, fontSize: 25, color:'white'}}>{props.userHeight} cm</Text>
          </View>
          <View  style={hwbContentwb}>
          <Text style={{flex:1, fontSize: 15, color:'white'}}>Weight</Text>
          <Text style={{flex: 2, fontSize: 25, color:'white'}}>{props.userWeight} kg</Text>
          </View>
          <View style={hwbContentwb}>
          <Text style={{flex:1, fontSize: 15, color:'white'}}>BMI</Text>
          <Text style={{flex: 2, fontSize: 25, color:'white'}}>{props.userBmi} </Text>
          </View>
      </View>
      <View style={rl}>
        <Text style={{color: 'white', fontSize: 15}}>Risk Level: {props.riskLevel}</Text>
        <View style={{marginTop: 5, borderRadius: 10, height: 14, backgroundColor: 'white'}}>
          <View style={{margin: 2,  borderRadius: 10, height: 10, backgroundColor: riskColor, width: risk}}></View>
        </View>
      </View>

    </LinearGradient>
  );
};

const styles = {
  viewStyle: {
    //  backgroundColor: 'pink',
    flex: 1,
    justifyContent: 'flex-start',
    height: 200,
    elevation: 5,
    borderWidth: .2,
    borderColor: '#ddd',
    shadowColor: '#000',
  shadowOffset: {width: 1, height: 1},
  shadowOpacity: 0.8,
  shadowRadius: 2,
  },
  textStyle: {
    fontSize: 20
  },
  hwb: {
    flexDirection: 'row',
    marginTop: 40,
    marginHorizontal: 20,
    borderTopWidth: 1.5,
    borderBottomWidth: 1.5,
    borderColor: '#efe9ef',
    justifyContent: 'center',
    height: 100
  },
  hwbContenth: {
    flex: 1,
    flexDirection: 'column',
    marginVertical: 10,
    alignItems: 'center'
  },
  hwbContentwb: {
    flex: 1,
    flexDirection: 'column',
    borderLeftWidth: 0.5,
    marginVertical: 10,
    borderColor: '#efe9ef',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rl: {
    flexDirection: 'column',
    marginTop: 5,
    marginHorizontal: 30,

    justifyContent: 'center',
  },
};

// Make the component available to other parts of the app
export { PinkBoxTop };
