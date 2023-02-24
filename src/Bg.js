import React from 'react'
import styled from 'styled-components'
import Moon from './images/motion_moon.png'
import Rope from './images/motion_rope.png'
import Mornig from './images/motion_sky1.gif'
import Day from './images/motion_sky2.gif'
import Afternoon from './images/motion_sky3.gif'
import Night from './images/motion_sky4.gif'

const Bg = () => {
  return (
    <div>
      <Area>
          <div className="bg one active"></div>
          <div className="bg two"></div>
          <div className="bg three"></div>
          <div className="bg four"></div>
          <MotionRope src={Rope} alt='' className="motion_rope"></MotionRope>
          <MotionMoon>
              <img src={Moon} alt='' />
          </MotionMoon>
      </Area>
    </div>
  )
}

export default Bg

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