import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {mobil} from '../resposive'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'

const Container =  styled.div`
    height: 60px;
    ${mobil({height:"50px"})}
    `

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobil({ padding:"10px 0px"})}
  `

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center ;
`

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobil({ display:"none"})}
`

const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  display: flex;
  align-items: center;  
  margin-left: 25px;
  padding: 5px;
`

const Input = styled.input`
  border: none;
  ${mobil({ width:"50px"})}
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`

const Logo = styled.h1`
 font-weight: bold;
  ${mobil({fontSize:"24px"})}
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;  
  justify-content: flex-end;
  ${mobil({ flex:2, justifyContent:"center"})}
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobil({ fontSize:"12px", marginLeft:"10px"})}
`

const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity)


  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='Search'/>
            <Search/>
          </SearchContainer>

        </Left>
        <Link to="/">
        <Center>
          <Logo>LOGO</Logo>
        </Center>
        </Link>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <Link to="/cart">
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined/>
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar