/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component,} from 'react';

import { StackNavigator } from 'react-navigation';
import CameraTest from './components/CameraTest.js';
import Prizes from './components/prizes';
import Clues from './components/clues';
import Vendor from './components/vendor';
import Redeem from './components/redeemPrize';


import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

class HomeScreen extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Dave is probably drunk
        </Text>
        {/* <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text> */}
        <TouchableOpacity style={styles.instructions} onPress={()=> this.props.navigation.navigate('Camera')}>
          <Text style={styles.instructions}>Open the camera</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.instructions} onPress={()=> this.props.navigation.navigate('Prizes')}>
          <Text style={styles.instructions}>Open Prizes page</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.instructions} onPress={()=> this.props.navigation.navigate('Clues')}>
          <Text style={styles.instructions}>Open Clues page</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.instructions} onPress={()=> this.props.navigation.navigate('Vendor')}>
          <Text style={styles.instructions}>Open Vendors page</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


export default hackTester = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
          header:null
      }
  },
  Camera: {
    screen: CameraTest,
    navigationOptions: {
          header:null
      }
  },
  Prizes: {
    screen: Prizes,
    navigationOptions: {
          header:null
      }
  },
  Clues: {
    screen: Clues,
    navigationOptions: {
          header:null
      }
  },
  Vendor: {
    screen: Vendor,
    navigationOptions: {
          header:null
      }
  },
  Redeem: {
    screen: Redeem,
    navigationOptions: {
          header:null
      }
  },
}, {headerMode:'screen', initialRouteName: 'Home'});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('hackTester', () => hackTester);
