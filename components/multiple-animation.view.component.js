import React from 'react';
import { Animated, View, Text } from 'react-native';

export default class MultipleAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideAnim1: new Animated.Value(-1000),
      slideAnim2: new Animated.Value(-1000)
    };
  }

  componentDidMount() {
    const anim1 = Animated.timing(this.state.slideAnim1, { toValue: 0, duration: 1000 });
    const anim2 = Animated.timing(this.state.slideAnim2, { toValue: 0, duration: 1000 });

    // Animated.sequence([anim1, anim2]).start(); // sequence
    // Animated.parallel([anim1, anim2]).start(); // parallel
    Animated.stagger(200, [anim1, anim2]).start(); // parallel and delay for each animation by time
  }

  render() {
    const marginLeft1 = this.state.slideAnim1;
    const marginLeft2 = this.state.slideAnim2;

    return (
      <View>
        <Animated.View
          style={{
            width: 300,
            height: 100,
            backgroundColor: 'blue',
            marginLeft: marginLeft1
          }}>
          <Text>Component 1</Text>
        </Animated.View>

        <Animated.View
          style={{
            width: 300,
            height: 100,
            backgroundColor: 'red',
            marginLeft: marginLeft2
          }}>
          <Text>Component 2</Text>
        </Animated.View>
      </View>
    );
  }
}
