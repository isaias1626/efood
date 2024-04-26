import styled from 'styled-components'

import Fundo from '../../Assets/image/fundo.png'
import { breakpoints, color } from '../../styles'

export const HeaderStyle = styled.header`
  background-image: url(${Fundo});
  height: 443px;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 56px;

  @media (max-width: ${breakpoints.tablet}) {
    height: 310px;
  }
`

export const LogoEfood = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding-top: 40px;
  margin-bottom: 65px;
  font-weight: 900;
  font-size: 18px;

  .link {
    list-style: none;
    text-decoration: none;
    color: ${color.orange};

    &:hover {
      opacity: 0.8;
    }

    @media (max-width: ${breakpoints.tablet}) {
      display: none;
    }
  }

  img {
    width: 125px;
  }

  span {
    font-size: 16px;
    margin-bottom: -4px;
    align-items: center;
    text-align: center;
    justify-content: center;
    display: flex;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 16px;

    span {
      font-size: 12px;
      margin-bottom: -4px;
      align-items: center;
      text-align: center;
      justify-content: center;
      display: flex;
    }

    img {
      width: 90px;
    }
  }
`
export const BackgroundCategories = styled.div`
  display: flex;
  position: relative;

  .header-categories-config {
    height: 280px;
    width: 100%;
    max-width: 100%;
    background-size: cover;
  }

  @media (max-width: ${breakpoints.tablet}) {
    .header-categories-config {
      height: 185px;
    }
  }
`
export const Texts = styled.div`
  display: block;

  p {
    font-size: 32px;
    color: ${color.white};
    line-height: 37px;
    font-weight: 100;
    margin-top: 25px;
    margin-bottom: 156px;
    opacity: 0.9;
  }

  h3 {
    font-size: 32px;
    color: ${color.white};
    line-height: 37px;
    font-weight: bold;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }

  @media (max-width: ${breakpoints.tablet}) {
    p {
      font-size: 12px;
      margin-bottom: 110px;
      margin-top: 12px;
      opacity: 0.9;
    }

    h3 {
      line-height: 24px;
      font-size: 18px;
    }
  }
`
export const CartButton = styled.ul`
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`

export const Cart = styled.li`
  display: block;

  img {
    width: 32px;
    height: 32px;
    color: ${color.orange};
  }
`
export const Hamburguer = styled.div`
  cursor: pointer;
  display: flex;

  &:hover {
    opacity: 0.8;
  }

  img {
    width: 32px;
    height: 32px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`
export const HeaderRow = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 230px;
  background-color: ${color.orange};
  z-index: 1;
  color: ${color.yellow};
  padding: 24px 16px;
  margin-top: -40px;
  transform-origin: top center;
  animation: scaleOpen 0.5s ease forwards;
  opacity: 0;

  @keyframes scaleOpen {
    0% {
      transform: scaleY(0);
      opacity: 0;
    }
    100% {
      transform: scaleY(1);
      opacity: 1;
    }
  }

  .link {
    list-style: none;
    text-decoration: none;
    color: ${color.yellow};
    font-size: 16px;
  }

  h3 {
    margin-bottom: 8px;
  }

  ul {
    margin-left: 8px;
  }

  li {
    margin-bottom: 8px;
    font-size: 16px;
    cursor: pointer;
    font-weight: 300;

    &:hover {
      transition: all ease-in-out 0.4s;
      color: ${color.lightYellow};
      margin-left: 6px;
      font-size: 18px;
      font-weight: 400;
    }
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`
export const NavMobile = styled.div`
  display: none;

  &.is-open {
    display: block;
  }
`
