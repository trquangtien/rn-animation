import React from 'react';
import { Animated, Text } from 'react-native';

export default class Left2RightView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { slideAnim: new Animated.Value(-1000) };
  }

  componentDidMount() {
    Animated.timing(this.state.slideAnim, { toValue: 0, duration: 2000 }).start();
  }

  render() {
    const marginLeft = this.state.slideAnim;
    return (
      <Animated.View
        style={{
          width: 300,
          height: 200,
          backgroundColor: 'pink',
          marginLeft
        }}>
        <Text>Slide View Component</Text>
      </Animated.View>
    );
  }
}
