import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>

      <Menu>
        {
          cars && cars.map((car,index)=>( <a key={index} href="#">{car}</a>))
        }
        
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>

      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        {
          cars && cars.map((car,index)=>( <li><a key={index} href="#">{car}</a></li>))
        }
        <li>
          <a>Existing Inventory</a>
        </li>
        <li>
          <a>Cyber Truck</a>
        </li>
        <li>
          <a>Roadster</a>
        </li>
        <li>
          <a>Used Inventory</a>
        </li>
        <li>
          <a>Trade In</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
const BurgerNav = styled.div`
  position: fixed;
  background: white;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 16;
  width: 300px;
  display: flex;
  padding: 20px;
  flex-direction: column;
  list-style: none;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition:transform 0.2s ease-in;

  li {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding: 15px 0;

    a {
      font-weight: 600;
    }
  }
`;
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const Container = styled.div`
  justify-content: space-between;
  position: fixed;
  min-height: 60px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;
