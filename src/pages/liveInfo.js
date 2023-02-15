import React, { Component,  useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom' 
import HeaderInner from '../component/headerInner'
import Footer from '../component/footer2'

import launchpadBg from '../assets/images/launchpadBg.png'
import arrow from '../assets/images/arrow.png'
import Back from '../assets/images/Back.png'
import logo1 from '../assets/images/logo1.png'
import logo3 from '../assets/images/logo3.png'
import icon1 from '../assets/images/icon1.png'
import medium from '../assets/images/medium2.svg'
import telegram from '../assets/images/telegram2.svg'
import twitter from '../assets/images/twitter2.svg'
import globe2 from '../assets/images/globe2.svg'
import arrow1 from '../assets/images/arrow1.png'

const Home = (props) => {

/*  useEffect(() => { 
    window.scrollTo(0, 10) 
  }, []) */



    return (
        <>
            <HeaderInner></HeaderInner>
            <PageMain>
                <ContentRow02>
                    <SecTitle>
                        <BackBtn>
                            <img src={Back}/>
                            Projects
                        </BackBtn>
                        <ApplyBtn>
                            Apply for IDO
                            <span><img width={20} src={arrow}/></span>
                        </ApplyBtn>
                    </SecTitle>
                    <CardList>
                        <PageLeft>
                            <div className='PageHeader'>
                                <div><img width={150} src={logo1} /></div>
                                <div className='header-right'>
                                    <h3>Hunger Chains Public Round</h3>
                                    <a><img src={globe2} /></a>
                                    <a><img src={twitter} /></a>
                                    <a><img src={telegram} /></a>
                                    <a><img src={medium} /></a>
                                </div>
                            </div>
                            <p>Join Metaverse and Fun with Playland! Turkey's entertainment center is now on the metaverse.</p>
                            <div className="col3">
                                <p><strong>Soft Cap</strong>0 HTE</p>
                                <p><strong>Hard Cap</strong>666,667 HTE</p>
                                <p><strong>Allocation</strong>20 - 5,000 USDT</p>
                            </div>
                            <p><strong>Supported Coin</strong><i>USDT</i>1 HTE = 0.75 USDT / 1 USDT = 1.33 HTE</p>
                            <p><strong>Lock-up rules</strong>Public Round - 20% unlocked at TGE. The rest 80% will be unlocked monthly in the next 4 months.</p>
                            <p><strong>Project Introduction</strong>
                            Playland Toys Inc. was established in Istanbul. Our company, which produces toys and game tools, has become a part of the entertainment world with its unique colors. Playland provides distributorship, representation and consultancy services in the fields of manufacturing, import, export, sales, leasing, operation and technical service all over Turkey and Europe. Playland Utility Token was developed by Playland and it is a brand new dimension of digital competition. Playland Utility Token, PLND Token, which is a unique utility token, will be actively used by hundreds of thousands of users in the Playland digital game, e-sports and competition platform</p>
                            <p><strong>Token information</strong>
                            <b>Type:</b> BEP20 <br/>
                            <b>Ticker:</b> PLND <br/>
                            <b>Total supply:</b> 100,000,000 (fixed) <br/>
                            <b>Initial circulating supply:</b> 1,000,000 PLND <br/>
                            <b>Initial Circulating market cap:</b> $412,500 <br/>
                            <b>Fully diluted market cap:</b> $7,500,000</p>
                            <p><strong>TOKENOMICS</strong>
                            <b>Seed Round:</b> $0.25 - 10% unlocked at TGE. The rest 90% will be unlocked monthly in the next 9 months. <br/>
                            <b>Private Round:</b> 0.50 - 10% unlocked at TGE. The rest 90% will be unlocked monthly in the next 6 months. <br/>
                            <b>Public Round:</b> $0.75 - 20% unlocked at TGE. The rest 80% will be unlocked monthly in the next 4 months.</p>

                            <div className='col2'>
                                <p><strong>DEX Listing</strong>
                                Qudot, Pancakeswap, GrenoSwap</p>
                                <p><strong>DEX Listing</strong>
                                BitMart, BKEX, LBANK, gate.io, MEXC Global</p>
                            </div>
                        </PageLeft>
                        <CardMain>
                            <figure>
                                <div className='cardlogos'><img width={98} src={logo3} /></div>
                                <div className='card-right'>
                                    <b>Live</b>
                                    <span>HTE</span></div>
                            </figure>
                            <p><strong>Time</strong>
                            <div className='dot'></div>2022.07.14 06.00 AM UTC
                            </p>
                            <div className='progress'>
                                <span>Progress</span>
                                <strong>0 USDT</strong>
                                <strong>70,000 USDT</strong>
                                <div className='progressbar'><b style={{'width': '70%'}}></b></div>
                            </div>
                            <p><strong>My subscription amount</strong>
                            5,000
                            </p>
                            <p><strong>Available HTE</strong>
                            800,000
                            </p>
                            <Button>Approve</Button>
                        </CardMain>
                    </CardList>
                    <News>
                        <h4>Hepton newsletter</h4>
                        <p>Stay updated on the latest Hepton news</p>
                        <div className='inputBox'>
                            <input type='text' className='textBox' name='' value='' placeholder='Enter Your Email Address'/>
                            <button  className='textBtn'><img src={arrow1}/></button>
                        </div>
                    </News>
                </ContentRow02>
            </PageMain>
            <Footer/>
        </>
    )
}


const FlexDiv = styled.div`
    display: flex; align-items: center; flex-wrap:wrap;
`;
const PageMain = styled.div`
    &:after {content: ""; position: absolute; background: url(${launchpadBg}) no-repeat top right; top: 0; right: 0; width: 100%; z-index: -1; padding: 0 0 100%; background-size: 80%;}
    @media screen and (max-width:768px) {
        position: relative;
        &:after {
            padding: 0 0 0; bottom: 0; top: -100px; background-size: cover; background-position: center center;
        }
    }
`;
const SecTitle = styled(FlexDiv)`
    width: 100%; flex-wrap: nowrap; overflow: auto; margin-bottom: 50px;
    @media screen and (max-width:1024px) {
        width: calc(100% + 50px); margin: 0 -25px 50px -25px; padding: 10px 25px 0;
    }
    @media screen and (max-width:768px) {
        margin: 0 -25px 30px -25px; 
    }
`
const ApplyBtn = styled.div ` 
    font-size: 20px; font-weight: 500; cursor: pointer; margin-left: auto; display: flex; white-space: nowrap; align-items: center; cursor: pointer;
    span {width: 32px;height: 32px; border: 1px solid #FFFFFF; display: flex; align-items: center; justify-content: center; margin-left: 15px;}
    @media screen and (max-width:768px) {
        display: none;
    }
`
const BackBtn = styled.div `
    font-size: 26px; font-weight: 500; cursor: pointer; margin-right: auto; display: flex; white-space: nowrap; align-items: center;
    img {width: 50px; margin-right: 24px;}
    @media screen and (max-width: 768px) {
        font-size: 20px; 
        img {width: 34px; margin-right: 15px;}
    }
`
const ContentRow02 = styled(FlexDiv)`
    width: 100%; max-width: 1200px; margin:120px auto 0 auto; 
    @media screen and (max-width:1200px) {
        padding: 0 25px; margin: 60px auto 0 auto; 
    }
`
const CardList = styled.div`
    width: 100%; display: flex; align-items: flex-start; 
    @media screen and (max-width: 1024px) {
        flex-flow: column-reverse;
    }
`
const PageLeft = styled(FlexDiv) `
    background: rgba(255, 255, 255, 0.11); backdrop-filter: blur(5px); width: 865px; padding: 30px;
    .PageHeader {display: flex; align-items: center; margin: 0 0 40px;
        .header-right {margin-left: 40px; 
            h3 {font-size: 26px; margin: 0 0 22px;}
            a {margin: 0 20px 0 0;}
        }
    }
    p {font-size: 16px; line-height: 1.45; margin: 0 0 25px;
        strong {font-size: 14px; color: #FF6347; font-weight: normal; width: 100%; display: block;}
        i {width: 100%; font-style: normal; font-weight: 700; display: block;}
    }
    .col3 {width: 100%; display: flex; 
        p {width: 25%}
    }
    .col2 {width: 100%; display: flex; 
        p {width: 50%}
    }
    @media screen and (max-width: 1200px) {
        .col3 {
            p {width: 33%}
        }
        .col2 { flex-flow: column;
            p {width: 100%}
        }
    }
    @media screen and (max-width: 1024px) {
        width: 100%;
    }
    @media screen and (max-width: 768px) {
        padding: 25px;
        p {margin-bottom: 20px;}
        .PageHeader { 
            div:not(.header-right) > img {width: 100px;}
            
            /* a {margin: 0 20px 0 0;} */
            .header-right {margin: 0 0 0 20px; 
                h3 {font-size: 18px; margin-bottom: 16px;}
                a {margin: 0 15px 0 0;
                    img {max-height: 18px;}
                }
            }
        }
        .col3 { flex-flow: wrap; 
            p {width: 50%;}
        }
    }
    @media screen and (max-width: 640px) {
        .col3 { flex-flow: wrap; 
            /* p {width: 100%;} */
        }
    }
`
const CardMain = styled.div `
    width: 417px; flex-shrink: 0; margin-left: 30px; flex-grow: 1; background: rgba(255, 255, 255, 0.11); backdrop-filter: blur(5px); min-height: 200px; padding: 30px; display: flex; flex-flow: column;
    h3 {font-size: 26px; font-weight: 700; color: #FFFFFF; margin: 40px 0 24px;}
    p {font-size: 16px; display: flex; align-items: center; flex-flow: wrap; margin: 0 0 30px;
        strong {font-size: 14px; color: #FF6347; font-weight: normal; width: 100%; margin: 0 0 6px;}
        .dot {background: #4AE700; border-radius: 100%; height: 8px; width: 8px; box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1); display: inline-block; margin-right: 6px;}
    }
    .progress {
        display: flex; align-items: center; flex-flow: wrap; justify-content: space-between; margin: 0 0 30px;
        span {font-size: 14px; color: #FF6347; font-weight: normal; width: 100%; margin: 0 0 6px;}
        strong {font-size: 16px; font-weight: 400;}
        .progressbar {background: rgba(255, 255, 255, 0.2); display: flex; overflow: hidden; border-radius: 20px; height: 12px; width: 100%; margin-top: 15px;
            b {background: #37AC00; border-radius: 20px;}
        }
    }
    figure {
        display: flex; justify-content: space-between; align-items: center; margin: 0 0 50px;
        .cardlogos {}
        .card-right {display: flex; align-items: center;
            b {height: 24px; padding: 5px 8px; background: #37AC00; font-weight: 500; border-radius: 20px; line-height: 1;
            &:before {content: ""; width: 8px; height: 8px; background: #fff; border-radius: 100px; display: inline-block; vertical-align: top; margin: 3px 5px 0 0;}
        }
            span {border: 1px solid #FFFFFF; width: 60px; height: 40px; margin-left: 15px; font-size: 16px; color: #FFF; padding: 11px 10px; text-align: center;}
        }
    }
    &.live {
    }
    &.upcoming {
        figure .card-right b {background: #E78A00;}
        p .dot {background: #E78A00;}
        .progressbar {
            b {background: #E78A00; }
        }
    }
    &.ended {
        figure .card-right b {background: #FF6347;}
        /* p .dot {background: #FF6347;} */
        .progressbar {
            b {background: #FF6347; }
        }
    }
    @media screen and (max-width:1024px) {
        margin: 0 0 30px; width: 100%; 
    }
    @media screen and (max-width: 768px) {
        padding: 25px;
        h3 {font-size: 20px;}
        p {margin: 0 0 20px}
        .progress {margin: 0 0 20px}
    }
`
const Button = styled.button `
	background: #FFFFFF; height: 50px; width: 100%; font-size: 18px; border: 0;
    &:hover {background: #000; color: #fff;}
`
const News = styled(FlexDiv) `
    background: #fff; width: 100%; margin: 97px 0 80px; color: #000; flex-flow: column; align-items: flex-start; padding: 28px;
    h4 {margin: 0 0 24px; font-size: 36px; font-weight: 700;}
    p {margin: 0; font-size: 16px; margin: 0 0 24px; color: #616161;}
    .inputBox { display: flex; width: 100%;
        .textBox {height: 68px; width: 100%; background: #E0E0E0; border: 0; padding: 23px; font-size: 16px;}
        .textBtn {height: 68px; width: 68px; background: #000000; border: 0; padding: 23px; font-size: 16px;}
    }
    @media screen and (max-width: 768px) {
        margin: 60px 0; padding: 25px;
        h4 {font-size: 30px;}
    }
`

export default Home;