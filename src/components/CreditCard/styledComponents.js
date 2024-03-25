import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`
export const CardContainer = styled.div`
  background-color: #3b4b69;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 50vh;
  @media screen and (min-width: 768px) {
    height: 80vh;
    width: 50%;
  }
`
export const Title = styled.h1`
  color: #ffffff;
  font-size: 30px;
  font-weight: bold;
  font-family: 'Roboto';
  border-bottom: 2px solid #ffd773;
  margin-bottom: 30px;
`
export const CardDetails = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  padding: 20px;
  border-radius: 15px;
  width: 90%;
  height: 50vh;
`
export const Number = styled.p`
  color: #ffffff;
  font-size: 30px;
  font-weight: bold;
  font-family: 'Roboto';
`
export const Describe = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: 300;
  font-family: 'Roboto';
`
export const Name = styled(Number)`
  font-size: 25px;
  align-self: flex-end;
`
export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  box-shadow: 0px 10px 10px 10px #c3cad9;
  max-width: 400px;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`
export const PaymentHeading = styled.h1`
  color: #344e7a;
  font-size: 25px;
`
export const Input = styled.input`
  width: 300px;
  height: 35px;
  border: 1px solid #344e7a;
  padding: 10px;
  margin: 20px;
`
