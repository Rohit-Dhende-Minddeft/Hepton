import React, { Component,  useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom' 
import HeaderInner from '../component/headerInner'
import Footer from '../component/footer2'

import launchpadBg from '../assets/images/launchpadBg.png'
import arrow from '../assets/images/arrow.png'
import arrow1 from '../assets/images/arrow1.png'
import logo1 from '../assets/images/logo1.png'
import logo2 from '../assets/images/logo2.png'
import logo3 from '../assets/images/logo3.png'
import icon1 from '../assets/images/icon1.png'
import icon2 from '../assets/images/icon2.png'
import icon3 from '../assets/images/icon3.png'

const Home = (props) => {

/*  useEffect(() => { 
    window.scrollTo(0, 10) 
  }, []) */

    const [ToggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    const getActiveClass = (index, className) =>
        ToggleState === index ? className : '';

    return (
        <>
            <HeaderInner></HeaderInner>
            <PageMain>
            <ContentRow02>
                <SecTitle>
                    <TabLink>
                        <Link onClick={() => toggleTab(1)} className={`${getActiveClass(1, 'active')}`}>Live <span>3</span></Link>
                        <Link onClick={() => toggleTab(2)} className={`${getActiveClass(2, 'active')}`}>Upcoming <span>8</span></Link>
                        <Link onClick={() => toggleTab(3)} className={`${getActiveClass(3, 'active')}`}>Ended <span>4</span></Link>
                    </TabLink>
                    <ApplyBtn>
                        Apply for IDO
                        <span><img width={20} src={arrow}/></span>
                    </ApplyBtn>
                </SecTitle>
                <CardList>
                    <CardMain>
                        <figure>
                            <div className='cardlogos'><img width={98} src={logo1} /></div>
                            <div className='card-right'><img src={icon1} /> <span>BSC</span></div>
                        </figure>
                        <h3>Qudot Public Round</h3>
                        <p><strong>Price</strong>
                            1 HTE = 0.75 USDT / 1 USDT = 1.33 HTE
                        </p>
                        <p><strong>Soft/Hard Cap</strong>
                            0 HTE - 666,667 HTE
                        </p>
                        <p><strong>Time</strong>
                            <div className='dot'></div>2022.07.14 06.00 AM UTC
                        </p>
                        <div className='progress'>
                            <span>Progress</span>
                            <strong>0 USDT</strong>
                            <strong>70,000 USDT</strong>
                            <div className='progressbar'><b></b></div>
                        </div>
                        <Button>Details</Button>
                    </CardMain>
                    <CardMain>
                        <figure>
                            <div className='cardlogos'><img width={98} src={logo2} /></div>
                            <div className='card-right'><img src={icon2} /> <span>BSC</span></div>
                        </figure>
                        <h3>Qudot Public Round</h3>
                        <p><strong>Price</strong>
                            1 HTE = 0.75 USDT / 1 USDT = 1.33 HTE
                        </p>
                        <p><strong>Soft/Hard Cap</strong>
                            0 HTE - 666,667 HTE
                        </p>
                        <p><strong>Time</strong>
                            <div className='dot'></div>2022.07.14 06.00 AM UTC
                        </p>
                        <div className='progress'>
                            <span>Progress</span>
                            <strong>0 USDT</strong>
                            <strong>70,000 USDT</strong>
                            <div className='progressbar'><b></b></div>
                        </div>
                        <Button>Details</Button>
                    </CardMain>
                    <CardMain>
                        <figure>
                            <div className='cardlogos'><img width={98} src={logo3} /></div>
                            <div className='card-right'><img src={icon3} /> <span>BSC</span></div>
                        </figure>
                        <h3>Hunger Chains Public Round</h3>
                        <p><strong>Price</strong>
                            1 HTE = 0.75 USDT / 1 USDT = 1.33 HTE
                        </p>
                        <p><strong>Soft/Hard Cap</strong>
                            0 HTE - 666,667 HTE
                        </p>
                        <p><strong>Time</strong>
                            <div className='dot'></div>2022.07.14 06.00 AM UTC
                        </p>
                        <div className='progress'>
                            <span>Progress</span>
                            <strong>0 USDT</strong>
                            <strong>70,000 USDT</strong>
                            <div className='progressbar'><b></b></div>
                        </div>
                        <Button>Details</Button>
                    </CardMain>
                    <CardMain>
                        <figure>
                            <div className='cardlogos'><img width={98} src={logo1} /></div>
                            <div className='card-right'><img src={icon1} /> <span>BSC</span></div>
                        </figure>
                        <h3>Qudot Public Round</h3>
                        <p><strong>Price</strong>
                            1 HTE = 0.75 USDT / 1 USDT = 1.33 HTE
                        </p>
                        <p><strong>Soft/Hard Cap</strong>
                            0 HTE - 666,667 HTE
                        </p>
                        <p><strong>Time</strong>
                            <div className='dot'></div>2022.07.14 06.00 AM UTC
                        </p>
                        <div className='progress'>
                            <span>Progress</span>
                            <strong>0 USDT</strong>
                            <strong>70,000 USDT</strong>
                            <div className='progressbar'><b></b></div>
                        </div>
                        <Button>Details</Button>
                    </CardMain>
                    <CardMain>
                        <figure>
                            <div className='cardlogos'><img width={98} src={logo2} /></div>
                            <div className='card-right'><img src={icon2} /> <span>BSC</span></div>
                        </figure>
                        <h3>Qudot Public Round</h3>
                        <p><strong>Price</strong>
                            1 HTE = 0.75 USDT / 1 USDT = 1.33 HTE
                        </p>
                        <p><strong>Soft/Hard Cap</strong>
                            0 HTE - 666,667 HTE
                        </p>
                        <p><strong>Time</strong>
                            <div className='dot'></div>2022.07.14 06.00 AM UTC
                        </p>
                        <div className='progress'>
                            <span>Progress</span>
                            <strong>0 USDT</strong>
                            <strong>70,000 USDT</strong>
                            <div className='progressbar'><b></b></div>
                        </div>
                        <Button>Details</Button>
                    </CardMain>
                    <CardMain>
                        <figure>
                            <div className='cardlogos'><img width={98} src={logo3} /></div>
                            <div className='card-right'><img src={icon3} /> <span>BSC</span></div>
                        </figure>
                        <h3>Hunger Chains Public Round</h3>
                        <p><strong>Price</strong>
                            1 HTE = 0.75 USDT / 1 USDT = 1.33 HTE
                        </p>
                        <p><strong>Soft/Hard Cap</strong>
                            0 HTE - 666,667 HTE
                        </p>
                        <p><strong>Time</strong>
                            <div className='dot'></div>2022.07.14 06.00 AM UTC
                        </p>
                        <div className='progress'>
                            <span>Progress</span>
                            <strong>0 USDT</strong>
                            <strong>70,000 USDT</strong>
                            <div className='progressbar'><b></b></div>
                        </div>
                        <Button>Details</Button>
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
    &:after {content: ""; position: absolute; background: url(${launchpadBg}) no-repeat top right; top: 0; right: 0; left: 0; z-index: -1; padding: 0 0 80%;}
    @media screen and (max-width:768px) {
        position: relative;
        &:after {
            padding: 0 0 0; bottom: 0; top: -100px; background-size: cover; background-position: center center;
        }
    }
`;
const SecTitle = styled(FlexDiv)`
    width: 100%; flex-wrap: nowrap; overflow: auto; padding-top: 10px;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
    @media screen and (max-width:1024px) {
        width: calc(100% + 50px); margin: 0 -25px 0 -25px; padding: 10px 25px 0;
    }
`
const TabLink = styled(FlexDiv)`
    margin-right: auto; flex-wrap: nowrap;
    a {color: #FF6347; opacity: 0.3; font-size: 48px; font-weight: 700; margin-right: 50px; position: relative;
        &.active {color: #fff; opacity: 1;}
        span {position: absolute; font-size: 12px; width: 24px; height: 18px; background: #FF6347; border-radius: 30px; text-align: center; line-height: 18px; color: #fff; top: -10px; right: -23px;}
    }
    @media screen and (max-width:1024px) {
        a {font-size: 30px; margin-right: 44px;}
    }
`
const ApplyBtn = styled.div `
    font-size: 20px; font-weight: 500; margin-left: auto; display: flex; white-space: nowrap; align-items: center; cursor: pointer;
    span {width: 32px;height: 32px; border: 1px solid #FFFFFF; display: flex; align-items: center; justify-content: center; margin-left: 15px;}
    /* @media screen and (max-width:768px) {
        display: none;
    } */
`
const ContentRow02 = styled(FlexDiv)`
    width: 100%; max-width:1200px; margin:120px auto 0 auto; 
    @media screen and (max-width:1200px) {
        padding: 0 25px; margin: 60px auto 0 auto; 
    }
`
const CardList = styled.div`
    display: grid; grid-template-columns: repeat(3,1fr); width: 100%; padding: 40px 0 0; gap: 30px;
    @media screen and (max-width:1024px) {
        gap: 20px;
        grid-template-columns: repeat(2,1fr);
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(1,1fr);
    }
    `
const CardMain = styled.div `
    background: rgba(255, 255, 255, 0.11); backdrop-filter: blur(5px); min-height: 200px; padding: 30px; display: flex; flex-flow: column;
    h3 {font-size: 26px; font-weight: 700; color: #FFFFFF; margin: 40px 0 24px;}
    p {font-size: 16px; display: flex; align-items: center; flex-flow: wrap;
        strong {font-size: 14px; color: #FF6347; font-weight: normal; width: 100%; margin: 0 0 6px;}
        .dot {background: #4AE700; border-radius: 100%; height: 8px; width: 8px; box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1); display: inline-block; margin-right: 6px;}
    }
    .progress {
        display: flex; align-items: center; flex-flow: wrap; justify-content: space-between; margin-bottom: 40px;
        span {font-size: 14px; color: #FF6347; font-weight: normal; width: 100%; margin: 0 0 6px;}
        strong {font-size: 16px; font-weight: 400;}
        .progressbar {background: rgba(255, 255, 255, 0.2); display: flex; overflow: hidden; border-radius: 20px; height: 12px; width: 100%; margin-top: 15px;
            b {background: #37AC00; width: 55%; border-radius: 20px;}
        }
    }
    figure {
        display: flex; justify-content: space-between; align-items: center;
        .cardlogos {}
        .card-right {display: flex; align-items: center;
            img {max-width: 30px; max-height: 30px}
            span {border: 1px solid #FFFFFF; width: 60px; height: 40px; margin-left: 15px; font-size: 16px; color: #FFF; padding: 11px 10px; text-align: center;}
        }
    }
    @media screen and (max-width: 768px) {
        h3 {font-size: 25px;}
        p {margin: 0 0 20px;}
    }
`
const Button = styled.button `
	background: #FFFFFF; height: 50px; width: 100%; font-size: 18px; border: 0;
    &:hover {background: #000; color: #fff;}
`
const News = styled(FlexDiv) `
    background: #fff; width: 100%; margin: 97px 0 80px; color: #000; flex-flow: column; align-items: flex-start; padding: 28px;
    h4 {margin: 0 0 24px; font-size: 36px; font-weight: 700;}
    p {margin: 0; font-size: 16px; margin: 0 0 24px;}
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