import React, { useEffect, useState } from 'react'
import Gs from '../theme/globalStyles' 
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom' 
import { withRouter } from 'react-router' 

import Media from '../theme/media-breackpoint' 

import Logo from '../assets/images/logo.svg'
import menuIcon from '../assets/images/menuIcon.png'
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
		<Nav>
			<Link to="/">Launchpad</Link>
			<Link to="/">Airdrop</Link>
		</Nav>
		<Button>Connect</Button>
		<Menu><img src={menuIcon} /></Menu>

    </MheadBX>
	)
}
const FlexDiv = styled.div`
	display: flex; align-items: center; justify-content:center;
`;
const MheadBX = styled(FlexDiv)`
	width:100%;  padding:30px 0; max-width:1200px; margin:0 auto;
	@media screen and (max-width: 1200px) {
		padding: 24px;
	}
`
const Menu = styled.div `
	display: none;
	img {width: 18px;}
	@media screen and (max-width: 768px) {
		display: block;
	}
`
const LogoM = styled(FlexDiv)`
	margin:0 68px 0 0; justify-content:space-between; 
	@media screen and (max-width: 768px) {
		margin:0 0 0 0;
		img {width: 100px}
	}
`
const Nav = styled.div `
	display: flex; margin-right: auto;
	a {font-weight: 400; font-size: 16px; color: #fff; margin-right: 30px;}
	@media screen and (max-width: 768px) {
		display: none;
	}
`
const Button = styled.button `
	background: #FFFFFF; height: 45px; width: 138px; font-size: 18px; border: 0;
	@media screen and (max-width: 768px) {
		margin: 0 30px 0 auto; height: 38px; width: 110px; font-size: 16px;
	}
`
export default Header;
