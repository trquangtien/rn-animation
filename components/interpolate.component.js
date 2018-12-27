import React from 'react';
import { View, Text, Animated } from 'react-native';

export default class Interpolate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorAnim: new Animated.Value(0)
    };
  }

  componentDidMount() {
    let purpleYellow = Animated.timing(this.state.colorAnim, { toValue: 1, duration: 1000 });
    let yellowPurple = Animated.timing(this.state.colorAnim, { toValue: 0, duration: 1000 });

    let animatedSequence = Animated.sequence([purpleYellow, yellowPurple]);
    Animated.loop(animatedSequence).start();
  }

  render() {
    let backgroundColor = this.state.colorAnim.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['green', 'pink', 'blue']
    });

    return (
      <Animated.View
        style={{
          width: 300,
          height: 70,
          backgroundColor
        }}>
        <Text>Interpolate Loop Component</Text>
      </Animated.View>
    );
  }
}
