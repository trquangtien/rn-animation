import React from 'react';
import { View, Text } from 'react-native';
import FadeView from './fade-view.component';
import Left2RightView from './left2right-view.component';
import MultipleAnimation from './multiple-animation.view.component';
import Interpolate from './interpolate.component';
import Transform from './transform.component';
import ReuseComponent from './reuse.component';

export default class Animation extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'lightblue'
        }}>
        <FadeView />
        <Left2RightView />
        <MultipleAnimation />
        <Interpolate />
        <Transform />

        {/* Reuse component */}
        <ReuseComponent style={{ width: 200, justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow' }}>
          <Text>Reuse Component</Text>
        </ReuseComponent>
      </View>
    );
  }
}
