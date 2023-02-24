import React from 'react'
import styled, {keyframes} from 'styled-components'
import Moon from './images/motion_moon.png'
import Rope from './images/motion_rope.png'
import Mornig from './images/motion_sky1.gif'
import Day from './images/motion_sky2.gif'
import Afternoon from './images/motion_sky3.gif'
import Night from './images/motion_sky4.gif'
import body from './images/motion_body2.png'
import hand from './images/motion_hand_right.png'
const ScrollMotionGraphic = () => {
return (
    <div>
    <Area>
        <div className="bg one active" />
        <div className="bg two" />
        <div className="bg three" />
        <div className="bg four" />
        <MotionRope src={Rope} alt='' className="motion_rope" />
        <Motion class="motion_ggang">
            <Figure class="ch_body" style={{zIndex:'20'}}>
                <img src={body} style={{width: '100%'}} alt=""/>
            </Figure>
            <HandMove class="ch_hand_right" style={{zIndex:'10'}}>
                <img src={hand} style={{width: '100%'}} alt="" />
            </HandMove>
        </Motion>
        <MotionMoon>
            <img src={Moon} alt='' />
        </MotionMoon>
    </Area>
    </div>
)
}

export default ScrollMotionGraphic

const Area = styled.div`
position: relative;
width: 100%;
height: 6000px;
background-color: black;
& .bg {position: absolute; left:0; top:0; width: 100%; height: 100%; opacity:0; transition:opacity .5s;}
& .bg.one {background-image:url(${Mornig})} 
/* 아침 */
& .bg.two {background-image:url(${Day})} 
& .bg.three {background-image:url(${Afternoon})} 
& .bg.four {background-image:url(${Night})}
& .bg.active {opacity: 1}
`

const MotionMoon = styled.figure`
visibility:hidden; 
position:fixed; 
right:100px; 
top:100px;
width : 200px ;
z-index:20; 
& > img {width: 100%}
opacity: 0; 
transform:translateY(-100px); 
-webkit-transform:translateY(-100px); 
-moz-transform:translateY(-100px); 
-o-transform:translateY(-100px); 
-ms-transform:translateY(-100px); 
transition:1s;
&.active{visibility:visible; opacity:1; transform:translateY(0px); -webkit-transform:translateY(0px); -moz-transform:translateY(0px); -o-transform:translateY(0px); -ms-transform:translateY(0px);}
`

const MotionRope = styled.div`
position: fixed; left:10%; top:0; 
z-index:20; width:20px; height: 100%; 
background-image:url(${Rope}); 
background-repeat: repeat-y; 
background-position: 50% 0; background-size: 20px;
`

const Motion = styled.div`
position: fixed; 
left:0%; top:100px; 
z-index:30; width:300px; 
will-change: transform;
`
const Figure = styled.figure`
position: absolute; 
top:0; 
left:50%; 
margin-left:0px; 
width:300px; 
font-size:0;
`

const move = keyframes`
  0% {
    transform:rotate(-18deg);
  }
  100% {
    transform:rotate(14deg);
  }
`;

const HandMove = styled(Figure)`
transform-origin: 199px 163px;
animation-name: ${move};
animation-duration: .8s; /*한번 재생걸리는시간*/
animation-delay: 0s; /*애니메이션 지연*/
animation-direction: alternate; /* 애니메이션 재생방향 alternate :순방향, reverse: 역방향*/
animation-iteration-count: infinite; /* 애니메이션 재생횟수 infinite 무한*/
animation-play-state: running; /* 애니메이션 재생여부  running :재생 (기본값), paused(애니메이션정지)*/
animation-timing-function: linear; /*애니메이션 가속도 설정 linear, ease, ease-in, ease-out, custom 등*/
animation-fill-mode: both;
`