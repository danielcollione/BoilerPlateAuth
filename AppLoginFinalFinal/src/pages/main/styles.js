import styled from 'styled-components';


const Container = styled.View`
  flex: 1;
  alignItems: center;
  justifyContent: center;
  backgroundColor: #F5F5F5;
`;


const Logo = styled.Image`
  height: 30%;
  marginBottom: 40px;
`;


const MainText = styled.Text`
  color: #999;
  fontWeight: bold;
  fontSize: 16px;
  textAlign: center;
`;


export { Container, Logo, MainText};