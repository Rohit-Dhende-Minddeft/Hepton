import React, { useEffect, useState } from 'react'
import Gs from '../theme/globalStyles' 
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom' 
import { withRouter } from 'react-router' 

import Media from '../theme/media-breackpoint' 

import Logo from '../assets/images/logo.svg'
import Menu from '../assets/images/menu.svg'
import TeleICO from '../assets/images/telegram.svg'
import TwitICO from '../assets/images/twitter.svg'
import GitICO from '../assets/images/github.svg'


function Header(props) { 
  const [isOpen, setIsOpen] = useState(false) 
  
  useEffect(() => { 
  }, []); 
  
  return (
 
    <MheadBX> 
          <LogoM> <img  src={Logo}  alt='Hepton' /> </LogoM> 
          <Link to='' className='MenuICO'><img src={Menu} alt='menu' /> </Link> 
          <HeadLinkBX>
          <Link to=''><img src={TeleICO} alt='menu' /></Link>
          <Link to=''><img src={TwitICO} alt='menu' /></Link>
          <Link to=''><img src={GitICO} alt='menu' /></Link>
          </HeadLinkBX>
    </MheadBX>

  )

}
const FlexDiv = styled.div`
  display: flex; align-items: center; justify-content:center; flex-wrap:wrap;
`;
 
const MheadBX = styled(FlexDiv)`
  width:100%;  padding:30px 0; max-width:1200px; margin:0 auto;
  @media screen and (max-width: 768px) {
    padding: 24px;
  }

  .MenuICO{ margin:0 auto; display:inline-block; position: absolute;  left: 50%;  transform: translateX(-50%);
    @media screen and (max-width: 768px) {
      position: static; margin: 0; transform: translateX(0);
    }
  }
`

const LogoM = styled(FlexDiv)`
  margin:0 auto 0 0; justify-content:space-between; 
`
const HeadLinkBX = styled(FlexDiv)` 
    a{ display: inline-block; margin-left:14px; :hover{opacity:0.8}}
    @media screen and (max-width: 768px) {display: none;}
`

export default Header;
