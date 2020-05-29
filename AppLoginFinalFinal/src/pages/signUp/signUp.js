import React, {Component} from 'react';

import {StatusBar} from 'react-native';

import {register} from '../../providers/userProvider';

import {
  Container,
  Logo,
  SuccessMessage,
  Input,
  ErrorMessage,
  Button,
  ButtonText,
  SignInLink,
  SignInLinkText,
} from './styles';

export default class SignUp extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    success: '',
  };

  handleEmailChange = (email) => {
    this.setState({email});
  };

  handlePasswordChange = (password) => {
    this.setState({password});
  };

  registerUser = async () => {
    const {email, password} = this.state;
    if (this.state.email.length === 0 || this.state.password.length === 0) {
      this.setState(
        {error: 'Preencha todos os campos para continuar'},
        () => false,
      );
    } else {
      {
        try {
          const user = await register(email, password);
          this.setState({success: ['Usuário cadastrado com sucesso!']}, () =>
            this.props.navigation.navigate('SignIn'),
          );
        } catch (err) {
          this.setState({
            error: [
              'Houve um problema com o cadastro, verifique os dados preenchidos',
            ],
          });
        }
      }
    }
  };

  render() {
    return (
      <Container>
        <StatusBar hidden />
        <Logo
          source={require('../../images/yankton.png')}
          resizeMode="contain"
        />
        {this.state.success.length !== 0 && (
          <SuccessMessage>{this.state.success}</SuccessMessage>
        )}

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
        {this.state.error.length !== 0 && (
          <ErrorMessage>{this.state.error}</ErrorMessage>
        )}
        <Button>
          <ButtonText onPress={() => this.registerUser()}>
            Criar conta
          </ButtonText>
        </Button>
        <SignInLink>
          <SignInLinkText
            onPress={() => this.props.navigation.navigate('SignIn')}>
            Voltar ao login
          </SignInLinkText>
        </SignInLink>
      </Container>
    );
  }
}
