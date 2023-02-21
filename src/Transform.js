import React from 'react'
import styled from 'styled-components'
import jin from './images/jin.png'

const Transform = () => {
  const time = 1000
  const start = (obj) => {
    setTimeout(function(){
			document.querySelector('.' + obj + '1').className += ' active'
		},time * 1);

    setTimeout(function(){
			document.querySelector('.' + obj + '2').className += ' active'
		},time * 2);
    setTimeout(function(){
			document.querySelector('.' + obj + '3').className += ' active'
		},time * 3);
    setTimeout(function(){
			document.querySelector('.' + obj + '4').className += ' active'
		},time * 4);
  }

  const reset = (obj) => {
    document.querySelector('.' + obj + '1').classList.remove('active')
    document.querySelector('.' + obj + '2').classList.remove('active')
    document.querySelector('.' + obj + '3').classList.remove('active')
    document.querySelector('.' + obj + '4').classList.remove('active')
  }

  return (
    <div style={{overflow: 'hidden'}}>
      <h2 style={{margin: '100px 0 80px', fontSize: '70px', textAlign: 'center', fontWeight:'bold'}}>TRANSFORM</h2>
      <article>
				<ul className="list" style={{listStyle: 'none'}}>
					<Li>
						<figure className='jin1'>
							<img src={jin} alt="" />
						</figure>
						<strong className="txt">ROTATE(회전)</strong>
					</Li>
					<Li>
						<figure className='jin2'>
            <img src={jin} alt=""/>
						</figure>
						<strong className="txt">SCALE(부피)</strong>
					</Li>
					<Li>
						<figure className='jin3'>
            <img src={jin} alt=""/>
						</figure>
						<strong className="txt">SKEW(기울기)</strong>
					</Li>
					<Li>
						<figure className='jin4'>
            <img src={jin} alt=""/>
						</figure>
						<strong className="txt">TRANSLATE(이동)</strong>
					</Li>
				</ul>
        <button onClick={() => start('jin')}>START</button>
				<button onClick={() => reset('jin')}>RESET</button>
        </article>
        <h2 style={{margin: '100px 0 80px', fontSize: '70px', textAlign: 'center', fontWeight:'bold'}}>TRANSFORM & TRANSITION</h2>
      <article>
				<ul className="list" style={{listStyle: 'none'}}>
					<Li>
						<figure className='jin01'>
							<img src={jin} alt="" />
						</figure>
						<strong className="txt">ROTATE(회전)</strong>
					</Li>
					<Li>
						<figure className='jin02'>
            <img src={jin} alt=""/>
						</figure>
						<strong className="txt">SCALE(부피)</strong>
					</Li>
					<Li>
						<figure className='jin03'>
            <img src={jin} alt=""/>
						</figure>
						<strong className="txt">SKEW(기울기)</strong>
					</Li>
					<Li>
						<figure className='jin04'>
            <img src={jin} alt=""/>
						</figure>
						<strong className="txt">TRANSLATE(이동)</strong>
					</Li>
				</ul>
        <button onClick={() => start('jin0')}>START</button>
				<button onClick={() => reset('jin0')}>RESET</button>
        </article>
    </div>
  )
}

export default Transform

const Li = styled.li`
.txt {
  display: block; 
  margin-top:30px; 
  text-align: center;
}
img {
  width: 100%;
}
/* 벤더 프리픽스(각 브라우저의 버전에서 동작하도록 적어주는 것들 -moz-, -ms-, -webkit- 등등..) 생략 */
.jin1 {transform:rotate(20deg);}
/* rotate 회전, scale 크기(부피) 조절, skew 기울기 조절, translate 원래 위치를 기준으로 이동 */
.jin1.active {transform:rotate(0deg);}
.jin2 {transform:scale(.7);}
.jin2.active {transform:scale(1);}
.jin3 { transform:skew(30deg);}
.jin3.active {transform:skew(0deg);}
.jin4 {transform:translate(100px, -100px);}
.jin4.active {transform:translate(0px, 0px);}

.jin01 {transform:rotate(20deg);transition:transform .5s}
.jin01.active {transform:rotate(0deg);}
.jin02 {transform:scale(.7); transition:transform .5s}
.jin02.active {transform:scale(1);}
.jin03 { transform:skew(30deg); transition:transform .5s}
.jin03.active {transform:skew(0deg);}
.jin04 {transform:translate(100px, -100px); transition:transform .5s}
.jin04.active {transform:translate(0px, 0px);}

float:left; 
width:25%; 
padding:0 10px; 
box-sizing: border-box
`