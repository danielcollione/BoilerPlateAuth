import React from 'react';
import {StatusBar} from 'react-native';

import {
  Container, 
  Logo,
  MainText
} from './styles';

const Main = () => (
  
  <Container>
    <StatusBar hidden />
        <Logo
          source={require('../../images/yankton.png')}
          resizeMode="contain"
        />
        <MainText>
          Seja Bem-Vindo!
        </MainText>
        
  </Container>
);

export default Main;
