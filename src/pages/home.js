import React, { Component,  useEffect, useState } from 'react'
import styled from 'styled-components'
import Gs from '../theme/globalStyles'
import { Link, NavLink } from 'react-router-dom' 
import Media from './../theme/media-breackpoint' 
import OwlCarousel from 'react-owl-carousel-rtl'
import 'owl.carousel/dist/assets/owl.carousel.css';
import Header from '../component/header'
import Footer from '../component/footer'; 

import BG01 from '../assets/images/Sphere.png'
import SolutionLOGO01 from '../assets/images/solu-logo-01.png'
import SolutionLOGO02 from '../assets/images/solu-logo-02.png'
import Count01 from '../assets/images/01.svg'
import Count02 from '../assets/images/02.svg'
import Count03 from '../assets/images/03.svg'
import LinkIcon from '../assets/images/link.png'
import mdec from '../assets/images/mdec.png'
import qudot from '../assets/images/qudot.png'
import ventures from '../assets/images/ventures.png'
import Huostarter from '../assets/images/Huostarter.png'
import kenzo from '../assets/images/kenzo.png'
import labs from '../assets/images/labs.png'
import sprial from '../assets/images/sprial.png'
import sprialMob from '../assets/images/sphere-logo.png'
import blob from '../assets/images/blob.svg'
import blob2 from '../assets/images/blob2.svg'
import blob11 from '../assets/images/SPHERE11.png'
import blob12 from '../assets/images/SPHERE12.png'
import blob13 from '../assets/images/SPHERE13.png'
import Labs2 from '../assets/images/labs2.png'
import blob03 from '../assets/images/blob03.png'
import circle from '../assets/images/circle.jpg'


 
const Home = (props) => {
 

 /*  useEffect(() => { 
    window.scrollTo(0, 10) 
  }, []) */

  
  const testimonials =  {
		0: {
			items: 1,
			margin: 20,
      center: false
		},
		640: {
			items: 2,
			margin: 20
		},
		991: {
			items: 2,
			margin: 30,
      autoWidth: true,
		},
		1400: {
      items: 4,
      autoWidth: false,
			margin: 40
		}
	}
  const logoSlider =  {
		0: {
			margin: 50,
		},
		768: {
			margin: 50
		},
		991: {
			margin: 80,
		},
		1400: {
			margin: 80
		}
	}

  return (
    <>   
      <Header />  
      <HeroBanner>
          <div className='container'>
            <h1 className='wow fadeInUp'  data-wow-delay='0.1s'> <span>Build your</span> Web3 On Hepton  </h1>
            <HeroTxt01 className='wow fadeInUp'  data-wow-delay='0.2s'>
            Hepton is a Layer-2 network for scaling Ethereum through the development of two scaling solutions
  which are Hepton PoS (Sidechain) and Hepton STANDRA (ZK-Rollup). Fully sovereign under the technology of Ethereum.
            </HeroTxt01> 
            <HeroBtnBar className='wow fadeInUp' data-wow-delay='0.3s'>
              <button className='btn01'>Build now</button>
              <button className='btn02'>Claim 0.5 HTE</button> 
            </HeroBtnBar> 
          </div>
      </HeroBanner>

      <ContentRow className='wow fadeInUp' data-wow-delay='0.3s'>
          <div className='sbox bx01 wow fadeInLeft'  data-wow-delay='1.5s'>
              <h2>Sidechain with EVM <br/>compatibility</h2>
              <p>To onboard multiple Web3 ecosystems as Ethereum, Hepton PoS brings the same compatibility as Ethereum.</p>
          </div>

          <div className='sbox bx02 wow fadeInRight'  data-wow-delay='1.5s'>
              <h2>More Scalable (EIP1559)</h2>
              <p>EIP-1559 implemented on Hepton PoS will overhaul the existing transaction fee system on Ethereum. Proposed by Vitalik Butterin and used by its sovereignty.</p>
          </div>

          <div className='sbox bx03 wow fadeInLeft'  data-wow-delay='1.5s'>
              <h2>Scaling Solution</h2>
              <p>Hepton provides the solution to scale Ethereum through the infrastructure of Sidechain and ZK-Rollup.</p>
          </div>

          <div className='sbox bx04 wow fadeInRight'  data-wow-delay='1.5s'>
              <h2>Low latency & Instant<br/>
finality</h2>
              <p>To ensure minimal latency, all transactions are promised to be executed quickly. They are also promised to be irreversible after processing, resulting in immediate finality.</p>
          </div>

          <div className='sbox bx05 wow fadeInLeft'  data-wow-delay='1.5s'>
              <h2>Sturdy Security</h2>
              <p>Secure by a pool of professional validators and the Ethereum itself.</p>
          </div>

          <div className='sbox bx06 wow fadeInRight'  data-wow-delay='1.5s'>
              <h2>Green Technology</h2>
              <p>Hepton is an eco-friendly and sustainable Proof-Of-Stake network.</p>
          </div> 
      </ContentRow>

      <OsMBX>
        <ContentRow02>
          <Title01 className='wow fadeInUp' data-wow-delay='0.2s'>Our Solutions </Title01>
          <OsSbx01 className='wow fadeInLeft' data-wow-delay='0.2s'>
            <div className='imgBX'><img src={SolutionLOGO01} alt='' />  </div>
            <p>Hepton PoS is a sidechain with EVM compatibility. It is fully secured with the Proof-of-Stake consensus mechanism alongside with the integration of EIP-1559. It is a Web3 friendly network.</p>  
          </OsSbx01>
          <OsSbx01 className='wow fadeInRight' data-wow-delay='0.2s'>
            <div className='imgBX'><img src={SolutionLOGO02} alt='' />  </div>
            <p>Hepton STANDRA is a layer-2 infrastructure using the ZK-Rollup technology. Fully secured with Ethereum consensus and using ZK-STARK verifier for off-chain solutions.</p>  
          </OsSbx01>
        </ContentRow02>
      </OsMBX>
    
      <ContentRow02>
        <Title01 className='wow fadeInUp' data-wow-delay='0.2s'>Resources</Title01>
        <ResourceCounter>
          <figure className='wow fadeInUp' data-wow-delay='0.2s'>
            <strong><img src={Count01} /></strong>
            <span>TESTNET EXPLORER <a><img width="30" src={LinkIcon} /></a></span>
          </figure>
          <figure className='wow fadeInUp' data-wow-delay='0.2s'>
            <strong><img src={Count02} /></strong>
            <span>TECHNICAL DOCUMENTATION <a><img width="30" src={LinkIcon} /></a></span>
          </figure>
          <figure className='wow fadeInUp' data-wow-delay='0.2s'>
            <strong><img src={Count03} /></strong>
            <span>STAKING REWARDS <a><img width="30" src={LinkIcon} /></a></span>
          </figure>
        </ResourceCounter>
        
       
      </ContentRow02>
      <MovingLogos>
          <OwlCarousel className='owl-theme' smartSpeed={5500} autoplayTimeout={5000} loop margin={80} autoWidth={true} autoplay={true} responsive={logoSlider}>
            <a><img src={qudot} /></a>
            <a><img src={mdec} /></a>
            <a><img src={kenzo} /></a>
            <a><img src={kenzo} /></a>
            <a><img src={qudot} /></a>
            <a><img src={mdec} /></a>
            <a><img src={kenzo} /></a>
            <a><img src={kenzo} /></a>
            <a><img src={qudot} /></a>
            <a><img src={qudot} /></a>
            <a><img src={mdec} /></a>
            <a><img src={kenzo} /></a>
            <a><img src={kenzo} /></a>
            <a><img src={qudot} /></a>
            <a><img src={mdec} /></a>
            <a><img src={kenzo} /></a>
            <a><img src={kenzo} /></a>
            <a><img src={qudot} /></a>
          </OwlCarousel>
        </MovingLogos>
        <MovingLogos className='cambioR'>
          <OwlCarousel className='owl-theme' smartSpeed={5500} autoplayTimeout={5000} rtlClass="owl-rtl" rtl={true} loop margin={80} autoWidth={true} autoplay={true} responsive={logoSlider}>
            <a><img src={qudot} /></a>
            <a><img src={Huostarter} /></a>
            <a><img src={labs} /></a>
            <a><img src={ventures} /></a>
            <a><img src={qudot} /></a>
            <a><img src={kenzo} /></a>
            <a><img src={Huostarter} /></a>
            <a><img src={labs} /></a>
            <a><img src={ventures} /></a>
            <a><img src={qudot} /></a>
            <a><img src={kenzo} /></a>
            <a><img src={qudot} /></a>
            <a><img src={Huostarter} /></a>
            <a><img src={labs} /></a>
            <a><img src={ventures} /></a>
            <a><img src={qudot} /></a>
            <a><img src={kenzo} /></a>
            <a><img src={Huostarter} /></a>
            <a><img src={labs} /></a>
            <a><img src={ventures} /></a>
            <a><img src={qudot} /></a>
            <a><img src={kenzo} /></a>
          </OwlCarousel>
        </MovingLogos>
      <OurStats>
        <ContentRow02>
          <div className='statsLeft wow fadeInLeft' data-wow-delay='0.2s'>
            <h2>Our Statistics</h2>
            <p>Hepton PoS is the sidechain to Ethereum that reduce transaction cost with the implementation of EIP-1559 and resulted in a “no more” to FPA. Hepton STANDRA is fully compatible with EVM and to design a circuit to link the bytecode with the real execution trace.</p>
            <a className='btn'>Explore now</a>
          </div>
          <div className='statsRight wow fadeInRight' data-wow-delay='0.2s'>
            <p>Txs Per Second <strong>8<span>k</span></strong></p>
            <p>Completed Txs <strong>100<span>k+</span></strong></p>
            <p>Deployed Contracts <strong>200<span>+</span></strong></p>
          </div>
        </ContentRow02>
      </OurStats>

      <Utilities>
        <ContentRow02>
          <SecTitle className='wow fadeInRight' data-wow-delay='0.2s'>
            <h3>HTE Utilities</h3>
            <p>HTE is the utility token inside Hepton PoS and a Governance Token for Hepton STANDRA </p>
          </SecTitle>
            <div className='sprial'>
              <span className='span1 wow zoomIn' data-wow-delay='0.5s'>DAO Governance</span>
              <span className='span2 wow zoomIn' data-wow-delay='0.5s'>P2P</span>
              <span className='span3 wow zoomIn' data-wow-delay='0.5s'>Liquidity</span>
              <span className='span4 wow zoomIn' data-wow-delay='0.5s'>Gas-Fees</span>
              <span className='span5 wow zoomIn' data-wow-delay='0.5s'>Staking Rewards</span>
              <img className='spear-desk' src={sprial} />
              <b className='empty mt1'></b>
              <b className='empty mt2'></b>
              <b className='empty mt3'></b>
              <b className='empty mt4'></b>
              <b className='empty mt5'></b>
              {/* <img className='spear-mob' src={sprialMob} /> */}
              <div className='spear-mob'></div>
            </div>
        </ContentRow02>
      </Utilities>

      <Protocol>
        <SecTitle className='wow fadeInRight' data-wow-delay='0.2s'>
          <h3>Protocol Features</h3>
        </SecTitle>
        <OwlCarousel className='owl-theme' items={4} center={true} autoWidth={false} loop={false} margin={40} responsive={testimonials}>
          {/* <OwlCard className='blank'>
            
          </OwlCard> */}
          <OwlCard className='blue'>
            <h4>Peer-To-Peer</h4>
            <p>Hepton provides a sidechain that is as capable as Ethereum but more scalable and suits the need of the DeFi infrastructure.</p>
            <Link className='btn'>Build now</Link>
          </OwlCard>
          <OwlCard className='pink'>
            <h4>DAO</h4>
            <p>A decentralized autonomous organization (DAO) is a system developed to distribute decision-making, management, and entity ownership. Hepton provides the HTE as the DAO governance token for these 3 things.</p>
            <Link className='btn'>Build now</Link>
          </OwlCard>
          <OwlCard className='orange'>
            <h4>NFTs</h4>
            <p>NFTs, or non-fungible tokens, are blockchain-based tokens that individually represent a special asset like a work of art, a piece of digital material, or other media. A digital or physical asset, whether it be digital or tangible, can be considered as...</p>
            <Link className='btn'>Build now</Link>
          </OwlCard>
          <OwlCard className='green'>
            <h4>Smart Contract</h4>
            <p>As the sidechain to Ethereum, Hepton PoS is also a smart contract platform but can be concluded as a paradise for contract writers/developers due to the fee is really low no matter how the contract is.</p>
            <Link className='btn'>Build now</Link>
          </OwlCard>
      </OwlCarousel>
      </Protocol>

      <RoadMap>
        <ContentRow02>
          <SecTitle className='wow fadeInRight' data-wow-delay='0.2s'>
            <h3>Roadmap</h3>
          </SecTitle>
          <div className='roadcard-main'>

          <div className='RoadMap-card card1 wow fadeIn' data-wow-delay='0.2s'>
            <h4>Q4 2022</h4>
            <ul>
              <li>Website Launch</li>
              <li>Testnet Launch</li>
              <li>Alpha Mainnet Test</li>
            </ul>
          </div>
          <div className='RoadMap-card card2 wow fadeIn' data-wow-delay='0.2s'>
            <h4>Q1 2023</h4>
            <ul>
              <li>Deploying Pegged-token contract</li>
              <li>Private Sale</li>
              <li>Public Sale</li>
              <li>IEO</li>
            </ul>
          </div>
          <div className='RoadMap-card card3 wow fadeIn' data-wow-delay='0.2s'>
            <h4>Q1 2023</h4>
            <ul>
              <li>Project Launch on CEX and DEX</li>
              <li>Validators Calling</li>
              <li>Mainnet Beta Launch</li>
              <li>Grant Program to dApps</li>
              <li>zK-Rollup Project Paper Release</li>
            </ul>
          </div>
            <div className='card4 wow fadeIn' data-wow-delay='0.2s'>
              <p>This is just the beginning...</p>
            </div>
          </div>
        </ContentRow02>
      </RoadMap>

      <Helplabs>
        <ContentRow02>
            <div className='Helplabs-Left  wow fadeInLeft' data-wow-delay='0.2s'>
              <h2>Developed by Heplabs</h2>
              <p>Heplabs is a Decentralized Autonomous Organisation (DAO) proposed by the founding members of Hepton.</p> <p>Our vision is to create a decentralized future for web and applications.</p>
              <img src={Labs2}/>
              <h4>The future is Web3</h4>
            </div>
        </ContentRow02>
      </Helplabs>

      <Footer></Footer>
    </>
  )
}

