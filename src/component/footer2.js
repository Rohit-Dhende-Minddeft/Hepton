import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Media from './../theme/media-breackpoint' 
import Gs from '../theme/globalStyles' 
import Logo from '../assets/images/logo.svg'
import blob from '../assets/images/footer-blob.png'
import discord from '../assets/images/discord.png'
import discordIco from '../assets/images/discord.svg'
import joinus from '../assets/images/joinus.png'
import circle from '../assets/images/circle.jpg'

const Footer = () => { 

    return (
        <FooterMain>
            <Container>
                <FooterBottom>
                    <div className='col-01'>
                        <img className='logo' src={Logo} />
                        <p>Hepton POS is a next-gen Ethereum-L2 to increase eth-mainnet capacity with fast and energy-efficient.</p>
                        <span>Copyright © Hepton 2022</span>
                    </div>
                    <div className='col-02'>
                        <h5>General</h5>
                        <Link>Home</Link>
                        <Link>Blog</Link>
                        <Link>Careers</Link>
                    </div>
                    <div className='col-02'>
                        <h5>General</h5>
                        <Link>Litepaper</Link>
                        <Link>FAQ</Link>
                        <Link>Docs</Link>
                        <Link>Block Explorer</Link>
                        <Link>Testnet Faucet</Link>
                    </div>
                    <div className='col-02'>
                        <h5>Social</h5>
                        <Link>Twitter</Link>
                        <Link>Telegram</Link>
                        <Link>Forum</Link>
                        <Link>Github</Link>
                    </div>
                    <div className='col-01 mob'>
                        <span>Copyright © Hepton 2022</span>
                    </div>
                </FooterBottom>
            </Container>
        </FooterMain>
    )
}

const FlexDiv = styled.div`
    display: flex; align-items: center; justify-content:center; flex-wrap:wrap;
`;
const FooterMain = styled.footer`
    overflow: hidden; background:#101010;
`
const Container = styled.div`
    width: 100%; max-width:1200px; margin:0 auto 0 auto; 
    @media screen and (max-width:1024px) {
        padding: 0 25px;
    }
`
const FooterBottom = styled.div`
    display: flex; padding: 51px 0 51px; position: relative;
    .col-01 { display: flex; flex-flow: column; align-items: flex-start; flex-grow: 1; max-width: 500px; margin-right: auto;
        .logo {margin: 0 0 43px}
        p {font-size: 16px;  line-height: 24px; margin: 0 0 44px; color: #9E9E9E;}
        span {display: block; font-size: 16px; color: #9E9E9E;}
        &.mob {display: none;}
    }
    .col-02 { display: flex; flex-flow: column; align-items: flex-start; margin-left: 12%; max-width: 15%; 
        h5 {font-size: 16px; font-weight: 700; margin: 0 0 20px}
        a {font-size: 16px; font-weight: 500; color: #9E9E9E; opacity: 0.6; margin-bottom: 12px; &:hover {color: #ffffff;}}
    }
    @media screen and (max-width: 768px) {
        flex-flow:  wrap;
        padding: 25px 0 50px;
        .col-01 { width: 100%; 
            .logo {margin: 0 0 30px}
            p {font-size: 16px;}
            span {display: none;}
            &.mob {display: block; margin-top: 10px; span {display: block;}}
        }
        .col-02 {margin-left: 0; width: 50%; max-width: inherit; margin-bottom: 30px;}
        &:after {right: -25px; left: -25px; bottom: -80px;}
    }
`


export default Footer