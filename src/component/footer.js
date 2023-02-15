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
            <FooterTop>
            <Container className='wow fadeInUp' data-wow-delay='0.2s'>
                <h3>JOIN OUR COMMUNITY</h3>
                <p>Follow our news and always be the first to know all the updates</p>
                <a className='btn'>
                    <img className='img1' src={discordIco} />
                    <div>
                        <img className='img2' src={joinus} />
                        <img className='img3' src={discord} />
                    </div>
                </a>
                </Container>
            </FooterTop>
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
    overflow: hidden; 
`
const Container = styled.div`
    width: 100%; max-width:1200px; margin:0 auto 0 auto; 
    @media screen and (max-width:1024px) {
        padding: 0 25px;
    }
`
const FooterTop = styled.div`
    text-align: center; position: relative; padding: 200px 0 0;
    h3 {font-size: 80px; font-weight: 700; text-transform: uppercase; margin: 0 0 20px;}
    p {margin: 0; font-size: 24px; font-weight: 500; margin: 0 0 50px;}
    .btn {background: #fff; border-radius: 100px; height: 60px; width: 232px; display: inline-flex; align-items: center; justify-content: center; 
        .img1 {width: 40px; margin-right: 10px;}
        .img2 {display: table; margin: 0 0 5px;}
        .img3 {display: table;}
        &:hover {opacity: 0.6; cursor: pointer;}
    }
    &:before {content: ""; transform: translate(50%,-25%); position: absolute; opacity: 0.4; background: url(${circle}); background-size: cover; width: 743px; height: 743px; right: 0; top: 0px;}
    &:after {content: ""; transform: translate(-40%,-10%); position: absolute; opacity: 0.5; background: url(${circle}); background-size: cover; width: 869px; height: 869px; left: 0; top: 0px;}
    @media screen and (max-width: 768px) {
        padding: 100px 0 0;
        &:before {display: none;}
        &:after {display: none;}
        h3 {font-size: 50px;}
        p {font-size: 18px; margin-bottom: 40px;}
    }
`
const FooterBottom = styled.div`
    display: flex; padding: 210px 0 120px; position: relative;
    &:after {content: ""; position: absolute; height: 177px; bottom: 0; left: 0; right: 0; background: url(${blob}) no-repeat center;}
    .col-01 { display: flex; flex-flow: column; align-items: flex-start; flex-grow: 1; max-width: 500px; margin-right: auto;
        .logo {margin: 0 0 43px}
        p {font-size: 16px; font-weight: 600; line-height: 24px; margin: 0 0 44px;}
        span {display: block; font-size: 16px; font-weight: 700; opacity: 0.6;}
        &.mob {display: none;}
    }
    .col-02 { display: flex; flex-flow: column; align-items: flex-start; margin-left: 12%; max-width: 15%; 
        h5 {font-size: 16px; font-weight: 700; margin: 0 0 20px}
        a {font-size: 16px; font-weight: 500; color: #ffffff; opacity: 0.6; margin-bottom: 12px;}
    }
    @media screen and (max-width: 768px) {
        flex-flow:  wrap;
        padding: 100px 0 120px;
        .col-01 { width: 100%; 
            .logo {margin: 0 0 30px}
            p {font-size: 16px; font-weight: 600;}
            span {display: none;}
            &.mob {display: block; margin-top: 50px; span {display: block;}}
        }
        .col-02 {margin-left: 0; width: 50%; max-width: inherit; margin-bottom: 30px;}
        &:after {right: -25px; left: -25px; bottom: -80px;}
    }
`


export default Footer