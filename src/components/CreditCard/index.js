import {useState} from 'react'
import {
  AppContainer,
  CardContainer,
  Title,
  CardDetails,
  Number,
  Describe,
  Name,
  PaymentHeading,
  PaymentContainer,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const onChangeNumber = event => {
    setNumber(event.target.value)
  }
  const onChangeName = event => {
    setName(event.target.value)
  }
  return (
    <AppContainer>
      <CardContainer>
        <Title>CREDIT CARD</Title>
        <CardDetails data-testid="creditCard">
          <Number>{number}</Number>
          <Describe>CARDHOLDER NAME</Describe>
          <Name>{name}</Name>
        </CardDetails>
      </CardContainer>
      <PaymentContainer>
        <PaymentHeading>Payment Method</PaymentHeading>
        <Input
          type="text"
          placeholder="Card Number"
          onChange={onChangeNumber}
          value={number}
        />
        <Input
          type="text"
          placeholder="Cardholder Name"
          onChange={onChangeName}
          value={name}
        />
      </PaymentContainer>
    </AppContainer>
  )
}

export default CreditCard