const Helplabs = styled.div `
  background: #fff; color: #000000; padding: 1px 0 145px; position: relative;
  h2 {font-size: 102px; margin: 0 0 42px; text-transform: uppercase;}
  p {font-size: 18px; line-height: 24px; font-weight: 600; margin: 0 0 15px;}
  .Helplabs-Left {}
  img {margin-top: 40px;}
  h4 {font-size: 24px; font-weight: 700; margin: 40px 0 0;}
  &:after {content: ""; position: absolute; right: 50px; bottom: 0; background: url(${blob03}) no-repeat; width: 474px; height: 311px;}
  @media screen and (max-width: 768px) {
    padding: 1px 0 360px;
    &:after {background: url(${blob03}) no-repeat; right: -35%;}
    h2 {font-size: 50px; margin-bottom: 25px;}
    p {font-size: 16px;}
  }
`
const RoadMap = styled.div `
  position: relative; overflow: hidden; margin: 123px 0 200px;
  &:after {content: ""; background: url(${blob}); width: 503px; height: 503px; position: absolute; right: -150px; top: 270px;}
  &:before {content: ""; transform: translate(40%, 5%); position: absolute; opacity: 0.5; background: url(${circle}); background-size: cover; width: 870px; height: 870px; right: 0; bottom: 0px; z-index: -1;}
  .RoadMap-card {height: 800px; width: calc(50% - 40px); background: #191919; margin: 0 20px 40px; border-radius: 20px; padding: 40px; position: relative; z-index: 1; overflow: hidden;
    h4 {font-size: 60px; font-weight: 700; letter-spacing: 0.01em; text-transform: uppercase; margin: 0 0 40px;}
    ul {margin: 0; padding: 0;}
    li {margin: 0; list-style: none; font-size: 22px; font-weight: 500; line-height: 40px; letter-spacing: 0.01em; position: relative; padding: 0 0 0 40px;
      &:after {content: ""; width: 6px; height: 6px; background: #fff; position: absolute; border-radius: 10px; left: 10px; top: 17px;}
    }
    &:after {content: "";  width: 100%; height: 100%;  position: absolute; z-index: -1; top: 0; left: 0;}
    &:before {content: "";  width: 654px; height: 654px; opacity: 0.2; filter: blur(50px); border-radius: 100%; position: absolute; z-index: -1; bottom: 0; right: 0; transform: translate(20%, 25%);}
    &.card1 {&:after {background: url(${blob11}) right bottom no-repeat;} &:before {background: #F68620 ;}}
    &.card2 {transform: translateY(250px); &:after {background: url(${blob12}) right bottom no-repeat;} &:before {background: #714AE9;}}
    &.card3 {&:after {background: url(${blob13}) right bottom no-repeat;} &:before {background: #E243B8;}}
  }
  .card4 {width: calc(50% - 40px); height: 550px; transform: translateY(250px); display: flex; justify-content: center; align-items: center;
  p {
    font-weight: 700; font-size: 30px;
  }}
  .roadcard-main {padding-top: 120px; width: 100%; display: flex; flex-flow: wrap;}
  @media screen and (max-width: 768px) {
    margin: 0 0 200px;
    &:before {display: none;}
    .roadcard-main {padding-top: 50px;}
    .RoadMap-card { padding: 30px;
      h4 {font-size: 40px;}
    }
  }
  @media screen and (max-width: 640px) {
    margin: 123px 0 20px; 
    &:after {display: none;}
    .RoadMap-card { width: 100%; margin: 0 0 24px;
      &.card2 {transform: translateY(0);}
      li {font-size: 18px;}
    }
    .card4 {transform: translateY(0); height: auto; width: 100%; padding: 100px 0 100px; p {font-size: 24px;}}
  }
`
const FlexDiv = styled.div`
  display: flex; align-items: center; justify-content:center; flex-wrap:wrap;
`;

