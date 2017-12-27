/**
 * Created by ashen on 17/3/14.
 */
import React, { Component } from 'react';
import{ AppRegistry, ScrollView, Image, Text, View } from 'react-native'

export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  render() {
      return(
        <ScrollView>
          <Text style={{fontSize:40}}>Scroll me plz</Text>
          <Image source={require('../../images/157.jpg')} />
          <Image source={require('../../images/157.jpg')} />
          <Image source={require('../../images/157.jpg')} />
          <Image source={require('../../images/157.jpg')} />
          <Image source={require('../../images/157.jpg')} />
          <Text style={{fontSize:40}}>If you like</Text>
          <Image source={require('../../images/157.jpg')} />
          <Image source={require('../../images/157.jpg')} />
          <Image source={require('../../images/157.jpg')} />
          <Image source={require('../../images/157.jpg')} />
          <Image source={require('../../images/157.jpg')} />
          <Text style={{fontSize:40}}>Scrolling down</Text>
          <Image source={require('../../images/157.jpg')} />
          <Image source={require('../../images/157.jpg')} />
          <Image source={require('../../images/157.jpg')} />
          <Image source={require('../../images/157.jpg')} />
          <Image source={require('../../images/157.jpg')} />
          <Text style={{fontSize:40}}>What's the best</Text>
          <Image source={require('../../images/157.jpg')} />
          <Image source={require('../../images/157.jpg')} />
          <Image source={require('../../images/157.jpg')} />
          <Image source={require('../../images/157.jpg')} />
          <Image source={require('../../images/157.jpg')} />
          <Text style={{fontSize:40}}>Framework around?</Text>
          <Image source={require('../../images/157.jpg')} />
          <Image source={require('../../images/157.jpg')} />
          <Image source={require('../../images/157.jpg')} />
          <Image source={require('../../images/157.jpg')} />
          <Image source={require('../../images/157.jpg')} />
          <Text style={{fontSize:40}}>React Native</Text>
        </ScrollView>
    );
  }
}
