import styled, { css } from 'styled-components'
import { fadeIn } from '../styles/animation'

export const Loader = styled.div`
  display: flex;
  justify-content:center;
  align-center:center;
  width: 75px;
  height: 75px;
  text-align:center;
  &::after {
    content: ' ';
    text-align:center;
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #DE530D;
    border-color: #DE530D transparent #DE530D transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  margin-top: 10px;
  ${props => props.fixed && css`
  {
  ${fadeIn()}
    background: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    left: 0;
    margin: 0 auto;
    max-width: 400px;
    padding: 5px;
    position: fixed;
    right: 0;
    top: -20px;
    transform: scale(.5);
    z-index: 1;
  }
  `}
`

export const Item = styled.li`
  padding: 0 8px;
`
