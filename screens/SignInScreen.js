import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';

class SignInScreen extends Component {




  signIn = async() => {
    await AsyncStorage.setItem('userToken', 'jay');
    this.props.navigation.navigate('App');
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Sign In" onPress={this.signIn}/>
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

export default SignInScreen;