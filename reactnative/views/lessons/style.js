/**
 * Created by ashen on 17/3/10.
 */
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export  default  class LotsOfStyles extends Component {
  render() {
    return (
      <View style={styles.body}>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigblue}>just bigblue</Text>
        <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    body:{
        width:300,
        height:300,
        backgroundColor:'yellow'
    },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
