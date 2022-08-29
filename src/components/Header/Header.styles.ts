import styled, {css} from "styled-components";
import logo from "img/logo.png";
import menu from "img/menu.png";


import search from 'img/search.png';
import favorite from 'img/heart-o.png'
import cart from 'img/cart.png'
import user from 'img/user.png'
import bell from 'img/bell.png'
import {Link} from "react-router-dom";
import {DEVICE, SIZES} from "styles/sizes";

export const StyledHeader = styled.div`
  width: 100%;
  height: 135px;
  color : #767676;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

export const UpperBlock = styled.div`
  width: 100%;
  height: 60%;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #212121;
`;

export const BelowBlock = styled.div`
  width: 100%;
  height: 40%;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #ee161f;
`;

export const Logo = styled.div`
  width: 4rem;
  height: 4rem;
  background: url("${logo}") no-repeat center / contain;

  @media ${DEVICE.tablet} {
    width: 2rem;
    height: 2rem;
    background: url("${menu}") no-repeat center / contain;
    margin-right:2rem;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  max-width: 27rem;
  height: 2rem;
  background: none;
  border: 1px white solid;
  border-radius: 5px;
  color : #767676;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${DEVICE.laptop} {
    display: none;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 2rem;
  background: none;
  border: none;
  outline: none;
  color : #767676;
`;

export const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 35%;
  padding: 0 1rem;

  @media ${DEVICE.tablet} {
    display: none;
  }


  @media ${DEVICE.laptop} {
    width: 45%;
  }
`

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 20%;

  @media ${DEVICE.tablet} {
    max-width: 50%;
  }
`

export const Favorite = styled.button`
  width: 2rem;
  height: 2rem;
  background: url("${favorite}") no-repeat center / contain;
  border: none;
  margin: 0 0.2rem;

  transition: transform 300ms ease-in-out;

  &:hover{
    transform: translateY(20%) scale(1.2);
  }
`;

export const Notification = styled.button`
  width: 2rem;
  height: 2rem;
  background: url("${bell}") no-repeat center / contain;
  border: none;
  margin: 0 0.2rem;

  transition: transform 300ms ease-in-out;

  &:hover{
    transform: translateY(20%) scale(1.2);
  }
`;

export const Profile = styled.button`
  width: 2rem;
  height: 2rem;
  background: url("${user}") no-repeat center / contain;
  border: none;
  margin: 0 0.2rem;

  transition: transform 300ms ease-in-out;

  &:hover{
    transform: translateY(20%) scale(1.2);
  }
`;

export const Cart = styled.button`
  width: 2rem;
  height: 2rem;
  background: url("${cart}") no-repeat center / contain;
  border: none;
  margin: 0 0.2rem;

  transition: transform 300ms ease-in-out;

  &:hover{
    transform: translateY(20%) scale(1.2);
  }
`;

export const SearchIcon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background: url("${search}") no-repeat center / contain;

  @media (min-width: ${SIZES.laptop}) {
    display: none;
  }
`;

export const Search = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background: url("${search}") no-repeat center / contain;
`;

export const CatalogWrapper = styled.div<{show: boolean}>`
  position: absolute;
  width: 80vw;
  height: 700px;
  padding: 2rem;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  pointer-events: none;
  

  ${({show = false})=>show &&  css`
    opacity: 1;
    pointer-events: visible;
  `}
`

export const CatalogLinkWrapper = styled.div`
  position: relative;
  display: inline;
`

export const BelowNavigationItem = styled(Link)`
  color: white;
  position: relative;
  text-decoration: none;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    display: block;
    height: 2px;
    width: 0;
    background: #fff;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
  }

  &:hover::after {
    width: 100%;
    left: 0;
  }
`

