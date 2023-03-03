import React from 'react'
import jin from './images/jin.png'
import styled, {keyframes} from 'styled-components'

const Keyframe = () => {
    const move = () => {
        setTimeout(() => {
            document.querySelector('.ani').classList.add('active')
        }, 2000)
    }
    const stop = () => {
        document.querySelector('.active').classList.remove('active')
    }
return (
    <div style={{overflow: 'hidden', minHeight: '1400px'}}>
        <h2 style={{margin: '100px 0 80px', fontSize: '70px', textAlign:'center'}}>CSS ANIMATION KEYFRAME</h2>
        <Rotate className='ani' style={{width: '400px', margin: '0 auto', display: 'flex'}}>
            <img src={jin} alt=""/>
        </Rotate>
        <button onClick={move}>Move</button>
        <button onClick={stop}>Stop</button>
    </div>
)
}
export default Keyframe

const move = keyframes`
  0% {
    transform:translate(0px,0px);
  }
  50% {
    transform:translate(200px,0px);
  }
  100% {
    transform:translate(600px, 200px);
  }
`;

const Rotate = styled.div`
display: inline-block;
padding: 2rem 1rem;
font-size: 1.2rem;
animation: ${move};
animation-duration: 4s; /*한번 재생걸리는시간*/
animation-delay: 0s; /*애니메이션 지연*/
animation-direction: alternate; /* 애니메이션 재생방향 alternate :순방향, reverse: 역방향*/
animation-iteration-count: infinite; /* 애니메이션 재생횟수 infinite 무한*/
animation-play-state: paused; /* 애니메이션 재생여부  running :재생 (기본값), paused(애니메이션정지)*/
animation-timing-function: linear; /*애니메이션 가속도 설정 linear, ease, ease-in, ease-out, custom 등*/
animation-fill-mode: both; /* forwards:애니메이션이 끝날 때 요소의 마지막 키 프레임의 스타일 값을 유지, backwards:첫 번째 키 프레임에 의해 설정된 스타일 값을 얻음, both:애니메이션이 시작되기 전에 첫 번째 키 프레임에서 설정 한 스타일 값을 가져 오도록하고 애니메이션이 끝날 때 마지막 키 프레임의 스타일 값을 유지 */
&.active {animation-play-state: running}
`;