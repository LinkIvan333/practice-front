import styled from "styled-components";
import logo from "img/logo.png";

import search from 'img/search.png';
import favorite from 'img/heart-o.png'
import cart from 'img/cart.png'
import user from 'img/user.png'
import bell from 'img/bell.png'
import {Link} from "react-router-dom";

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
`;

export const InputWrapper = styled.div`
  width: 16rem;
  height: 2rem;
  background: none;
  border: 1px white solid;
  border-radius: 5px;
  color : #767676;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const Search = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background: url("${search}") no-repeat center / contain;
  border: none;
  
  
`;

export const BelowNavigationItem = styled(Link)`
  color: white;
  margin: 0 2rem;

  position: relative;

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

