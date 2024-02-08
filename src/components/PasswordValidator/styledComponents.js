// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #24263c;
  min-height: 100vh;
`

export const PasswordValidateContainer = styled.div`
  width: 64%;
  height: 33vh;
  min-width: 325px;
  padding: 20px;
  background-color: #383a4e;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 1px #434451;
  @media screen and (min-width: 768px) {
    width: 50%;
    height: 42vh;
    min-width: 520px;
    max-width: 600px;
  }
`
export const Heading = styled.h1`
  font-size: 24px;
  color: #ffffff;
  font-weight: 500;
  font-family: 'Roboto';
  margin: 0;
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`

export const Paragraph = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #f8fafc;
  font-weight: 300;
  width: 80%;
  margin-top: 12px;
  margin-bottom: 16px;
  line-height: 1.33;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    width: 100%;
    margin-top: 24px;
    margin-bottom: 28px;
  }
`

export const InputContainer = styled.input`
  color: #475569;
  background-color: #edeeff;
  font-size: 14px;
  height: 43px;
  border: 1px solid #24263c;
  border-radius: 2px;
  margin-top: 16px;
  padding: 8px 16px;
  min-width: 280px;
  outline: none;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    height: 47px;
    margin-top: 28px;
    min-width: 383px;
  }
`

export const ErrorText = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #ef4444;
  margin-top: 8px;
  line-height: 1.2;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