const HeroBanner = styled(FlexDiv)` 
    width: 100%; padding:140px 0 0 0; position: relative;
    &:after {content: ""; transform: translate(-55%, 5%); position: absolute; opacity: 0.4; background: url(${circle}); background-size: cover; width: 565px; height: 565px; left: 0; bottom: 0px; z-index: -1;
  }
    &:before {content: ""; transform: translate(55%, 10%); position: absolute; opacity: 0.5; background: url(${circle}); background-size: cover; width: 690px; height: 690px; right: 0; top: 0px; z-index: -1;
  }
  .container { max-width:1006px; margin:0 auto;}
  h1{ font:normal 120px/80px 'gilroy-b', sans-serif; color:#fff; display:flex; align-items:flex; justify-content:flex-start; flex-direction:column; margin:0; padding:0;
    span{font-size:40px; line-height:60px;}
  }
  @media screen and (max-width:1024px) {
    .container {padding:0 15px;}
  }
  @media screen and (max-width:991px) {
    text-align:center; padding: 140px 30px 0;
    h1 { line-height: 1.1;}
  }
  @media screen and (max-width: 768px) {
    padding: 80px 0 0;
    h1 {font-size: 70px; span {font-size: 24px;}}
    &:after, &:before {display: none;}
  }
`
const HeroTxt01 = styled(FlexDiv)`
  font:normal 18px/24px 'gilroy-sb', sans-serif; color:#999999; margin: 60px auto 0 auto; text-align: center;
max-width:984px;
  @media screen and (max-width: 768px) {
    margin: 30px 0 0;
  }
`
const HeroBtnBar = styled(FlexDiv)`
    margin:45px 0 0 0; 
    
    .btn01{  font:normal 18px/24px 'gilroy-sb', sans-serif; color:#000; padding:18px 46px; border:none; background-color:#F68C20; border-radius:40px; margin-right:30px; border:1px solid transparent;
    :hover{ background-color:transparent; color:#fff;  border:1px solid #F68C20;}
  } 
    .btn02{  font:normal 18px/24px 'gilroy-sb', sans-serif; color:#fff; padding:18px 46px; border:none; border:1px solid #F68C20; border-radius:40px; background-color:transparent;
      :hover{ color:#000; background-color:#F68C20; }
  } 
  @media screen and (max-width: 768px) {
    .btn01{padding: 12px 30px; margin-right: 15px;}
    .btn02{padding: 12px 30px;}
  }
`
const ContentRow = styled(FlexDiv)`
    width:100%; max-width:1320px; min-height:1274px; background: url(${BG01}) 50% 50% no-repeat; margin:100px auto 0 auto;
    position:relative; 

  .sbox{ width:100%; min-height:180px; background: -moz-linear-gradient(left,  rgba(255,255,255,0) 0%, rgba(255,255,255,0.05) 100%);
background: -webkit-linear-gradient(left,  rgba(255,255,255,0) 0%,rgba(255,255,255,0.05) 100%);
background: linear-gradient(to right,  rgba(255,255,255,0) 0%,rgba(255,255,255,0.05) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#99ffffff',GradientType=1 );
backdrop-filter: blur(15px); border-radius:20px; max-width:400px; padding:40px; position:absolute;  -webkit-box-shadow: 0 4px 4px 0 rgba(0,0,0,0.25); box-shadow: 0 4px 4px 0 rgba(0,0,0,0.25);
      p{ font:normal 16px/22px 'gilroy-md', sans-serif; color:#CCCCCC;}
      h2{ font:normal 18px/22px 'gilroy-b', sans-serif; color:#fff; text-transform:uppercase; letter-spacing:1px;}
      &.bx01{  top:112px; left:140px; }
      &.bx02{  top:218px; right:100px; }
      &.bx03{  top:482px; left:0; }
      &.bx04{  top:613px; right:0px; }
      &.bx05{  top:836px; left:140px; }
      &.bx06{  top:993px; right:100px; }
    }
  @media screen and (max-width:1024px) {
    padding: 0 15px;
    .sbox{
      &.bx01{  top:112px; left:90px; }
      &.bx02{ right:60px; }
      &.bx03{left:30px; }
      &.bx04{right:30px; }
      &.bx05{left:90px; }
      &.bx06{right:80px; }
    }
  }
  @media screen and (max-width: 991px) {
    .sbox{position: static; margin-bottom: 24px; padding: 30px;}
  }
`
const ContentRow02 = styled(FlexDiv)`
  width: 100%; max-width:1200px; margin:120px auto 0 auto; 
  @media screen and (max-width:1024px) {
    padding: 0 15px; margin: 60px auto 0 auto;
  }
`
const Title01 = styled(FlexDiv)`
    width: 100%; text-align:center; margin: 0 0 80px; font:normal 80px/60px 'gilroy-b', sans-serif; color:#fff;
    @media screen and (max-width: 768px) {
      font-size: 50px;
    }  
`
const OsMBX = styled(FlexDiv)`
  width: 100%; margin: 0 0 0 0; position: relative;
  &:after {content: ""; transform: translate(-55%, -20%); position: absolute; opacity: 0.4; background: url(${circle}); background-size: cover; width: 690px; height: 690px; left: 0; bottom: 0px; z-index: -1;
  }
  &:before {content: ""; transform: translate(55%, -30%); position: absolute; opacity: 0.5; background: url(${circle}); background-size: cover; width: 303px; height: 303px; right: 0; top: 0px; z-index: -1;
  }
  @media screen and (max-width: 768px) {
    &:after {display: none;}
    &:before {display: none;}
  }  
`
const OsSbx01 = styled(FlexDiv)`
  width:50%;  padding:0 70px 0 10px; text-align:center;

  p{font:normal 20px/26px 'gilroy', sans-serif; color:#fff; }
  .imgBX{ margin:0 auto 20px auto; }

  &:nth-last-child(01){ padding:0 10px 0 70px;}
  @media screen and (max-width: 768px) {
    width: 100%; padding: 0 0 60px;
    &:nth-last-child(01){ padding:0 10px 0 0;}
    .imgBX{ margin:0 auto 30px auto; img {width: 142px;}}
    p {margin: 0; font-size: 16px;}
  }
`
const ResourceCounter = styled(FlexDiv)`
  justify-content: space-between; width: 100%; margin-bottom: 170px;
  figure {margin: 76px 0 0; padding: 0; display: inline-block; position: relative;
    &:after {content: ""; background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #040606 80.32%); left: 0; right: 0; top: 0; bottom: 0; position: absolute; mix-blend-mode: darken;}
  }
  span {position: absolute; left: 0; bottom: 0; font-size: 30px; color:#fff; font-weight: 700; padding: 0 0 0 36px; z-index: 2;
    a {display: table; margin-top: 17px; margin-bottom: 11px; font-size: 0;}
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
    figure {width: 260px; justify-content: center; margin: 0px auto 70px;}
    span {font-size: 26px; width: 260px;} 
  }
`
const MovingLogos = styled.div `
  display: flex; align-items: center; margin-bottom: 80px;
  a {margin: 0 0;}
  section {display: flex; align-items: center; animation: cambio 80s infinite linear;}
  &.cambioR {section {animation: cambioR 80s linear infinite running;}}
  @keyframes cambio {
    from {margin-left: 0%}
    to {margin-left: -100%}
  }
  @keyframes cambioR {
    from {margin-left: 0%}
    to {margin-left: 100%}
  }
  @media screen and (max-width: 768px) {
    a {margin: 0 0;}
    margin-bottom: 40px;
  }
`
const OurStats = styled.div `
  background: #fff; color: #000000; padding: 1px 0 145px;
  .statsLeft {width: 60%; display: flex; flex-flow: column; max-width: 585px; margin-right: auto;
    h2 {font-size: 102px; margin: 0;}
    p {font-size: 18px; line-height: 24px; font-weight: 400;}
    .btn {width: 193px; height: 60px; background: #000000; border-radius: 30px; font-size: 18px; font-weight: 600; color: #F68C20; display: flex; align-items: center; justify-content: center;
      &:hover {background: #F68C20; color: #000000;}
    }
  }
  .statsRight{
    display: flex; flex-flow: column;
    p {font-size: 18px; font-weight: 600; line-height: 1; margin: 22px 0;
      strong {display: block; font-size: 100px; font-weight: 700; line-height: 1;}
      span {color:#F68C20;}
    }
  }
  @media screen and (max-width: 768px) {
    padding: 1px 0 60px; margin-top: 80px;
    .statsLeft {
      width: 100%; margin-bottom: 60px;
      h2 {font-size: 50px; margin: 0 0 30px;}
      p {font-size: 16px; margin: 0 0 30px;}
      .btn {padding: 12px 30px;}
    }
    div[class^="ContentRow02"] {margin: 60px 0 0;}
    .statsRight{ 
      width: 100%; 
    }
  }
`
const SecTitle = styled(FlexDiv) `
  flex-flow: column; justify-content: center; width: 100%;
  h3 {font-size: 120px; font-weight: 700; text-align: center; margin: 0;}
  p {color: #FFFFFF; opacity: 0.6; font-size: 18px; font-weight: 400; line-height: 24px;}
  @media screen and (max-width: 768px) {
    h3 {font-size: 50px;}
    p {font-size: 16px; text-align: center;}
  }
`
const Utilities = styled(FlexDiv) `
  position: relative;
  &:before {content: ""; transform: translate(50%, 10%); position: absolute; opacity: 0.3; background: url(${circle}); background-size: cover; width: 400px; height: 396px; right: 0; top: 0px; z-index: -1;}
  &:after {content: ""; transform: translate(-50%, -3%); position: absolute; opacity: 0.4; background: url(${circle}); background-size: cover; width: 400px; height: 396px; left: 0; bottom: 0px; z-index: -1;}
  .sprial {min-width: 1100px; max-width: 1100px; position: relative; margin-top: 100px; margin-bottom: 160px;
    img {width: 100%; position: relative; z-index: 1;
      &.spear-desk {display: block;}
    }
    .spear-mob {display: none;}
    &:after {content: ""; background: url(${circle}) no-repeat; background-size: cover; position: absolute; left: 0; right: 0; bottom: 0; top: 0; background-blend-mode: color-dodge; opacity: 0.3; z-index: -1; }
    span {width: 120px; height: 120px; border-radius: 100%; background: #FFFFFF; position: absolute; color: #F68C20; font-size: 16px; display: flex; align-items: center; justify-content: center; text-align: center; font-weight: 700; z-index: 4;
      &.span1 {top: 264px; left: 110px; }
      &.span2 {top: 294px; right: 437px; width: 100px; height: 100px;}
      &.span3 {top: 492px; right: 172px; width: 100px; height: 100px;}
      &.span4 {top: 664px; left: 361px; width: 100px; height: 100px;}
      &.span5 {bottom: 147px; right: 65px;}
    }
    .empty {width: 40px; height: 40px; background: #fff; position: absolute; border-radius: 100%;
      &.mt1 {top: 0; left: 390px;}
      &.mt2 {width: 30px; height: 30px; right: 329px; top: 147px;}
      &.mt3 {bottom: 220px; right: 424px}
      &.mt4 {width: 30px; height: 30px; bottom: 132px; left: 360px}
      &.mt5 {width: 30px; height: 30px; bottom: 301px; left: 42px}
    }
  }
  @media screen and (max-width: 991px) {
    &:before {display: none;}
    &:after {display: none;}
    .sprial {min-width: 700px; max-width: 700px; position: relative; margin-top: 100px; margin-bottom: 160px;
      img {width: 100%; position: relative; z-index: 1;
        &.spear-desk {display: none;}
      }
      &:after {display: none;}
      .spear-mob {display: block; width: 700px; height: 700px; border: 1px solid #FFFFFF; border-radius: 100%;
        &:before {content: ""; position: absolute; left: 100px; top: 100px; width: 500px; height: 500px; border: 2px solid #FFFFFF; border-radius: 100%;}
        &:after {content: ""; position: absolute; left: 190px; top: 190px; width: 320px; height: 320px; border: 2px solid #FFFFFF; border-radius: 100%; background: url(${sprialMob}) no-repeat center;}
      }
      span {
        font-size: 14px;
        &.span1 {top: 170px; left: auto; right: 209px; width: 100px; height: 100px;}
        &.span2 {top: 420px; right: auto; left: 209px; width: 50px; height: 50px;}
        &.span3 {top: 533px; right: auto; left: 213px; width: 80px; height: 80px;}
        &.span4 {top: auto; bottom: -29px; left: 407px; width: 100px; height: 100px;}
        &.span5 {bottom: auto; right: auto; left: 202px; top: 87px; width: 80px; height: 80px;}
      }
      .empty {width: 30px; height: 30px;
        &.mt1 {top: -15px; left: 321px;}
        &.mt2 {width: 20px; height: 20px; right: 280px; top: 99px;}
        &.mt3 {width: 24px; height: 24px; bottom: 244px; right: 209px}
        &.mt4 {display: none;}
        &.mt5 {display: none;}
      }
    }
  }
`
const Protocol = styled(FlexDiv) `
  position: relative; 
  &:before {content: ""; transform: translate(40%, -20%); position: absolute; opacity: 0.5; background: url(${circle}); background-size: cover; width: 517px; height: 517px; right: 0; bottom: 0px; z-index: -1;}
  .owl-carousel  {margin-top: 100px;}
  &:after {content: ""; background: url(${blob2}); width: 403px; height: 578px; position: absolute; left: -30%; top: 140px;  }
  @media screen and (max-width: 768px) {
    padding: 0 24px;
    &:before {display: none;}
    .owl-carousel  {margin-top: 60px;}
    .owl-dots {position: absolute; top: -31px; left: 0; right: 0; text-align: center;
      .owl-dot {height: 6px; width: 6px; background: rgba(255, 255, 255, 0.5); margin: 0 2px; border-radius: 8px; transition: all 0.3s ease-in-out;
        &.active {width: 60px; background: rgba(255, 255, 255, 1);}}
    }
  }
`
const OwlCard = styled.div `
  width: 460px; min-height: 400px; background: orange; border-radius: 20px; padding: 40px; display: flex; flex-flow: column; align-items: flex-start; max-width: 100%;
  h4 {font-weight: 700; font-size: 40px; text-transform: uppercase; margin: 0 0 20px; }
  p {font-weight: 500; font-size: 18px; line-height: 24px; opacity: 0.8; margin: 0 0 20px;}
  .btn {padding: 18px 46px; background: #FFFFFF; border-radius: 30px; font-size: 18px; font-weight: 600; color: #000000; margin-top: auto; transition: all 0.3s ease-in-out 0s;
    &:hover {background: #000; color: #fff;}
  }
  &.blank {opacity: 0; visibility: hidden;}
  &.blue {background: #7149E9;}
  &.pink {background: #E23FB7;}
  &.orange {background: #F68C20;}
  &.green {background: #53A548;}
  @media screen and (max-width: 768px) {
    margin: 0 auto; max-width: 100%;
  }
`
export default Home;