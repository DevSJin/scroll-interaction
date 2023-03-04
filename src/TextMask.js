import React from 'react'
import styled from 'styled-components'

const TextMask = () => {
  return (
    <div className="wrap" style={{position: 'relative', overflow:'hidden'}}>
		<HeaderWrap className="header_wrap">
			<div className="logo">GGANG CODING</div>
		</HeaderWrap>
		<Sec01 className="sec01 active">
			<article className="inner" style={{maxWidth:'1100px', height: '100%', margin: '0 auto'}}>
				<div className="tb_row" style={{display:'table', width:'100%', height:'100%'}}>
					<div className="tb_cell" style={{display: 'table-cell', verticalAlign:'middle'}}>
						<nav className="nav_list">
							<ul className="list">
								<li>
									<a href="/" className="active">
										<span className="txt">TODAY</span>
										<span className="mask"></span> 
                                        {/* <!-- mask1 텍스트 등장 전에 나오는 흰색 배경--> */}
										<span className="mask2"></span> 
                                        {/* <!-- mask2 메뉴 오버시 나오는 노란색 밑줄 --> */}
									</a>
								</li>
								<li>
									<a href="/">
										<span className="txt">IMAGE Mask</span>
										<span className="mask"></span>
										<span className="mask2"></span>
									</a>
								</li>
								<li>
									<a href="/">
										<span className="txt">TEXT Mask</span>
										<span className="mask"></span>
										<span className="mask2"></span>
									</a>
								</li>
								<li>
									<a href="/">
										<span className="txt">OVERLAP</span>
										<span className="mask"></span>
										<span className="mask2"></span>
									</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
				<div className="bg_rotate"></div>
			</article>
		</Sec01>
		<Footer className="footer">
			<div className="text_area">
				<p>
					2020 GGANG CODING. 당신의 열정을 응원합니다.
				</p>
			</div>
		</Footer>
	</div>
  )
}

export default TextMask

const HeaderWrap = styled.div`
position: fixed; left:0; 
top:0; z-index:100; 
width:100%; height:70px; 
border-bottom:1px solid rgba(255,255,255,.2);
.logo {
margin-top:15px; 
padding-left:20px; 
font-size:24px; 
color:#fff;
 }
`

const Footer = styled.footer`
position:relative; 
height:300px; 
background: #111;
.text_area{
position: relative; z-index: 20; padding:20px;
 p{
color:#fff; 
font-size:34px; 
 }
}
`

const Sec01 = styled.section`
position:relative;
height:100vh; 
background: #111;
 .nav_list {
    position: relative;
    z-index: 20;
 }
`