import React, { Component } from 'react';

import { StatusBar} from 'react-native';

import {login} from '../../providers/userProvider';


import {
  Container,
  Logo,
  Input,
  ErrorMessage,
  Button,
  ButtonText,
  SignUpLink,
  SignUpLinkText,
} from './styles';

export default class SignIn extends Component {


    static navigationOptions = {
        header: null,
      };

    state = { email: '', password: '', error: '' };

    handleEmailChange = (email) => {
        this.setState({ email });
      };
      
      handlePasswordChange = (password) => {
        this.setState({ password });
      };

      loginUser = async () => {
        const {email, password} = this.state;
        if (email !== '' && email !== undefined) {
          if (password !== '' && password !== undefined) {
            try {
              const user = await login(email, password); 
              this.setState({success:['Usuário logado com sucesso!']}, () => this.props.navigation.navigate('Main'))
            } catch(err) {
              this.setState({error:[err.message]})
            }
          }
        }
      };
      
      
      
  render() {
    return (
      <Container>
        <StatusBar hidden />
        <Logo source={require('../../images/yankton.png')} resizeMode="contain" />
        <Input
          placeholder="Endereço de e-mail"
          value={this.state.email}
          onChangeText={this.handleEmailChange}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          placeholder="Senha"
          value={this.state.password}
          onChangeText={this.handlePasswordChange}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />
        {this.state.error.length !== 0 && <ErrorMessage>{this.state.error}</ErrorMessage>}
        <Button>
          <ButtonText onPress={() => this.loginUser()}>Entrar</ButtonText>
        </Button>
        <SignUpLink>
          <SignUpLinkText onPress={()=>this.props.navigation.navigate('SignUp')}>Criar conta grátis</SignUpLinkText>
        </SignUpLink>
      </Container>
    );
  }

  componentDidMount(){
    this.setState({email: '', password: ''});
  }
  
}