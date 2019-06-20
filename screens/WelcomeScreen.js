import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';

class WelcomeScreen extends Component {
  constructor() {
    super()
    this.loadApp();
  }

  loadApp = async() => {
    const userToken = await AsyncStorage.getItem('userToken');
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Sign in" onPress={()=> this.props.navigation.navigate('SignIn')}/>
        <Button title="Sign up" onPress={()=> this.props.navigation.navigate('SignUp')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent:'center'
  }
})

export default WelcomeScreen;