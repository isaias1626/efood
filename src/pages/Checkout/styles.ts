import styled from 'styled-components'
import { color } from '../../styles'
import { ButtonContainer } from '../../components/Button/styles'

export const ImputGroup = styled.div`
  display: block;

  input {
    width: 100%;
    height: 32px;
    margin: 8px 0 8px;
    background-color: ${color.yellow};
    border: solid 1px ${color.yellow};
    padding: 0 8px;
    outline: none;

    &.error {
      border: 1px solid red;
      color: red;
    }
  }

  label {
    display: flex;
    width: 100%;
    font-size: 14px;
    font-weight: 700;
  }
`

export const Column = styled.div`
  padding-left: 8px;
  padding-right: 8px;
`
export const Row = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  justify-content: space-between;
`
export const InputGroupTwo = styled.div`
  input {
    width: 155px;
    height: 32px;
    margin: 8px 0 8px;
    background-color: ${color.yellow};
    border: solid 1px ${color.yellow};
    padding: 0 8px;
    outline: none;

    &.error {
      border: 1px solid red;
      color: red;
    }
  }

  label {
    display: block;
    font-size: 14px;
    font-weight: 700;
  }
`

export const Buttons = styled.div`
  margin-top: 24px;

  ${ButtonContainer} {
    background-color: ${color.yellow};
    color: ${color.orange};
    border: none;
    height: 24px;
    font-size: 14px;
    font-weight: 700;
    display: block;
    width: 100%;
    margin-bottom: 8px;
    cursor: pointer;
  }
`
export const ContainerText = styled.div`
  padding: 8px;
  font-size: 14px;
  font-weight: 400;

  P {
    margin-bottom: 24px;
  }
`

export const InputGroupCardNumber = styled.div`
  input {
    width: 228px;
    height: 32px;
    margin: 8px 0 8px;
    background-color: ${color.yellow};
    border: solid 1px ${color.yellow};
    padding: 0 8px;
    outline: none;

    &.error {
      border: 1px solid red;
      color: red;
    }
  }

  label {
    display: block;
    font-size: 14px;
    font-weight: 700;
  }
`
export const InputGroupCardCvv = styled.div`
  input {
    width: 87px;
    height: 32px;
    margin: 8px 0 8px;
    background-color: ${color.yellow};
    border: solid 1px ${color.yellow};
    padding: 0 8px;
    outline: none;

    &.error {
      border: 1px solid red;
      color: red;
    }
  }

  label {
    display: block;
    font-size: 14px;
    font-weight: 700;
  }
`
