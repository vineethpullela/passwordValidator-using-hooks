import {useState} from 'react'

import {
  MainContainer,
  PasswordValidateContainer,
  Heading,
  Paragraph,
  InputContainer,
  ErrorText,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const showMsg = password.length < 8

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  return (
    <MainContainer>
      <PasswordValidateContainer>
        <Heading>Password Validator</Heading>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <InputContainer
          type="password"
          value={password}
          onChange={onChangePassword}
        />
        {showMsg && (
          <ErrorText>Your password must be at least 8 characters</ErrorText>
        )}
      </PasswordValidateContainer>
    </MainContainer>
  )
}

export default PasswordValidator
