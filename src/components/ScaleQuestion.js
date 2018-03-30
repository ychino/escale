
// console.log(this.props.scale.ScaleItems)
      
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})

class ScaleQuestion extends Component {
  render(){
    return (
      <Swiper 
        ref="swiper"
        style={styles.wrapper} 
        showsButtons={false} 
        nextButton={<Text style={styles.buttonText}>next</Text>}
        prevButton={<Text style={styles.buttonText}>next</Text>}
        showsPagination={false}
        loop={false}
      >
        <View style={styles.slide1}> 
          <Text style={styles.text}>Hello Swiper</Text>
          <Text style={styles.text}>Hello Swiper</Text>
          <View style={{marginLeft: 100}}>
            <Button
                onPress={() => this.refs.swiper.scrollBy(1)}
                title="Next"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <Button
                onPress={() => this.refs.swiper.scrollBy(-1)}
                title="Back"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
          </View>
        </View>
        <View style={styles.slide1}>
          <Text style={styles.text}>Beautiful</Text>
          <Button
            onPress={() => this.refs.swiper.scrollBy(1)}
            title="Next"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
          <Button
            onPress={() => this.refs.swiper.scrollBy(-1)}
            title="Back"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <View style={styles.slide1}>
          <Text style={styles.text}>And simple</Text>
          <Button
            onPress={() => this.refs.swiper.scrollBy(1)}
            title="Next"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
          <Button
            onPress={() => this.refs.swiper.scrollBy(-1)}
            title="Back"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </Swiper>
    );
  }
}

export default ScaleQuestion;