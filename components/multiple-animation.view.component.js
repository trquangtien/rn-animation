import React from 'react';
import { Animated, View, Text } from 'react-native';

export default class MultipleAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideAnim1: new Animated.Value(-1000),
      fadeAnim: new Animated.Value(0),
      slideAnim2: new Animated.Value(-1000)
    };
  }

  componentDidMount() {
    let slideAnim1 = Animated.timing(this.state.slideAnim1, { toValue: 0, duration: 1000 });
    let slideAnim2 = Animated.timing(this.state.slideAnim2, { toValue: 0, duration: 1000 });

    let fadeAnim = Animated.timing(this.state.fadeAnim, { toValue: 1, duration: 2500 });

    // Animated.sequence([slideAnim1, slideAnim2]).start(); // sequence
    // Animated.parallel([slideAnim1, slideAnim2]).start(); // parallel

    let staggerAnimation = Animated.stagger(200, [slideAnim1, slideAnim2]); // parallel and delay for each animation by time
    Animated.parallel([staggerAnimation, fadeAnim]).start();
  }

  render() {
    let marginLeft1 = this.state.slideAnim1;
    let marginLeft2 = this.state.slideAnim2;

    let opacity = this.state.fadeAnim;

    return (
      <View>
        <Animated.View
          style={{
            width: 300,
            height: 70,
            backgroundColor: 'blue',
            marginLeft: marginLeft1,
            opacity
          }}>
          <Text>Component 1</Text>
        </Animated.View>

        <Animated.View
          style={{
            width: 300,
            height: 70,
            backgroundColor: 'red',
            marginLeft: marginLeft2,
            opacity
          }}>
          <Text>Component 2</Text>
        </Animated.View>
      </View>
    );
  }
}
