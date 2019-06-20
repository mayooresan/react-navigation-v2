/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, TouchableOpacity, View} from 'react-native';
import {createSwitchNavigator, createAppContainer, createStackNavigator, createDrawerNavigator, createBottomTabNavigator} from 'react-navigation';
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import Icon from 'react-native-vector-icons/Ionicons';


const authStackNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  SignIn: SignInScreen,
  SignUp: SignUpScreen,
});

const appTapNavigator = createBottomTabNavigator({
  Home:{
    screen: HomeScreen,
  },
  Settings: {
    screen: SettingsScreen
  }

});

const appStackNavigator = createStackNavigator({
  AppTabNavigator: {
    screen: appTapNavigator,
    navigationOptions: ({navigation}) => ({
      title: 'Your App',
      headerLeft: (
        <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
          <View style={{paddingHorizontal: 10}}>
            <Icon size={24} name="md-menu" />
          </View>
          </TouchableOpacity>
      )
    })
  }
});

const AppDrawerNavigator = createDrawerNavigator({
  Home: appStackNavigator,
});

const rootStack = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: authStackNavigator,
  App: AppDrawerNavigator,
})

const App = createAppContainer(rootStack);

export default App;

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
