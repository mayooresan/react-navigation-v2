import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native'

class SignUpScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text> Singup </Text>
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

export default SignUpScreen;