import React from 'react'
import styled, {keyframes} from 'styled-components'
import body from './images/motion_body2.png'
import hand from './images/motion_hand_right.png'
const MortionGraphic = () => {
  return (
	<div>
		<div class="motion_ggang" style={{position:'relative', width:'300px'}}>
			<Figure class="ch_body" style={{zIndex:'20'}}>
				<img src={body} style={{width: '100%'}} alt=""/>
			</Figure>
			<HandMove class="ch_hand_right" style={{zIndex:'10'}}>
				<img src={hand} style={{width: '100%'}} alt="" />
			</HandMove>
		</div>
	</div>
  )
}

export default MortionGraphic

const Figure = styled.figure`
position: absolute; 
top:0; 
left:50%; 
margin-left:-150px; 
width:300px; 
font-size:0;
`

const move = keyframes`
  0% {
    transform:rotate(-140deg);
  }
  100% {
    transform:rotate(4deg);
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