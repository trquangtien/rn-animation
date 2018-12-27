import React from 'react';
import { Animated, View, Text } from 'react-native';

export default class ReuseComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transform: new Animated.Value(0)
    };
  }

  componentDidMount() {
    const rotateAnim1 = Animated.timing(this.state.transform, { toValue: 1, duration: 1000 });
    const rotateAnim2 = Animated.timing(this.state.transform, { toValue: 0, duration: 1000 });

    const sequenceRotate = Animated.sequence([rotateAnim1, rotateAnim2]);
    Animated.loop(sequenceRotate).start();
  }

  render() {
    let rotate = this.state.transform.interpolate({
      inputRange: [0, 1],
      outputRange: ['-15deg', '15deg']
    });

    return (
      <Animated.View
        style={{
          width: 300,
          height: 70,
          backgroundColor: 'purple',
          transform: [{ rotate }],
          ...this.props.style
        }}>
        {this.props.children}
      </Animated.View>
    );
  }
}
