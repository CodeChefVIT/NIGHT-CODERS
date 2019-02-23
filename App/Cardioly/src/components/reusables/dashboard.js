// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Dashboard = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
    <View style={styles.dashOptions}>
      <View style={styles.dashbox}>
        <Text>gfgfg</Text>
      </View>
      <View  style={styles.dashbox}>
      <Text>gfgfg</Text>
      </View>
      <View  style={styles.dashbox}>
      <Text>gfgfg</Text>
      </View>
      <View  style={styles.dashbox}>
      <Text>gfgfg</Text>
      </View>
      </View>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: 60,
    position: 'relative',
    borderWidth: 0.5
  },
  textStyle: {
    fontSize: 20
  },
  dashOptions: {
      flexDirection: 'row',
        justifyContent: 'center',
  },
  dashbox: {
    flex: 1,
    borderWidth: .7,
    borderColor: 'grey',
    backgroundColor: 'white',
    height: 60
  },
};

// Make the component available to other parts of the app
export { Dashboard };
