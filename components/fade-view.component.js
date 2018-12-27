import React from 'react';
import { Animated, Text } from 'react-native';

export default class FadeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0)
    };
  }

  componentDidMount() {
    Animated.timing(this.state.fadeAnim, { toValue: 1, duration: 5000 }).start();
  }

  render() {
    const opacity = this.state.fadeAnim;

    return (
      <Animated.View
        style={{
          width: 300,
          height: 200,
          backgroundColor: 'green',
          opacity
        }}>
        <Text>Fade View Component</Text>
      </Animated.View>
    );
  }
}
