import React from 'react';
import { Animated, Text, Easing } from 'react-native';

export default class Left2RightView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { slideAnim: new Animated.Value(-1000) };
  }

  componentDidMount() {
    // timing
    // Animated.timing(this.state.slideAnim, { toValue: 0, duration: 2500 }).start();
    // Animated.timing(this.state.slideAnim, { toValue: 0, duration: 2500, easing: Easing.bounce }).start();

    // spring
    Animated.spring(this.state.slideAnim, { toValue: 0 }).start();
  }

  render() {
    const marginLeft = this.state.slideAnim;
    return (
      <Animated.View
        style={{
          width: 300,
          height: 100,
          backgroundColor: 'pink',
          marginLeft
        }}>
        <Text>Slide View Component</Text>
      </Animated.View>
    );
  }
}
