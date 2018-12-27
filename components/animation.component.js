import React from 'react';
import { Text, ImageBackground, Dimensions } from 'react-native';
import FadeView from './fade-view.component';
import Left2RightView from './left2right-view.component';
import MultipleAnimation from './multiple-animation.view.component';
import Interpolate from './interpolate.component';
import Transform from './transform.component';
import ReuseComponent from './reuse.component';

const { width, height } = Dimensions.get('window');
import backgroundImage from './../assets/gradient.jpg';

export default class Animation extends React.Component {
  render() {
    return (
      <ImageBackground
        source={backgroundImage}
        style={{
          width,
          height,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <FadeView />
        <Left2RightView />
        <MultipleAnimation />
        <Interpolate />
        <Transform />

        <ReuseComponent style={{ width: 200, justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow' }}>
          <Text>Reuse Component</Text>
        </ReuseComponent>
      </ImageBackground>
    );
  }
}
